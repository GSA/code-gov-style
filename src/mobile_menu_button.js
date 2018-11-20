'use strict';

(function() {
  /*global HTMLElement*/
  class MobileMenuButton extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();
    }

    static get observedAttributes() {
      return ['open'];
    }

    // fires after the element has been attached to the DOM
    connectedCallback() {
      this.innerHTML = `
        <div class="mobile-menu-button" onClick="this.parentElement.toggleState()">
          <div class="icon"></div>
        </div>
      `
      this.icon = this.querySelector('.icon')
      this.update()
    }

    getAttr() {
      this.open = [true, 'true', 'True'].includes(this.getAttribute('open'))
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === 'open') {
        this.update();
      }
    }

    toggleState() {
      console.log("toggling state")
      this.open = !this.open
      this.update()
    }

    update() {
      if (this.icon) {
        this.getAttr()
        if (this.open) {
          this.icon.className = 'icon icon-close'
        } else {
          this.icon.className = 'icon icon-menu'
        }
      }
    }

  }

  // let the browser know about the custom element
  /*global customElements*/
  customElements.define('mobile-menu-button', MobileMenuButton);
})();