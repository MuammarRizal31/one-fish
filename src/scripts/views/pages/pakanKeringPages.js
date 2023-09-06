import { productPakanPelet } from "../../../template-js/product-detail/template";
import { sectionProducts } from "../../../template-js/products/butiran-pelet.js/butiran-pelet";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";
import { dataPakanKeringItem } from "../../data-one-fish/products/pakan-kering/dataPakanKering";
import { dataPakanKering } from "../../data-one-fish/products/pakan-kering/kering-pakan";
import UrlParser from "../../routes/url-parser";

const PakanKeringPages = {
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
    const bannerOnefish = document.querySelector('.banner-one-fish');

    if (dataPakanKeringItem[url.id]) {
      dataPakanKeringItem[url.id].map(({ nama, des, img,url,sampul,title }) => {
        console.log(dataPakanKering)
        return (
          container.innerHTML += productPakanPelet(img, nama, des,url),
          bannerOnefish.innerHTML = heroSectionProduct(sampul,title)
          );
      });
    }
  },
};

export default PakanKeringPages;
