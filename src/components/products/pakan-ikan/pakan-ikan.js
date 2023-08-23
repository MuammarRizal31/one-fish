class PakanIkan extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="container container-carousel my-3">
            <div class="title-with-line">
                <div class="line"></div>
                    <h2 class="title mb-3 text-one-fish">PAKAN PELET</h2>
                <div class="line"></div>
            </div>
        </div>

        <div class="container"> 
            <div class="row">     
                <div class="col-12 mb-3"> 
                    <img src="./about-us/hero-section.jpg" class="card-img-top" alt="...">
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("pakan-ikan", PakanIkan);
