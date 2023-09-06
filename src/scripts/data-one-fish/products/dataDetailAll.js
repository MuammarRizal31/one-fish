import dataDetailAquascape from "./pakan-pelet/detail/aquascape";
import bettaDetail from "./pakan-pelet/detail/betta";
import dataDetailChanna from "./pakan-pelet/detail/channa";
import dataCichlidDetail from "./pakan-pelet/detail/cichlid";
import dataDiscusDetail from "./pakan-pelet/detail/discus";
import dataGuppyDetail from "./pakan-pelet/detail/guppy";
import louhanDetail from "./pakan-pelet/detail/louhan-detail";
import dataMarineDetail from "./pakan-pelet/detail/marinePrime";

const dataDetailPakanPelet = { ...dataDiscusDetail, ...dataDetailAquascape, ...bettaDetail, ...dataDetailChanna, ...dataCichlidDetail, ...dataDetailAquascape, ...dataGuppyDetail, ...louhanDetail, ...dataMarineDetail };

export default dataDetailPakanPelet;
