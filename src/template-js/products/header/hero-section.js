export const heroSectionProduct = (image = "./home-image/Sampul Utama.png", title = "PAKAN PELET") => {
  return `
    <div class="container container-carousel my-3">
        <div class="title-with-line">
            <div class="line"></div>
                <h2 class="title mb-3 text-one-fish">${title}</h2>
            <div class="line"></div>
        </div>
    </div>

    <div class="container"> 
        <div class="row">     
            <div class="col-12 mb-3 shadow p-3 mb-5 bg-body rounded"> 
                <img src="${image}" class="card-img-top" alt="hero section">
            </div>
        </div>
    </div>
    `;
};
