'use strict';

(function() {
    class FilterBox extends HTMLElement {
        constructor() {

            // establish prototype chain
            super();
        }
        
        get collapsed() {
          return this.className.includes("collapsed");
        }
        
        set collapsed(newValue) {
          if (newValue) {
            this.className = (this.className + " collapsed").trim();
          } else {
            this.className = this.className.replace("collapsed", "").trim();
          }
        }


        // fires after the element has been attached to the DOM
        connectedCallback() {
          this.update();
        }

        getHTML() {
          return `
            <div class="title">${this.title}</div>
            <ul class="options">
              ${this.options.map((option, index) => {
                let className = "";
                if (index >= 4 && this.collapsed) className += "hideOnCollapsed";
                return '<li class="' + className + '"><input type="checkbox" id="' + option.value + '" value="' + option.value + '"><label for="' + option.value + '"><span>' + option.name + '</span></label></li>';
              }).join("\n")}
              ${this.options.length >= 4 ? '<li><span class="showMore">Show more</span><span class="showLess">Show less</span></li>' : ''}
            </ul>
          `;     
        }
        
        get values() {
          return Array.from(this.querySelectorAll(":checked")).map(tag => tag.value);
        }

        update() {

            this.collapsed = true;          
          
            this.innerHTML = "";
          
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
            
         
            this.querySelectorAll('.showLess, .showMore').forEach(tag => {
              tag.addEventListener('click', _ => {
                this.toggleState();
              }, false);
            });
            
            this.querySelectorAll('input').forEach(tag => {
              tag.addEventListener('change', event => {
                const li = event.target.parentElement;
                if (event.target.checked) {
                  li.className += " checked";
                } else {
                  li.className = li.className.replace("checked", "");                  
                }
              }, false);
            });
            
            /*
            addElementButton.addEventListener('click', this.addListItem, false);
            */
        }
        
        toggleState() {
          this.collapsed = !this.collapsed;
        }

    }

    // let the browser know about the custom element
    customElements.define('filter-box', FilterBox);
})();