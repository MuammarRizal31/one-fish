import Home from "../views/pages/home";
import AboutUs from "../views/pages/about-us";
import ButiranPelet from "../views/pages/products/butiran-pelet";
import PeletPakan from "../views/pages/products/pelet-pakan";
import ContactUs from "../views/pages/contact-us";
import News from "../views/pages/news";
import Faq from "../views/pages/faq";
import Detail from "../views/pages/detail";
import PakanPeletFish from "../views/pages/pakanPeletFish";
import PakanKeringPages from "../views/pages/pakanKeringPages";

const routes = {
  "/": Home,
  "/home": Home,
  "/about-us": AboutUs,
  "/products=pelet-pakan": ButiranPelet,
  "/products=pakan-kering": PeletPakan,
  "/contact-us": ContactUs,
  "/news": News,
  "/faq": Faq,
  "/detail/:id": Detail,
  "/pakan-pelet/:id": PakanPeletFish,
  "/pakan-kering/:id": PakanKeringPages,
};

export default routes;
