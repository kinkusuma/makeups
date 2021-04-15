class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <div class="form-group d-flex my-3">
            <input placeholder="Search By Brand eg, Maybelline, Dior or L'Oreal" class="form-control mr-sm-2" id="searchElement" type="search">
            <button class="btn btn-dark" id="searchButtonElement" type="button">Search</button>
        </div>
       `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);