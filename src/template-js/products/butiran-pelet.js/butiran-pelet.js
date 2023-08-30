export const cardsProducts = ({ image }) => {
  return `
    <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center ">
    <div class="butiran-pelet">
        <div class="card" style="width: 18rem;">
            <a href="#" class="card__pakan-kering">
                <img src="${image}" class="card-img-top card-pakan" alt="..." >
            </a>
            <div class="card-body butiran-pelet-body">
                <a href="#" class="card__pakan-kering">
                    <h5 class="card-title">carddsss</h5>
                </a>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
    </div>
    `;
};

export const accordionProduct = () => {
  return `
    <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          Product-1
        </button>
      </h2>

      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
        <div class="accordion-body">
            <a href="#">Product-1</a>
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          Product-2
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
        <div class="accordion-body">
            <a href="#">Product-2</a>
        </div>
      </div>
    </div>

    
  </div>
    `;
};

export const sectionProducts = () => {
  return `
  <div class="col-12 col-lg-2 text-center">
    <h4 class="text-one-fish border-onefish py-2">PRODUCTS</h4>
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action list-group-item-primary">PRODUCT 1</a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-primary mt-2">PRODUCT 2</a>
    </div>
  </div>
  `;
};

export const productItem = (title) => {
  return `
  <div class="col-12 col-lg-10 d-flex justify-content-center align-items-center flex-column">
  <div class="row mt-3">
    <h3>${title}</h3>
  </div>
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#/products=butiran-pelet?lohan-1" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
  </div>
  `;
};

export const productPelet = (img,text,title) => {
  return `
  <div class="col-12 col-lg-4">
  <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${text}</p>
      <a href="#/products=butiran-pelet?lohan-1" class="btn btn-primary">Lihat Selengkapnya</a>
    </div>
  </div>
</div>

  `
}