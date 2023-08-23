class BrandCompany extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="container-fluid my-5"> 
                <div class="container"> 
                    <div class="row justify-content-center align-items-center g-3">

                        <div class="col-lg-2 col-6"> 
                            <div class="image-brand mx-auto">
                                <img src="./brand-company/brand.jpg" alt="image"/>
                            </div>
                        </div>
                        

                        <div class="col-lg-2 col-6"> 
                            <div class="image-brand mx-auto">
                                <img src="./brand-company/brand.jpg" alt="image"/>
                            </div>
                        </div>

                        <div class="col-lg-2 col-6"> 
                            <div class="image-brand mx-auto">
                                <img src="./brand-company/brand.jpg" alt="image"/>
                            </div>
                        </div>

                        <div class="col-lg-2 col-6"> 
                            <div class="image-brand mx-auto">
                                <img src="./brand-company/brand.jpg" alt="image"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("brand-company", BrandCompany);
