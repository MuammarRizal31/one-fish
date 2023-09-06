class CarouselComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="row justify-content-center d-flex">
    <div class="col-12 col-lg-8 ">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel w-100">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000">
        <img src="./home-image/Sampul Utama.png" class="img-fluid" alt="image-1">
        <div class="carousel-caption d-none d-md-block">
    </div>
  </div>
  <div class="carousel-item" data-bs-interval="1000">
    <img src="./carousel-image/carousel-11.jpg" class="img-fluid" alt="image-2">
    <div class="carousel-caption d-none d-md-block">
      
    </div>
  </div>
  <div class="carousel-item" data-bs-interval="1000">
    <img src="./carousel-image/carousel-11.jpg" class="img-fluid" alt="image-3">
    <div class="carousel-caption d-none d-md-block">
      
    </div>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
</div>
</div>
</div>
`;
  }
}

customElements.define("carousel-onefish", CarouselComponent);
