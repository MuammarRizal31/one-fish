import "../../../components/home/carousel/carousel-component";
import "../../../components/home/brand-company/brand-company";
import "../../../components/home/info-company/Company";
import "../../../components/home/news-home/news-home";
import "../../../components/home/products/product-component";

const Home = {
  async render() {
    return `
        <div class="container container-carousel">
            <div class="title-with-line mb-3">
                <div class="line"></div>
                    <h2 class="title text-one-fish">High Quality Food for High Quality Fish</h2>
                <div class="line">
            </div>
        </div>
        </div>

    <carousel-onefish> </carousel-onefish>
        
    <product-home> </product-home>

    <company-onefish> </company-onefish>

    <news-home> </news-home>

    <brand-company> </brand-company>
    `;
  },

  async afterRender() {},
};

export default Home;
