export const productPakan = (img, des, title,url) => {
    return `
    <div class="col-12 col-lg-4 justify-content-center d-flex">
    <div class="card">
      <img src="${img}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title text-one-fish">${title}</h5>
        <p>${des}</p>
        <a href="#/pakan-kering/${url}" class="btn btn-primary">Lihat Selengkapnya</a>
      </div>
    </div>
  </div>
  `
};