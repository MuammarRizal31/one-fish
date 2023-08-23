class NewsHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-fluid"> 
            <div class="container">
                <div class="row align-items-center justify-content-around">

                    <div class="col-12 col-md-6 ">
                        <h1>LATEST NEWS</h1>
                        <div class="card">
                            <img src="./icon-one-fish-2.jpeg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                            </div>
                        </div>

                    <div class="col-12 col-md-6">
                        <h1>LATEST ARTICLES</h1>
                        <div class="card">
                            <img src="./icon-one-fish-2.jpeg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("news-home", NewsHome);
