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
          <div class="row">
            <h3 class="text-one-fish">PAKAN PELET</h3>
          </div>
          <div class="row">
            ${productPelet('./news/sertifikat channa contest.jpeg','Deskripsi','Title')}
            ${productPelet('./news/sertifikat channa contest.jpeg')}
            ${productPelet('./news/sertifikat channa contest.jpeg')}
        </div>
        <div class="col-lg-2"> </div>
        
      </div>
    </div>
 
`;
  }
}

customElements.define("butiran-pelet", ButiranPelet);
