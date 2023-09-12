import { productPakanPelet } from "../../../template-js/product-detail/template";
import { sectionProducts } from "../../../template-js/products/butiran-pelet.js/butiran-pelet";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";
import { dataFish } from "../../data-one-fish/products/pakan-pelet/pakan-pelet";
import UrlParser from "../../routes/url-parser";

const PakanPeletFish = {
  render() {
    return `
    <div class="container-fluid">
      <div class="banner-one-fish">
      </div>
        <div class="container" id="container-fish"> 

            <div class="row">
              ${sectionProducts()}
              <div class="col-12 col-lg-10">

                <div class="row container-one-fish__pakan">

                </div>

              </div>
            </div>

        </div>
      </div>
        `;
  },
  afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.querySelector(".container-one-fish__pakan");
    const bannerOnefish = document.querySelector(".banner-one-fish");

    if (dataFish[url.id]) {
      dataFish[url.id].map(({ nama, des, img, url, sampul, title }) => {
        return (container.innerHTML += productPakanPelet(img, nama, des, url)), (bannerOnefish.innerHTML = heroSectionProduct(sampul, title));
      });
    }
  },
};

export default PakanPeletFish;
