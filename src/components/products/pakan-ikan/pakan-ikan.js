import { dataPakanKering } from "../../../scripts/data-one-fish/products/pakan-kering/kering-pakan";
import { sectionProducts } from "../../../template-js/products/butiran-pelet.js/butiran-pelet";
import { heroSectionProduct } from "../../../template-js/products/header/hero-section";
import { productPakan } from "../../../template-js/products/pakan-kering/pakan-kering-template";
import pakanKering from "../../../public/products/pakan-kering/Pakan Kering.png";

class PakanIkan extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    ${heroSectionProduct(pakanKering, "PAKAN KERING")}

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
    dataPakanKering.forEach(({ image, des, title, url }) => {
      cards += productPakan(image, des, title, url);
    });
    return cards;
  }
}

customElements.define("pakan-ikan", PakanIkan);
