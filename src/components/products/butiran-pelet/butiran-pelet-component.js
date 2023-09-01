import { dataFish } from "../../../scripts/data-one-fish/products/pakan-pelet";
import { productItem, productPelet, sectionProducts } from "../../../template-js/products/butiran-pelet.js/butiran-pelet";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";

class ButiranPelet extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    ${heroSectionProduct()}

    <div class="container">
      <div class="row p-0 m-0">      
        ${sectionProducts()}
        <div class="col-12 col-lg-10 d-flex justify-content-center align-items-center flex-column">
          <div class="row mt-2">
            <h3 class="text-one-fish">PAKAN PELET</h3>
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
    dataFish.forEach(({ img, des, title, namaIkan }) => {
      cards += productPelet(img, des, title, namaIkan);
    });
    return cards;
  }
}

customElements.define("butiran-pelet", ButiranPelet);
