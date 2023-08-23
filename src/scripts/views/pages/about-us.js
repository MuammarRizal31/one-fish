import "../../../components/about-us/hero-section/hero-section";
import "../../../components/about-us/visi-misi/visi-misi";

const AboutUs = {
  async render() {
    return `
        <hero-section></hero-section>

        <visi-misi></visi-misi>
    `;
  },

  async afterRender() {},
};

export default AboutUs;
