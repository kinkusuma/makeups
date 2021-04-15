import './makeup-item.js';

class ItemList extends HTMLElement {

    set items(items) {
        this._items = items;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._items.forEach(item => {
            const itemElement = document.createElement("makeup-item");
            itemElement.item = item;
            this.appendChild(itemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        this.innerHTML += `<h2 class="placeholder" style="margin-left:30%;">${message}</h2>`;
    }
}

customElements.define("item-list", ItemList);