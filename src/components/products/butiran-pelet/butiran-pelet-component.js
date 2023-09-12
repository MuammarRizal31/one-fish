import { productPelet, sectionProducts } from "../../../template-js/products/butiran-pelet.js/butiran-pelet";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";
import imageContainer from "../../../public/products/Pakan-Pelet/Sampul Pakan Pelet.png";
import { dataPeletPakan } from "../../../scripts/data-one-fish/products/pakan-pelet/pakan-pelet";
class ButiranPelet extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    ${heroSectionProduct(imageContainer)}

    <div class="container">
      <div class="row p-0 m-0">      
        ${sectionProducts()}
        <div class="col-12 col-lg-10 d-flex justify-content-center align-items-center flex-column">
          <div class="row mt-2">
            
          </div>
          <div class="row g-2">

          ${this.appendFish()}
          
            
        </div>
        <div class="col-lg-2"> </div>
        
      </div>
    </div>
 
`;
  }

  appendFish() {
    let cards = "";
    dataPeletPakan.forEach(({ image, des, title, url }) => {
      cards += productPelet(image, des, title, url);
    });
    return cards;
  }
}

customElements.define("butiran-pelet", ButiranPelet);
