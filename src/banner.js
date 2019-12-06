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
        <section class="margin-top-8">
          <div class="bg-primary padding-y-8">
          
            <div class="font-heading-3xl text-uppercase text-white text-center">${this.getAttribute('title')}</div>
          </div>
        </section>
      `;
    }

  }

  // let the browser know about the custom element
  /*global customElements*/
  customElements.define('simple-banner', SimpleBanner);
})();