class ProductComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <div class="container container-product">
            <h2 class="title mt-3 mb-1">Judul Products</h2>
            <div class="garis mb-3"></div>

            <div class="row g-3 align-items-center justify-content-around"> 

              <div class="col-sm-12 col-md-6 card-product__onefish"> 
                <a href="#"> 
                  <img src="product-home/image-1.jpg" alt="image"/>
                </a>
                <p>Sub Heading</p>
              </div>

              <div class="col-sm-12 col-md-6 card-product__onefish"> 
                <a href="#"> 
                  <img src="product-home/image-1.jpg" alt="image"/>
                </a>
                <p>SUB HEADING</p>
              </div>

            </div>
        </div>
      `;
  }
}

customElements.define("product-home", ProductComponent);
