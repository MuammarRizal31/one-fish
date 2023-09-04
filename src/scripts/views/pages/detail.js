import { templateDetailPage } from "../../../template-js/product-detail/template";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";
import bettaDetail from "../../data-one-fish/products/pakan-pelet/detail/betta";
import dataDetailChanna from "../../data-one-fish/products/pakan-pelet/detail/channa";
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
    if (dataDetailChanna[url.id]) {
      dataDetailChanna[url.id].map(({ title, deskripsi, fungsi, nutrisi, komposisi, caraPakai, typeNetto }) => {
        return (container.innerHTML = templateDetailPage(title, deskripsi, fungsi, nutrisi, komposisi, caraPakai, typeNetto));
      });
    }
  },
};

export default Detail;
