/* global HTMLElement */
class FilterTag extends HTMLElement {

  constructor() {
      super();
  }

  static get observedAttributes() {
    return ['title'];
  }

  // fires after the element has been attached to the DOM
  connectedCallback() {
    this.update();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'title') {
      this.update();
    }
  }

  update() {
    this.innerHTML = `
      <div class="filter-tag">
        <div class="filter-tag-title">${this.getAttribute('title')}</div>
      </div>
    `;
  }

}

/* global customElements */
customElements.define('filter-tag', FilterTag);
