import { templateDetailPage } from "../../../template-js/product-detail/template";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";
import { dataDetail } from "../../data-one-fish/products/pakan-pelet";
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
    console.log(dataDetail);
    if (dataDetail[url.id]) {
      dataDetail[url.id].map(({ nama, des, img }) => {
        console.log(dataDetail[url]);
        return (container.innerHTML = templateDetailPage(nama, des, img));
      });
    }
  },
};

export default Detail;
