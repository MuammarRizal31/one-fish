export const detailTemplateProduct = (img, des, title) => {
  return `
    <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="${title}">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${des}</p>
    </div>
  </div>
    `;
};

export const detailSectionProduct = (title, img) => {
  return `
      <div class="container container-carousel my-3">
          <div class="title-with-line">
              <div class="line"></div>
                  <h2 class="title mb-3 text-one-fish">PAKAN PELET</h2>
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
      `;
};

export const productPakanPelet = (img, title, des, namaIkan) => {
  return `
  <div class="col-12 col-lg-4 justify-content-center d-flex">
  <div class="card">
    <img src="${img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${des}</p>
      <a href="#/detail/${title}" class="btn btn-primary">Lihat Selengkapnya</a>
    </div>
  </div>
</div>
  `;
};

export const templateDetailPage = (nama, des, img) => {
  return `

  <div class="card mb-3">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${nama}</h5>
    <p class="card-text">${des}</p>
    <p class="card-text"><small class="text-body-secondary">${nama}</small></p>
  </div>
</div>
  `;
};
