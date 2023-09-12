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
                            <img src="./news/Kalikan 1.jpeg" class="card-img-top" alt="Sertifikat-1">
                            <div class="card-body">
                                <h5 class="card-title text-one-fish">Kalikan Expo 2023</h5>
                                <p class="card-text">Setelah terhenti akibat pandemi covid-19, Kalikan.id menyelenggarakan pamekan ikan hias untuk para penghobies atau UMKM. Pameran ikan hias terbesar ini digelar selama 3 hari 14 – 16 Oktober 2023 di Jiexpo Kemayoran, Jakarta. Pameran ini menyuguhkan berbagai macam hal yang berkaitan dengan Perawatan ikan hias dari produsen makanan ikan, aksesoris aquarium, contest ikan hias, hingga para pedagan UMKM yang ikut berkontribusi dan hadir di event Kalikan Expo 2023.</p>
                                <a href="#/news" class="btn btn-blue__one-fish">Lihat Selengkapnya</a>
                              </div>
                            </div>
                        </div>

                    <div class="col-12 col-md-6 mt-4">
                        <h4 class="text-one-fish">LATEST ARTICLES</h4>
                        <div class="garis"></div>
                        <div class="card mt-3">
                            <img src="./news/sertifikat siliwangi.jpeg" class="card-img-top" alt="Sertifikat-2">
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
