'use strict';
import { smallUsFlagURI, dotGovIconURI, httpsIconURI } from './constants/imageURIs';

/*global HTMLElement*/
class GovBanner extends HTMLElement {
  constructor() {
      // establish prototype chain
      super();
      this.render();
      this.buttonToggle = this.querySelector('button.usa-accordion__button');
      this.bannerHeader = this.querySelector('header.usa-banner__header');
      this.accordionContent = this.querySelector('div.usa-banner__content');

      this.buttonToggle.addEventListener('click', (event) => {
        console.log('event', event);
        console.log('i got clicked!');
        if (this.buttonToggle.getAttribute('aria-expanded') === 'true') {
          this.collapseBanner();
        } else {
          this.expandBanner();
        }
      });
  }

  // static get observedAttributes() {
  //   return ['image', 'title'];
  // }

  // fires after the element has been attached to the DOM
  // connectedCallback() {
  // }

  // attributeChangedCallback(attrName, oldVal, newVal) {
  //   if (attrName === 'options') {
  //     this.render();
  //   }
  // }

  // disconnectedCallback() {
  //   this.buttonToggle.removeEventListener('click', () => {
  //
  //   });
  // }

  expandBanner() {
    this.accordionContent.removeAttribute('hidden');
    this.buttonToggle.setAttribute('aria-expanded', 'true');
    this.bannerHeader.classlist.add('usa-banner__header--expanded');
  }

  collapseBanner() {
    this.accordionContent.setAttribute('hidden', '');
    this.buttonToggle.setAttribute('aria-expanded', 'false');
    this.bannerHeader.classlist.remove('usa-banner__header--expanded');
  }

  render() {
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
          <div class="usa-banner__content usa-accordion__content" id="gov-banner" hidden>
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
