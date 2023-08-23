class Company extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-fluid background-company my-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <div class="image-card__company"> 
                        <img src="./icon-one-fish-2.jpeg" alt="gambar"/>
                    </div>
                
                    <p class="text-card__company">"Dori sebetulnya itu sama dengan patin. Tapi umum mengetahui kalau namanya dori itu produk olahan dari luar. Yang produk Indonesia kita lebih sering menyebutnya dengan patin," Kata Edy Prabowo, Rabu (1/7/2020). Lebih lanjut, produsen diminta untuk memperjelas nama produk ikannya.</p>
                </div>
            </div>
            <div class="row text-center">
                <a class="text-card__company link__company" href="#">See More >></a>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define("company-onefish", Company);
