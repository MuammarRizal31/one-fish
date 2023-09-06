class NewsHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-fluid"> 
            <div class="container">
                <div class="row">

                    <div class="col-12 col-md-6 mt-4">
                        <h4 class="text-one-fish">LATEST NEWS</h4>
                        <div class="garis"></div>
                        <div class="card mt-3">
                            <img src="./news/sertifikat channa contest.jpeg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-one-fish">Pelet One Fish Support Mini Contest Flaring Together</h5>
                                <p class="card-text">yang diselenggarakan oleh tim yang bertempatan di Bawang, Batang, Jawa Tengah. Pelet One Fish memberikan produk kepada juara 1 pada setiap kelasnya. Selain memberikan produk Pelet One Fish juga memberikan produk untuk para Panitia sebagai ucapan terimakasih karna telah mengundang dan mengajak Pelet One Fish untuk menjadi bagian sejarah dalam event Channa di Jawa Tengah</p>
                                <a href="#/news" class="btn btn-blue__one-fish">Lihat Selengkapnya</a>
                              </div>
                            </div>
                        </div>

                    <div class="col-12 col-md-6 mt-4">
                        <h4 class="text-one-fish">LATEST ARTICLES</h4>
                        <div class="garis"></div>
                        <div class="card mt-3">
                            <img src="./news/sertifikat siliwangi.jpeg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-one-fish">Pelet One Fish Support Siliwangi Channa Contest 2</h5>
                                <p class="card-text">Pada tanggal 16 – 18 Desember 2022 Pelet One Fish ikut berkontribusi pada event SILIWANGI CHANNA CONTEST 2 yang diselenggarakan oleh tim …….. yang bertempatan di Beji, Depok, Jawa Barat. Pelet One Fish memberikan produk kepada juara 1 pada setiap kelasnya. Selain memberikan produk Pelet One Fish juga memberikan produk untuk para Panitia sebagai ucapan terimakasih karna telah mengundang dan mengajak Pelet One Fish untuk menjadi bagian sejarah dalam event Channa di Jawa Barat.

                                </p>
                                <a href="#/news" class="btn btn-blue__one-fish">Lihat Selengkapnya</a>
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
