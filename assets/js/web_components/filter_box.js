'use strict';


(function() {
  /*global HTMLElement*/
  class FilterBox extends HTMLElement {
    constructor() {
        // establish prototype chain
        super();

        this.internalId = Math.random().toString(36).substring(2, 7);
    }

    static get observedAttributes() {
      return ['options'];
    }

    get collapsed() {
      return this.className.indexOf("collapsed") > -1;
    }
    
    get showAll() {
      return this.className.indexOf("showAll") > -1;
    }
    
    setClassName(className, newValue) {
      if (newValue) {
        this.className = (this.className.replace(className, "") + " " + className).trim();
      } else {
        this.className = this.className.replace(className, "").trim();
      }          
    }

    set collapsed(newValue) {
      this.setClassName("collapsed", newValue);
    }
    
    set showAll(newValue) {
      this.setClassName("showAll", newValue);
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

    getHTML() {
      return `
        <div class="title-bar">${this.title}<i class="icon icon-angle-down"></i><i class="icon icon-angle-up"></i></div>
        <ul class="options">
          ${this.options.map((option, index) => {
            let className = "";
            if (index >= 4 && this.showAll) className += "hideOnCollapsed";
            if (option.checked) className += " checked";
            return '<li class="' + className + '"><input' + (option.checked ? ' checked': '')  + ' type="checkbox" id="' + this.internalId + option.value + '" value="' + option.value + '"><label for="' + this.internalId + option.value + '"><span>' + option.name + '</span></label></li>';
          }).join("\n")}
          ${this.options.length > 4 ? '<li><span class="showMore">Show more</span><span class="showLess">Show less</span></li>' : ''}
        </ul>
      `;
    }

    get values() {
      return Array.from(this.querySelectorAll(":checked")).map(tag => tag.value);
    }

    parseOptions() {
      const rawOptions = this.getAttribute('options');
      let parsedOptions = null;
      try {
        parsedOptions = JSON.parse(rawOptions);
      } catch (error) {
        console.error("[filter-box] failed to parse rawOptions:", rawOptions);
        throw error;
      }
      if (parsedOptions) {
        this.options = parsedOptions.map(option => {
          if (typeof option === "object" && option.name && option.value) {
            return {
              name: option.name,
              value: option.value,
              checked: option.checked ? true : false
            };
          } else {
            return { name: option, value: option, checked: false };
          }
        });
      } else {
        this.options = [];
      }
    }

    update() {

        this.showAll = true;

        this.innerHTML = "";

        // creating a container for the editable-list component
        const container = document.createElement('div');

        this.title = this.getAttribute('title');
        this.parseOptions();

        container.className = "filter-box";

        container.innerHTML = this.getHTML();

        this.appendChild(container);

        this.querySelector(".icon-angle-down").addEventListener('click', _ => {
          this.setClassName('collapsed', false);
        }, false);

        this.querySelector(".icon-angle-up").addEventListener('click', _ => {
          this.setClassName('collapsed', true);
        }, false);

        Array.prototype.slice.call(this.querySelectorAll('.showLess, .showMore')).forEach(tag => {
          tag.addEventListener('click', _ => {
            this.toggleState();
          }, false);
        });

        Array.prototype.slice.call(this.querySelectorAll('input')).forEach(tag => {
          tag.addEventListener('change', event => {
            const li = event.target.parentElement;
            if (event.target.checked) {
              li.className = (li.className.replace("checked", "") + " checked").trim();
            } else {
              li.className = li.className.replace("checked", "").trim();
            }
          }, false);
        });
        
        /*
        addElementButton.addEventListener('click', this.addListItem, false);
        */
        /*global CustomEvent*/
        const event = new CustomEvent('change', {});
        this.dispatchEvent(event);
    }

    toggleState() {
      this.showAll = !this.showAll;
    }

  }

  // let the browser know about the custom element
  /*global customElements*/
  customElements.define('filter-box', FilterBox);
})();