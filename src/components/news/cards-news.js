class CardsNews extends HTMLElement {
  render() {
    this.innerHTML = `
        <div class="container">

            <div class="news-heading">
                <h4 class="text-one-fish">NEWS</h4>
                <div class="garis mb-3"></div>
            </div>

            <div class="row">

                <div class="col-12 col-md-5">
                    <div class="image-news">
                        <a href="#">
                            <img src="../carousel-image/carousel-2.jpg"/>
                        </a>
                    </div>
                </div>
                
                <div class="col-12 col-md-7">
                    <div class="description-news">
                        <figure>

                        <div>
                            <p class="text-muted date-news">31 Maret 2002</p>
                        </div>
                        
                        <div class="link-title__news mt-0">
                            <a href="#" class="text-one-fish">Judul Acara</a>
                            <div class="garis mb-3"></div>
                        </div>

                        <div>
                            <p class="m-0">
                                PT Matahari Sakti kembali hadir dalam acara Indonesia International Pet Expo (IIPE) 2022 yang diselenggarakan di ICE BSD City Tangerang pada 26 - 28 Agustus 2022
                            </p>
                        </div>


                        </figure>
                    </div>
                    <a href="#" type="button" class="btn btn-info text-end btn-news mt-auto">Lihat Selengkapnya</a>
                </div>

            </div>

            <div class="row mt-3">

            <div class="col-12 col-md-5">
                <div class="image-news">
                    <a href="#">
                        <img src="../carousel-image/carousel-2.jpg"/>
                    </a>
                </div>
            </div>
            
            <div class="col-12 col-md-7">
                <div class="description-news">
                    <figure>

                    <div>
                        <p class="text-muted date-news">31 Maret 2002</p>
                    </div>
                    
                    <div class="link-title__news mt-0">
                        <a href="#" class="text-one-fish">Judul Acara</a>
                        <div class="garis mb-3"></div>
                    </div>

                    <div>
                        <p class="m-0">
                            PT Matahari Sakti kembali hadir dalam acara Indonesia International Pet Expo (IIPE) 2022 yang diselenggarakan di ICE BSD City Tangerang pada 26 - 28 Agustus 2022
                        </p>
                    </div>


                    </figure>
                </div>
                <a href="#" type="button" class="btn btn-info text-end btn-news mt-auto">Lihat Selengkapnya</a>
            </div>

        </div>

        <div class="row mt-3">

        <div class="col-12 col-md-5">
            <div class="image-news">
                <a href="#">
                    <img src="../carousel-image/carousel-2.jpg"/>
                </a>
            </div>
        </div>
        
        <div class="col-12 col-md-7">
            <div class="description-news">
                <figure>

                <div>
                    <p class="text-muted date-news">31 Maret 2002</p>
                </div>
                
                <div class="link-title__news mt-0">
                    <a href="#" class="text-one-fish">Judul Acara</a>
                    <div class="garis mb-3"></div>
                </div>

                <div>
                    <p class="m-0">
                        PT Matahari Sakti kembali hadir dalam acara Indonesia International Pet Expo (IIPE) 2022 yang diselenggarakan di ICE BSD City Tangerang pada 26 - 28 Agustus 2022
                    </p>
                </div>


                </figure>
            </div>
            <a href="#" type="button" class="btn btn-info text-end btn-news mt-auto">Lihat Selengkapnya</a>
        </div>

    </div>

        </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("cards-news", CardsNews);
