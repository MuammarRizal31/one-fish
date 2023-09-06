import { templateDetailPage } from "../../../template-js/product-detail/template";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";
import dataDetailPakanPelet from "../../data-one-fish/products/dataDetailAll";
import UrlParser from "../../routes/url-parser";

const Detail = {
  async render() {
    return `
    <div id="image-container__detail">
  
    </div>
    
      <div class="container" id="container-one-fish__detail"> </div>
    `;
  },

  async afterRender() {
    const container = document.getElementById("container-one-fish__detail");
    const containerImage = document.querySelector('#image-container__detail');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (dataDetailPakanPelet[url.id]) {
      dataDetailPakanPelet[url.id].map(({imageSampul,image, title, deskripsi, fungsi, nutrisi, komposisi, caraPakai, typeNetto }) => {
        containerImage.innerHTML = heroSectionProduct(imageSampul)
        return (container.innerHTML = templateDetailPage(image,title, deskripsi, fungsi, nutrisi, komposisi, caraPakai, typeNetto));
        
      });
    }
  },
};

export default Detail;
