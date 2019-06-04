'use strict';

(function() {
  /*global HTMLElement*/
  class GovBanner extends HTMLElement {
    constructor() {
        // establish prototype chain
        super();
    }

    // static get observedAttributes() {
    //   return ['image', 'title'];
    // }

    // fires after the element has been attached to the DOM
    connectedCallback() {
      this.update();
    }

    getSvgUri(svgString) {
      return `data:image/svg+xml;utf8,${svgString}`;
    }

    // attributeChangedCallback(attrName, oldVal, newVal) {
    //   if (attrName === 'options') {
    //     this.update();
    //   }
    // }

    update() {
      const smallUsFlagURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAG1BMVEUdM7EeNLIeM7HgQCDaPh/bPh/bPx/////bPyBEby41AAAAUElEQVQI123MNw4CABDEwD3jC/9/MQ1BQrgeOSkIqYe2o2FZtthXgQLgbHVMZdlsfUQFQnHtjP1+8BUhBDKOqtmfot6ojqPzR7TjdU+f6vkED+IDPhTBcMAAAAAASUVORK5CYII=";

      const dotGovIconSvgString = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><defs><style>.cls-1{fill:#2378c3;}.cls-2{fill:none;stroke:#005ea2;stroke-miterlimit:10;}</style></defs><title>dot gov icon</title><path class="cls-1" d="M36.5,20.91v1.36H35.15a0.71,0.71,0,0,1-.73.68H18.23a0.71,0.71,0,0,1-.73-0.68H16.14V20.91l10.18-4.07Zm0,13.57v1.36H16.14V34.48a0.71,0.71,0,0,1,.73-0.68h18.9A0.71,0.71,0,0,1,36.5,34.48ZM21.57,23.62v8.14h1.36V23.62h2.71v8.14H27V23.62h2.71v8.14h1.36V23.62h2.71v8.14h0.63a0.71,0.71,0,0,1,.73.68v0.68H17.5V32.45a0.71,0.71,0,0,1,.73-0.68h0.63V23.62h2.71Z"/><circle class="cls-2" cx="27" cy="27.12" r="26"/></svg>';

      const httpsIconSvgString = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><defs><style>.cls-1{fill:#719f2a;}.cls-2{fill:none;stroke:#538200;stroke-miterlimit:10;}</style></defs><title>https icon</title><path class="cls-1" d="M34.72,34.84a1.29,1.29,0,0,1-1.29,1.29H20.57a1.29,1.29,0,0,1-1.29-1.29V27.12a1.29,1.29,0,0,1,1.29-1.29H21V23.26a6,6,0,0,1,12,0v2.57h0.43a1.29,1.29,0,0,1,1.29,1.29v7.72Zm-4.29-9V23.26a3.43,3.43,0,0,0-6.86,0v2.57h6.86Z"/><circle class="cls-2" cx="27" cy="27.12" r="26"/></svg>';

      const dotGovIconURI = this.getSvgUri(dotGovIconSvgString);
      const httpsIconURI = this.getSvgUri(httpsIconSvgString);

      this.innerHTML = `
      <div class="usa-banner">
        <div class="usa-accordion">
            <header class="usa-banner__header">
                <div class="usa-banner__inner">
                    <div class="grid-col-auto">
                        <img class="usa-banner__header-flag" src=${smallUsFlagURI} alt="U.S. flag">
                    </div>
                    <div class="grid-col-fill tablet:grid-col-auto">
                        <p class="usa-banner__header-text">An official website of the United States government</p>
                        <p class="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>
                    </div>
                    <button class="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner">
              <span class="usa-banner__button-text">Here’s how you know</span>
            </button>
                </div>
            </header>
            <div class="usa-banner__content usa-accordion__content" id="gov-banner">
                <div class="grid-row grid-gap-lg">
                    <div class="usa-banner__guidance tablet:grid-col-6">
                        <img class="usa-banner__icon usa-media-block__img" src=${dotGovIconURI} alt="Dot gov">
                        <div class="usa-media-block__body">
                            <p>
                                <strong>The .gov means it’s official.</strong>
                                <br> Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re on a federal government site.
                            </p>
                        </div>
                    </div>
                    <div class="usa-banner__guidance tablet:grid-col-6">
                        <img class="usa-banner__icon usa-media-block__img" src=${httpsIconURI} alt="Https">
                        <div class="usa-media-block__body">
                            <p>
                                <strong>The site is secure.</strong>
                                <br> The <strong>https://</strong> ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      `;
    }
  }

  // let the browser know about the custom element
  /*global customElements*/
  customElements.define('gov-banner', GovBanner);
})();