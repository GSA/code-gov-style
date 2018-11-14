'use strict';

(function() {
  /*global HTMLElement*/
  class QualityTag extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();
    }

    static get observedAttributes() {
      return ['score'];
    }

    // fires after the element has been attached to the DOM
    connectedCallback() {
      this.update();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === 'score') {
        this.update();
      }
    }

    update() {
      const rounded = Math.round(Number(this.getAttribute('score')) * 10) / 10;
      let category = '';
      if (rounded > 0 && rounded < 4) {
        category = 'low';
      } else if (rounded >= 4 && rounded < 7) {
        category = 'medium'
      } else if (rounded >= 7) {
        category = 'high';
      } else {
        category = '';
      }
      this.innerHTML = `<div class="corner-tag ${category}"><div class="corner-tag-value">${rounded}</div></div>`;
    }

  }

  // let the browser know about the custom element
  /*global customElements*/
  customElements.define('quality-tag', QualityTag);
})();