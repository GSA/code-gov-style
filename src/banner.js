'use strict';

(function() {
  /*global HTMLElement*/
  class SimpleBanner extends HTMLElement {
    constructor() {
        // establish prototype chain
        super();
    }

    static get observedAttributes() {
      return ['image', 'title'];
    }

    // fires after the element has been attached to the DOM
    connectedCallback() {
      this.update();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === 'options') {
        this.update();
      }
    }

    update() {
      this.innerHTML = `
        <div class="banner" style="background-image: url('${this.getAttribute('image')}')">
          <div class="banner-content">
            <div class="banner-title">${this.getAttribute('title')}</div>
          </div>
        </div>
      `;
    }

  }

  // let the browser know about the custom element
  /*global customElements*/
  customElements.define('simple-banner', SimpleBanner);
})();