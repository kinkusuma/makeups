class MakeUpItem extends HTMLElement {

    set item(item) {
        this._item = item;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card mb-3">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${this._item.image_link}" alt="${this._item.image_link}" style="max-width:20rem;">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${this._item.name}</h5>
                <p class="card-text">${this._item.description}</p>
                </div>
            </div>
            </div>
        </div>`;
    }
}

customElements.define("makeup-item", MakeUpItem);