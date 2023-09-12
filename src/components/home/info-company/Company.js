class Company extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-fluid background-company my-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12 text-center">
                    <div class="image-card__company mx-auto"> 
                        <img src="./icon-one-fish-2.jpeg" alt="gambar" />
                    </div>
                
                    <p class="text-card__company fs-lg-5 text-center">One Fish telah memulai bisnis barunya sejak bulan Oktober 2022. Di awal berdirinya, One Fish menyediakan kebutuhan pakan ikan hias dan pakan kering yang berkualitas tinggi yang didukung oleh mesin yang canggih dan sumber daya manusia yang unggul. Dengan umurnya yang baru sudah dapat menjangkau ke seluruh jaringan Nusantara sesuai kebutuhan dan permintaan pasar.
                    One Fish berkomitmen dalam mengembangkan produk-produknya untuk menjadi yang terbaik di Tanah Air dan berdaya saing Internasional untuk mewujudkan sebuah ikan hias yang diidamkan bagi semua orang, Hal ini sesuai dengan tagline kami  “High Quality Food for High Quality Fish”. Dengan menunjukan bahwa One Fish memiliki Legalitas Merek dan diakui oleh Kementerian Hukum dan Hak Asasi Manusia.
                    </p>
                </div>
            </div>
            <div class="row text-center">
              <div>
                <a class="text-card__company link__company btn btn-blue__one-fish" href="#/about-us">See More >></a>
              </div>
            </div>
        </div>
    </div>
  `;
  }
}

customElements.define("company-onefish", Company);
