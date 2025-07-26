 class CustomButton extends HTMLElement {
  constructor() {
    super(); // Обязательный вызов конструктора родительского класса

    // Прикрепляем Shadow DOM к элементу
    this.attachShadow({ mode: 'open' }); // 'open' - Shadow DOM доступен из JS, 'closed' - нет

    // Клонируем содержимое шаблона и добавляем в Shadow DOM
	  console.log('custom', document.getElementById('custom-button-template'));
    const template = document.getElementById('custom-button-template').content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    // Можно добавить обработчик кликов
    this.shadowRoot.querySelector('button').addEventListener('click', this._handleClick.bind(this));
  }

  // Метод, который будет вызываться при клике
  _handleClick(event) {
    // Если кнопка disabled, не обрабатываем клик
    if (this.hasAttribute('disabled')) {
      event.stopPropagation(); // Предотвращаем всплытие события
      event.preventDefault(); // Предотвращаем дефолтное действие
      return;
    }
    // Вы можете пробросить кастомное событие наружу
    this.dispatchEvent(new CustomEvent('button-click', {
      bubbles: true, // Событие будет всплывать
      composed: true, // Событие будет проходить через Shadow DOM
      detail: {
        message: 'Button was clicked!',
        variant: this.getAttribute('variant'),
        size: this.getAttribute('size')
      }
    }));
  }

  // Опционально: отслеживание атрибутов (если нужна JS-логика при их изменении)
  // Для стилей это не обязательно, т.к. CSS :host([attribute]) справляется сам.
  static get observedAttributes() {
    return ['disabled']; // Например, чтобы React на изменение disabled
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'disabled') {
      const buttonElement = this.shadowRoot.querySelector('button');
      if (newValue !== null) { // Атрибут установлен (disabled="true" или просто disabled)
        buttonElement.setAttribute('disabled', '');
      } else { // Атрибут удален
        buttonElement.removeAttribute('disabled');
      }
    }
  }

  // Пример геттера/сеттера для атрибутов, если хотите программный доступ
  get variant() {
    return this.getAttribute('variant');
  }
  set variant(value) {
    this.setAttribute('variant', value);
  }

  get size() {
    return this.getAttribute('size');
  }
  set size(value) {
    this.setAttribute('size', value);
  }
}

customElements.define('custom-button', CustomButton);

// Dont forget to change sprite
