import { templateDetailPage } from "../../../template-js/product-detail/template";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";
import dataDetailPakanPelet from "../../data-one-fish/products/dataDetailAll";
import UrlParser from "../../routes/url-parser";

const Detail = {
  async render() {
    return `
    ${heroSectionProduct()}
        <div class="container" id="container-one-fish__detail"> </div>
    `;
  },

  async afterRender() {
    const container = document.getElementById("container-one-fish__detail");
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (dataDetailPakanPelet[url.id]) {
      dataDetailPakanPelet[url.id].map(({ title, deskripsi, fungsi, nutrisi, komposisi, caraPakai, typeNetto }) => {
        return (container.innerHTML = templateDetailPage(title, deskripsi, fungsi, nutrisi, komposisi, caraPakai, typeNetto));
      });
    }
  },
};

export default Detail;
