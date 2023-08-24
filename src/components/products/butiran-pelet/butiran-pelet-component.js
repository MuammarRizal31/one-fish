class ButiranPelet extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
<div class="container container-carousel my-3">
    <div class="title-with-line">
        <div class="line"></div>
            <h2 class="title mb-3 text-one-fish">PAKAN KERING</h2>
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

<div class="container">
    <div class="row">
        <div class="col-12 col-md-3">
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Product - 1
                </button>
                </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <button type="button" class="btn btn-primary btn-sm w-100">Small button</button>
      <button type="button" class="btn btn-primary btn-sm w-100 mt-2">Small button</button>
      <button type="button" class="btn btn-primary btn-sm w-100 mt-2">Small button</button>
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Product - 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <button type="button" class="btn btn-primary btn-sm w-100">Small button</button>
      <button type="button" class="btn btn-primary btn-sm w-100 mt-2">Small button</button>
      <button type="button" class="btn btn-primary btn-sm w-100 mt-2">Small button</button>
      </div>
    </div>
  </div>
  
</div>

        </div>

        <div class="col-12 col-md-8">
            <div class="row">

                <div class="col-4">
                    <div class="card">
                        <img src="./brand-company/brand.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="card">
                        <img src="./brand-company/brand.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="card">
                        <img src="./brand-company/brand.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="card">
                        <img src="./brand-company/brand.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="card">
                        <img src="./brand-company/brand.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="card">
                        <img src="./brand-company/brand.jpg" class="card-img-top" alt="...">
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
</div>
`;
  }
}

customElements.define("butiran-pelet", ButiranPelet);
