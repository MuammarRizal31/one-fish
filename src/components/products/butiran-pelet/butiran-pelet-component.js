import { pakanKering } from "../../../scripts/data-one-fish/products/kering-pakan";
import { accordionProduct, cardsProducts, productItem, sectionProducts } from "../../../template-js/products/butiran-pelet.js/butiran-pelet";
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
        ${productItem()}
      </div>
    </div>
 
`;
  }
}

customElements.define("butiran-pelet", ButiranPelet);
