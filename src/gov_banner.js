'use strict';
(function() {
  const smallUsFlagURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAG1BMVEUdM7EeNLIeM7HgQCDaPh/bPh/bPx/////bPyBEby41AAAAUElEQVQI123MNw4CABDEwD3jC/9/MQ1BQrgeOSkIqYe2o2FZtthXgQLgbHVMZdlsfUQFQnHtjP1+8BUhBDKOqtmfot6ojqPzR7TjdU+f6vkED+IDPhTBcMAAAAAASUVORK5CYII=";

  const dotGovIconURI = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCA1NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzc4YzM7fS5jbHMtMntmaWxsOm5vbmU7c3Ryb2tlOiMwMDVlYTI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5kb3QgZ292IGljb248L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM2LjUsMjAuOTF2MS4zNkgzNS4xNWEwLjcxLDAuNzEsMCwwLDEtLjczLjY4SDE4LjIzYTAuNzEsMC43MSwwLDAsMS0uNzMtMC42OEgxNi4xNFYyMC45MWwxMC4xOC00LjA3Wm0wLDEzLjU3djEuMzZIMTYuMTRWMzQuNDhhMC43MSwwLjcxLDAsMCwxLC43My0wLjY4aDE4LjlBMC43MSwwLjcxLDAsMCwxLDM2LjUsMzQuNDhaTTIxLjU3LDIzLjYydjguMTRoMS4zNlYyMy42MmgyLjcxdjguMTRIMjdWMjMuNjJoMi43MXY4LjE0aDEuMzZWMjMuNjJoMi43MXY4LjE0aDAuNjNhMC43MSwwLjcxLDAsMCwxLC43My42OHYwLjY4SDE3LjVWMzIuNDVhMC43MSwwLjcxLDAsMCwxLC43My0wLjY4aDAuNjNWMjMuNjJoMi43MVoiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMiIgY3g9IjI3IiBjeT0iMjcuMTIiIHI9IjI2Ii8+PC9zdmc+';

  const httpsIconURI = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCA1NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM3MTlmMmE7fS5jbHMtMntmaWxsOm5vbmU7c3Ryb2tlOiM1MzgyMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5odHRwcyBpY29uPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNC43MiwzNC44NGExLjI5LDEuMjksMCwwLDEtMS4yOSwxLjI5SDIwLjU3YTEuMjksMS4yOSwwLDAsMS0xLjI5LTEuMjlWMjcuMTJhMS4yOSwxLjI5LDAsMCwxLDEuMjktMS4yOUgyMVYyMy4yNmE2LDYsMCwwLDEsMTIsMHYyLjU3aDAuNDNhMS4yOSwxLjI5LDAsMCwxLDEuMjksMS4yOXY3LjcyWm0tNC4yOS05VjIzLjI2YTMuNDMsMy40MywwLDAsMC02Ljg2LDB2Mi41N2g2Ljg2WiIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMjciIGN5PSIyNy4xMiIgcj0iMjYiLz48L3N2Zz4=';

  const themeStyleString = `
    .usa-banner {
      background-color: #323a45;
    }

    .usa-banner__header-text,
    .usa-media-block__body {
      color: #ffffff;
    }
  `;

  /*global HTMLElement*/
  class GovBanner extends HTMLElement {
    constructor() {
        // establish prototype chain
        super();
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.updateTheme();
        this.isCollapsed = true;
    }

    static get observedAttributes() {
      return ['dark'];
    }

    // fires after the element has been attached to the DOM
    connectedCallback() {
      this.render();
      this.postRenderActions();
    }

    postRenderActions() {
      this.buttonToggle = this.querySelector('button.usa-accordion__button');
      this.bannerHeader = this.querySelector('header.usa-banner__header');
      this.accordionContent = this.querySelector('div.usa-banner__content');
      this.buttonToggle.addEventListener('click', this.toggleAccordion);
    }

    updateTheme() {
      this.themeStyleString = this.hasAttribute('dark') && ['', true, 'true', 'True'].contains(this.getAttribute('dark'))
        ? themeStyleString : '';
    }

    toggleAccordion() {
      if (this.buttonToggle.getAttribute('aria-expanded') === 'true') {
        this.collapseBanner();
      } else {
        this.expandBanner();
      }
    }

    disconnectedCallback() {
      this.buttonToggle.removeEventListener('click', this.toggleAccordion);
    }

    expandBanner() {
      this.accordionContent.removeAttribute('hidden');
      this.buttonToggle.setAttribute('aria-expanded', 'true');
      this.bannerHeader.classList.add('usa-banner__header--expanded');
      this.isCollapsed = false;
    }

    collapseBanner() {
      this.accordionContent.setAttribute('hidden', '');
      this.buttonToggle.setAttribute('aria-expanded', 'false');
      this.bannerHeader.classList.remove('usa-banner__header--expanded');
      this.isCollapsed = true;
    }

    attributeChangedCallback(attrName) {
      if (attrName === 'dark') {
        this.updateTheme();
        this.render();
        this.postRenderActions();
      }
    }

    render() {
      const { isCollapsed } = this;
      const hiddenString = isCollapsed ? 'hidden' : '';
      const ariaExpandedString = isCollapsed ? 'false' : 'true';
      this.innerHTML = `
      <style>
        ${this.themeStyleString}
      </style>
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
                    <button class="usa-accordion__button usa-banner__button" aria-expanded=${ariaExpandedString} aria-controls="gov-banner">
                      <span class="usa-banner__button-text">Here’s how you know</span>
                    </button>
                </div>
            </header>
            <div class="usa-banner__content usa-accordion__content" id="gov-banner" ${hiddenString}>
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
})()
