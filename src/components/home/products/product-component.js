class ProductComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <div class="container container-product">
            <h4 class="title mt-3 mb-1 text-one-fish">PRODUCTS</h4>
            <div class="garis mb-3"></div>

            <div class="row g-3 align-items-center justify-content-around"> 

              <div class="col-sm-12 col-md-6 card-product__onefish"> 
                <a href="#/products=pelet-pakan" class="img-product__home"> 
                <img src="./home-image/Pakan Pelet.png" alt="image-1"/>
                </a>
                <p>PELET PAKAN</p>
              </div>
              
              <div class="col-sm-12 col-md-6 card-product__onefish"> 
              <a href="#/products=pakan-kering" class="img-product__home"> 
              <img src="./home-image/pakan kering.jpg" alt="image-2"/>
                </a>
                <p>PAKAN KERING</p>
              </div>

            </div>
        </div>
      `;
  }
}

customElements.define("product-home", ProductComponent);
