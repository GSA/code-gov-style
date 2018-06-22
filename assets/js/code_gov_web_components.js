'use strict';


// https://www.w3schools.com/howto/howto_custom_select.asp

(function() {
    class DropDown extends HTMLElement {
        constructor() {
            super();

            this.state = "closed";

            const container = document.createElement('div');
            console.log("container:", container);
            container.className = "closed";
            container.style.width = "200px";

            const items = JSON.parse(this.attributes.items.value);
            this.items = items;
            console.log("items:", items);

            // creating the inner HTML of the editable list element
            container.innerHTML = this.compile();

            console.log("container:", container);

            // binding methods
            this.handleRemoveItemListeners = this.handleRemoveItemListeners.bind(this);
            this.removeListItem = this.removeListItem.bind(this);

            this.appendChild(container);

            /*if the user clicks anywhere outside the select box,
            then close all select boxes:*/
            document.addEventListener("click", () => this.close());

            this.querySelector("button").addEventListener("click", () => {
              console.log('you clicked the button');
              if (this.state === "closed") {
                this.state = "opened";
                this.container.className = "opened";
              } else if (this.state === "opened") {
                this.container.className = "closed";
              }
            });
        }

        compile() {

          return `
            <select>
              ${this.items.map(item =>'<option value="${item}">' + item + '</option>').join('\n')}
            </select>
            <div class="fake-select">
              <div class="fake-selection">${this.items[0]}</div>
              ${this.items.map(item => '<div class="fake-option">' + item + '</div>').join('\n')}
            </div>
            <button class="arrow-button icon icon-angle-down"></button>
          `;
        }

        // fires after the element has been attached to the DOM
        connectedCallback() {
            /*
            let removeElementButtons = [...this.shadowRoot.querySelectorAll('.editable-list-remove-item')];
            let addElementButton = this.shadowRoot.querySelector('.editable-list-add-item');

            this.itemList = this.shadowRoot.querySelector('.item-list');

            this.handleRemoveItemListeners(removeElementButtons);
            addElementButton.addEventListener('click', this.addListItem, false);
            */
        }

        close() {

          var x, y, i, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }

        handleRemoveItemListeners(arrayOfElements) {
            arrayOfElements.forEach(element => element.addEventListener('click', this.removeListItem, false));
        }

        removeListItem(e) {
            e.target.parentNode.remove();
        }
    }

    // let the browser know about the custom element
    customElements.define('code-gov-dropdown', DropDown);
})();
