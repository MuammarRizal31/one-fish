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
                  <img src="./home-image/Sampul Utama.png" class="card-img-top" alt="IMAGE-SAMPUL">
              </div>
          </div>
      </div>
      `;
};

export const productPakanPelet = (img, title, des, url) => {
  return `
  <div class="col-12 col-lg-4 justify-content-center d-flex mt-2">
  <div class="card">
    <img src="${img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title text-one-fish">${title}</h5>
      <p class="card-text">${des}</p>
      <a href="#/detail/${url}" class="btn btn-primary">Lihat Selengkapnya</a>
    </div>
  </div>
</div>
  `;
};

export const templateDetailPage = (image,title, deskripsi, fungsi, nutrisi, komposisi, caraPakai, typeNetto) => {
  return `
  <div class="container">
    <div class="row">
    <div class="col-12">
      <h3 class="text-one-fish">${title}</h3>
      <div class="garis"> </div>
    </div>
      <div class="card mb-3 border-none mt-3">
        <img src="${image}" class="m-auto card-img-top img-fluid image-section" alt="${title}">
        <div class="card-body">
          <p class="card-text">${deskripsi}</p>

          <br/>

          <h5 class="text-one-fish">FUNGSI</h5>
          <p>${fungsi}</p>

          <br/>

          <h5 class="text-one-fish">NUTRISI</h5>
          <p>${nutrisi}</p>

          <br/>

          <h5 class="text-one-fish">KOMPOSISI</h5>
          <p>${komposisi}</p>

          <br/>

          <h5 class="text-one-fish">CARA PAKAI</h5>
          <p>${caraPakai}</p>

          <br/>

          <h5 class="text-one-fish">TYPE NETTO</h5>
          <p>${typeNetto}</p>
        </div>
      </div>
    </div>
  </div>
  `;
};
