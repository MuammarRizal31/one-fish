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
                                <img src="./brand-company/image-1.png" alt="image"/>
                            </div>
                        </div>
                        

                        <div class="col-lg-2 col-6"> 
                            <div class="image-brand mx-auto">
                                <img src="./brand-company/image-2.jpg" alt="image"/>
                            </div>
                        </div>

                        <div class="col-lg-2 col-6"> 
                            <div class="image-brand mx-auto">
                                <img src="./brand-company/image-3.png" alt="image"/>
                            </div>
                        </div>

                        <div class="col-lg-2 col-6"> 
                            <div class="image-brand mx-auto">
                                <img src="./brand-company/image-4.jpg" alt="image"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("brand-company", BrandCompany);
