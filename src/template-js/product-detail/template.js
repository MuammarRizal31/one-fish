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

export const productPakanPelet = (img, title, des, url) => {
  return `
  <div class="col-12 col-lg-4 justify-content-center d-flex mt-2">
  <div class="card">
    <img src="${img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${des}</p>
      <a href="#/detail/${url}" class="btn btn-primary">Lihat Selengkapnya</a>
    </div>
  </div>
</div>
  `;
};

export const templateDetailPage = (title, deskripsi, fungsi, nutrisi, komposisi, caraPakai, typeNetto) => {
  return `
  <table class="table table-success table-striped">
  <thead>
    <h1 class="text-center">${title}</h1>
    <tr>
      <th scope="col">Deskripsi</th>
      <th scope="col">Fungsi</th>
      <th scope="col">Nutrisi</th>
      <th scope="col">Komposisi</th>
      <th scope="col">Cara Pakai</th>
      <th scope="col">Type Netto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${deskripsi}</th>
      <td>${fungsi}</td>
      <td>${nutrisi}</td>
      <td>${komposisi}</td>
      <td>${caraPakai}</td>
      <td>${typeNetto}</td>
    </tr>
  </tbody>
</table>
  `;
};
