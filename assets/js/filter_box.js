'use strict';

(function() {
    class FilterBox extends HTMLElement {
        constructor() {

            // establish prototype chain
            super();
        }


        // fires after the element has been attached to the DOM
        connectedCallback() {
            // creating a container for the editable-list component
            const container = document.createElement('div');
          
            this.title = this.getAttribute('title');
            const rawOptions = this.getAttribute('options');
            let parsedOptions = null;
            try {
              parsedOptions = JSON.parse(rawOptions);
            } catch (error) {
              console.error("[filter-box] failed to parse rawOptions:", rawOptions);
              throw error;
            }
            this.options = parsedOptions.map(option => {
              return { name: option, value: option, selected: false };
            });
            console.log("options:", this.options);

            container.className = "filter-box";
            
            container.innerHTML = this.getHTML(); 

            // appending the container to the shadow DOM
            this.appendChild(container);            
            
            /*
            let removeElementButtons = [...this.shadowRoot.querySelectorAll('.editable-list-remove-item')];
            let addElementButton = this.shadowRoot.querySelector('.editable-list-add-item');

            this.itemList = this.shadowRoot.querySelector('.item-list');

            this.handleRemoveItemListeners(removeElementButtons);
            addElementButton.addEventListener('click', this.addListItem, false);
            */
        }
        
        getHTML() {
          return `
            <div class="title">${this.title}</div>
            <ul class="options">
              ${this.options.map(option => {
                return '<li><input type="checkbox" id="' + option.value + '" value="' + option.value + '"><label for="' + option.value + '"><span>' + option.name + '</span></label></li>';
              }).join("\n")}
            </ul>
          `;          
        }
    }

    // let the browser know about the custom element
    customElements.define('filter-box', FilterBox);
})();