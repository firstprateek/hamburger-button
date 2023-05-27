/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * HamburgerButton widget: <hamburger-button></hamburger-button>.
 * 
 * This widget is a hamburger button that changes into a cross button upon click.
 * 
 * @property hidden {boolean} - If false then button is hidden.
 * @property open {boolean} - If true then the stripes change into a cross.
 * 
 * @fires click - Indicates when the button is clicked. The open property is modified when button is clicked.
 * 
 * @cssproperty --hamburger-stripe-color - This variable controls the color of the stripes
 */
export class HamburgerButton extends LitElement {
  static get styles() {
    return css`
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      div {
          background-color: var(--hamburger-stripe-color, #58595B);
          width: 35px;
          height: 5px;
          margin: 6px 0;
          border-radius: 4px;
          transition: 0.4s;
      }
      .change div:nth-child(1) {
          -webkit-transform: rotate(-45deg) translate(-8px, 6px);
          transform: rotate(-45deg) translate(-8px, 6px);
      }
      .change div:nth-child(2) {
          opacity: 0;
      }
      .change div:nth-child(3) {
          -webkit-transform: rotate(45deg) translate(-9px, -8px);
          transform: rotate(45deg) translate(-9px, -8px);
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Whether the button is visible.
       * @type {Boolean}
       */
      hidden: { reflect: true, type: Boolean },

      /**
       * Whether the button is in the "open" state. Typcially used to signal that the associated menu is open.
       * @type {number}
       */
      open: { reflect: true, type: Boolean },
    };
  }

  constructor() {
    super();
    this.hidden = false;
    this.open = false;
  }

  render() {
    if (this.hidden) {
        return html``;
    }

    return html `
        <button @click=${() => {this.open = !this.open}} class=${this.open ? "change" : ""} aria-label="Toggle Menu">
            <div></div>
            <div></div>
            <div></div>
        </button>
    `;
  }
}

window.customElements.define('hamburger-button', HamburgerButton);
