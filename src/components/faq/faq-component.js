import { accordionFaq1, accordionFaq2 } from "./comp/accordion";

const faqComp = () => {
  return `
    <div class="container container-carousel my-3">
        <div class="title-with-line">
            <div class="line"></div>
                <h2 class="title mb-3 text-one-fish">FAQ</h2>
            <div class="line"></div>
        </div>
    </div>

    <div class="container"> 
        <div class="row">     
            <div class="col-12 mb-3"> 
                <img src="./home-image/Sampul Utama.png" class="card-img-top" alt="...">
            </div>
        </div>
    </div>

    <div class="container"> 
        <div class="row">
            <div class="col-lg-6 col-12">
                ${accordionFaq1()}
            </div>
            <div class="col-lg-6 col-12">
                ${accordionFaq2()}
            </div>

        </div>
    </div>
    `;
};

export default faqComp;
