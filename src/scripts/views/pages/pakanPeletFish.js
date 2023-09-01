import { productPakanPelet } from "../../../template-js/product-detail/template";
import { sectionProducts } from "../../../template-js/products/butiran-pelet.js/butiran-pelet";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";
import { dataLouhan } from "../../data-one-fish/products/louhan/louhan";
import { dataDetail, dataFish } from "../../data-one-fish/products/pakan-pelet";
import UrlParser from "../../routes/url-parser";

const PakanPeletFish = {
  render() {
    return `
    ${heroSectionProduct()}
        <div class="container" id="container-fish"> 

            <div class="row container-one-fish__pakan"> 
              ${sectionProducts()}
            </div>

        </div>
        `;
  },
  afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.querySelector(".container-one-fish__pakan");

    if (dataDetail[url.id]) {
      dataDetail[url.id].map(({ nama, des, img }) => {
        return (container.innerHTML += productPakanPelet(img, nama, des, nama));
      });
    }
  },
};

export default PakanPeletFish;
