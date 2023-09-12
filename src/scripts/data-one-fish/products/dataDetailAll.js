import dataDetailAquascape from "./pakan-pelet/detail/aquascape";
import bettaDetail from "./pakan-pelet/detail/betta";
import dataDetailChanna from "./pakan-pelet/detail/channa";
import dataCichlidDetail from "./pakan-pelet/detail/cichlid";
import dataDiscusDetail from "./pakan-pelet/detail/discus";
import dataGuppyDetail from "./pakan-pelet/detail/guppy";
import louhanDetail from "./pakan-pelet/detail/louhan-detail";
import dataMarineDetail from "./pakan-pelet/detail/marinePrime";
import dataGoldfishDetail from "./pakan-pelet/detail/goldfish";
import shrimpDetail from "./pakan-kering/detail/shrimp";
import babyShrimpDetail from "./pakan-kering/detail/baby-shrimp";
import wormDetail from "./pakan-kering/detail/worm";
import cricketDetail from "./pakan-kering/detail/cricket";
import maggotDetail from "./pakan-kering/detail/maggot";
import mealwormDetail from "./pakan-kering/detail/mealworm";
import superworm from "./pakan-kering/detail/superworm";

const dataDetailPakanPelet = {
  ...dataDiscusDetail,
  ...dataDetailAquascape,
  ...bettaDetail,
  ...dataDetailChanna,
  ...dataCichlidDetail,
  ...dataDetailAquascape,
  ...dataGuppyDetail,
  ...louhanDetail,
  ...dataMarineDetail,
  ...dataGoldfishDetail,
  ...shrimpDetail,
  ...babyShrimpDetail,
  ...wormDetail,
  ...cricketDetail,
  ...maggotDetail,
  ...mealwormDetail,
  ...superworm,
};

export default dataDetailPakanPelet;
