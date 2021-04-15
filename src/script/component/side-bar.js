import Categories from '../data/data-categories.json';

class SideBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
          <aside>
            <div class="card" style="background-color: #ffE3E3; width:15rem; margin-right:3rem;">
              <div class="card-body">
                <p style="font-weight:bold;">
                  Freebies and Sample Alert
                </p>
                <p>
                  Create this alert now and never miss a freebies or a free samples.
                </p>
                <form class="my-3">
                  <input class="form-control mb-2" type="search" placeholder="Enter Your Email" aria-label="Alert">
                  <button class="btn btn-secondary" type="submit">Create Alert</button>
                </form>
              </div>
            </div>`;
        let htmlContent = '';

        Categories.categories.map((category) => {
            htmlContent += `
            <p style="font-weight:bold; margin-top:1rem;">
              ${category.name}
            </p>`;

            category.items.map((item) => {
                htmlContent += `
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    ${item}
                  </label>
                </div>`;
            });
        });

        this.innerHTML += htmlContent;
        this.innerHTML += `</aside>`;
    }
}

customElements.define("side-bar", SideBar);