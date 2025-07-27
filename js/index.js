 class CustomButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const template = document.getElementById('custom-button-template').content.cloneNode(true);
    this.shadowRoot.appendChild(template);
  }
}

customElements.define('custom-button', CustomButton);

// Dont forget to change sprite
