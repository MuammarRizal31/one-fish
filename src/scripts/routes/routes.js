import Home from "../views/pages/home";
import AboutUs from "../views/pages/about-us";
import ButiranPelet from "../views/pages/products/butiran-pelet";
import PeletPakan from "../views/pages/products/pelet-pakan";
import ContactUs from "../views/pages/contact-us";
import News from "../views/pages/news";
import Faq from "../views/pages/faq";
import Detail from "../views/pages/detail";

const routes = {
  "/": Home,
  "/home": Home,
  "/about-us": AboutUs,
  "/products=butiran-pelet": ButiranPelet,
  "/products=pelet-pakan": PeletPakan,
  "/contact-us": ContactUs,
  "/news": News,
  "/faq": Faq,
  "/detail/id": Detail,
};

export default routes;
