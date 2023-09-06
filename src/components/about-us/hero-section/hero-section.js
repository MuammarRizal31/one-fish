class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container container-carousel my-3">
            <div class="title-with-line">
                <div class="line"></div>
                    <h2 class="title mb-3 text-one-fish">About One-Fish</h2>
                <div class="line"></div>
            </div>
        </div>

        <div class="container"> 
            <div class="row">     
                <div class="col-12 mb-3"> 
                    <img src="./home-image/Sampul Utama.png" class="card-img-top" alt="...">
                </div>
            </div>
        </div>

        <div class="container my-3">
            <div class="row">
                <h2 class="text-one-fish">The Company</h2>
                <div class="garis"></div>
                <div class="col-12 my-3">
                   
                    <p class="mt-2">
                            One Fish telah memulai bisnis barunya sejak bulan Oktober 2022. Di awal berdirinya, One Fish    menyediakan kebutuhan pakan ikan hias dan pakan kering yang berkualitas tinggi yang didukung oleh mesin yang canggih dan sumber daya manusia yang unggul. Dengan umurnya yang baru sudah dapat menjangkau ke seluruh jaringan Nusantara sesuai kebutuhan dan permintaan pasar. 
                        </p>

                        <p>
                            One Fish berkomitmen dalam mengembangkan produk-produknya untuk menjadi yang terbaik di Tanah Air dan berdaya saing Internasional untuk mewujudkan sebuah ikan hias yang diidamkan bagi semua orang, Hal ini sesuai dengan tagline kami  <b>“High Quality Food for High Quality Fish”.</b> Dengan menunjukan bahwa One Fish memiliki Legalitas Merek dan diakui oleh Kementerian Hukum dan Hak Asasi Manusia.
                        </p>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("hero-section", HeroSection);
