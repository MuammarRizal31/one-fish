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
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="fs-one-fish accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        PAKAN PELET
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul class="list-group">
          <li class="list-group-item">
            <a href="#/pakan-pelet/Louhan" class="text-side-bar">LOUHAN</a>
          </li>
          <li class="list-group-item">
            <a href="#/pakan-pelet/Betta" class="text-side-bar">BETTA</a>
          </li>
          <li class="list-group-item">
            <a href="#/pakan-pelet/Aquascape" class="text-side-bar">AQUASCAPE</a>
          </li>
          <li class="list-group-item">
            <a href="#/pakan-pelet/Channa" class="text-side-bar">CHANNA</a>
          </li>
          <li class="list-group-item">
            <a href="#/pakan-pelet/Cichlid" class="text-side-bar">CICHLID</a>
          </li>
          <li class="list-group-item">
            <a href="#/pakan-pelet/Discus" class="text-side-bar">DISCUS</a>
          </li>
          <li class="list-group-item">
            <a href="#/pakan-pelet/Goldfish" class="text-side-bar">GOLDFISH</a>
          </li>
          <li class="list-group-item">
            <a href="#/pakan-pelet/Guppy" class="text-side-bar">GUPPY</a>
          </li>
          <li class="list-group-item">
            <a href="#/pakan-pelet/Marine" class="text-side-bar">MARINE</a>
          </li>
      </ul>  
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button fs-one-fish collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        PAKAN KERING
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul class="list-group">
      <li class="list-group-item">
        <a href="#/pakan-kering/baby-shrimp" class="text-side-bar">Baby Shrimp</a>
      </li>
      <li class="list-group-item">
        <a href="#/pakan-kering/worm" class="text-side-bar">WORM</a>
      </li>
      <li class="list-group-item">
        <a href="#/pakan-kering/cricket" class="text-side-bar">CRICKET</a>
      </li>
      <li class="list-group-item">
        <a href="#/pakan-kering/maggot" class="text-side-bar">MAGGOT</a>
      </li>
      <li class="list-group-item">
        <a href="#/pakan-kering/shrimp" class="text-side-bar">SHRIMP</a>
      </li>
      <li class="list-group-item">
        <a href="#/pakan-kering/wealworm" class="text-side-bar">WEALWORM</a>
      </li>
      <li class="list-group-item">
        <a href="#/pakan-kering/superworm" class="text-side-bar">SUPERWORM</a>
      </li>
    </ul>
      </div>
    </div>
  </div>
  </div>
  </div>
  `;
};

export const productItem = (title) => {
  return `
  <div class="col-12 col-lg-10 d-flex justify-content-center align-items-center flex-column">
  <div class="row mt-3">
    <h3 class="text-one-fish">${title}</h3>
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

export const productPelet = (img, des, title,url) => {
  return `
  <div class="col-12 col-lg-4 justify-content-center d-flex">
  <div class="card">
    <img src="${img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title text-one-fish">${title}</h5>
      <a href="#/pakan-pelet/${url}" class="btn btn-primary">Lihat Selengkapnya</a>
    </div>
  </div>
</div>
`;
};
