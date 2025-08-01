const template = document.createElement('template');
template.setAttribute('id', 'custom-button-template');

template.innerHTML = `
      <style>
        button {
          font-family: "Noto Sans";
          cursor: pointer;
          border: unset;
          display: flex;
          align-items: center;
        }

        ::slotted([slot="icon-left"]) {
		  display: flex;
          padding-right: 6px;
        }

        ::slotted([slot="icon-right"]) {
		  display: flex;
          padding-left: 6px;
        }

        /* ==== Variant Styles ==== */
        :host([variant="contained"][color="primary"]) button {
          background-color: var(--indigo-700);
          color: var(--white);

          &:hover,
          &:focus-visible {
            background-color: var(--indigo-800);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 4px rgba(68, 76, 231, 0.12);
          }

          &:disabled {
            background-color: var(--neutral-100);
            color: var(--neutral-400);
            box-shadow: none;
          }
        }

        :host([variant="contained"][color="error"]) button {
          background-color: var(--red-600);
          color: var(--white);

          &:hover,
          &:focus-visible {
            background-color: var(--red-700);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 1px var(--red-100), 0 0 0 4px rgba(217, 45, 32, 0.12);
            border-radius: 4px;
          }

          &:disabled {
            background-color: unset;
            color: var(--neutral-400);
            box-shadow: none;
          }
        }

        :host([variant="outlined"]) button {
          background-color: unset;
          border: 0.5px solid var(--neutral-200);
          color: var(--black);

          &:hover,
          &:focus-visible {
            background-color: var(--neutral-50);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 4px rgba(68, 76, 231, 0.12);
            border-radius: 4px;
          }

          &:disabled {
            background-color: var(--neutral-100);
            border: unset;
            color: var(--neutral-400);
            box-shadow: none;
          }
        }

        :host([variant="contained"]) button,
        :host([variant="outlined"]) button {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          border-radius: 4px;
        }

        :host([variant="link"]) button {
          background-color: unset;
          color: var(--indigo-700);

          &:hover,
          &:focus-visible {
            background-color: var(--neutral-50);
            border-radius: 4px;
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 4px rgba(68, 76, 231, 0.12);
          }

          &:disabled {
            background-color: unset;
            color: var(--neutral-400);
            box-shadow: none;
          }
        }

        :host([variant="text"]) button {
          background-color: unset;
          padding: unset;
        }

        :host([variant="text"][color="indigo"]) button {
          color: var(--indigo-700);

          &:hover,
          &:focus-visible {
            color: var(--indigo-800);
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 4px rgba(68, 76, 231, 0.12);
            border-radius: 4px;
          }

          &:disabled {
            color: var(--neutral-400);
          }
        }

        :host([variant="text"][color="gray"]) button {
          color: var(--neutral-600);

          &:hover,
          &:focus-visible {
            color: var(--neutral-900);
          }

          &:focus-visible {
            border-radius: 4px;
            outline: none;
            box-shadow: 0 0 0 4px rgba(68, 76, 231, 0.12);
          }

          &:disabled {
            color: var(--neutral-400);
          }
        }

        /* ==== Size Styles ==== */
        :host(:is([variant="contained"], [variant="link"])[size="2xl"][icon-only]) button {
          padding: 16px;
        }

        :host(:is([variant="contained"], [variant="link"])[size="md"]) button {
          padding: 10px 14px;
        }

        :host(:is([variant="contained"], [variant="link"])[size="lg"]) button {
          padding: 10px 16px;
        }

        :host(:is([variant="contained"], [variant="link"])[size="xl"]) button {
          padding: 12px 20px;
        }

        :host(:is([variant="contained"], [variant="link"])[size="2xl"]) button {
          padding: 16px 24px;
        }

        :host(:is([variant="outlined"])[size="2xl"][icon-only]) button {
          padding: 15px;
        }

        :host(:is([variant="outlined"])[size="md"]) button {
          padding: 9px 13px;
        }

        :host(:is([variant="outlined"])[size="lg"]) button {
          padding: 9px 15px;
        }

        :host(:is([variant="outlined"])[size="xl"]) button {
          padding: 11px 19px;
        }

        :host(:is([variant="outlined"])[size="2xl"]) button {
          padding: 15px 23px;
        }

        :host([size="md"]) button {
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
        }

        :host([size="lg"]) button {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }

        :host([size="xl"]) button {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }

        :host([size="2xl"]) button {
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
        }

        /* ==== Disabled ==== */
        :host([disabled]) button {
          opacity: 0.6;
          cursor: not-allowed;
        }
      </style>
      <button>
        <slot name="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right"></slot>
      </button>
`

document.body.appendChild(template);

class CustomButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open',
	  delegatesFocus: true
    });

    const template = document.getElementById('custom-button-template').content.cloneNode(true);
    this.shadowRoot.appendChild(template);
  }
}

customElements.define('custom-button', CustomButton);
