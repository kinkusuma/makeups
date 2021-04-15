class NavBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">MAKEUPS</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse fw-bold" id="navbarContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Latest</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Popular</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Find</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Review</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Freebies/Samples</a>
              </li>
            </ul>
            <div class="d-flex">
              <div class="dropdown">
                <div class="text-decoration-none dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
                  User's
                </div>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Saved Item</a></li>
                  <li><a class="dropdown-item" href="#">Review</a></li>
                  <li><a class="dropdown-item" href="#">History</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Sign in</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>`;
    }
}

customElements.define("nav-bar", NavBar);