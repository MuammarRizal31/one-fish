import faqComp from "../../../components/faq/faq-component";

const Faq = {
  async render() {
    return `
        ${faqComp()}
    `;
  },

  async afterRender() {},
};

export default Faq;
