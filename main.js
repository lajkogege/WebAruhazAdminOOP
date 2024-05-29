import DataService from "./MODEL/DataService.js";
import Tablazat from "./VIEW/Tablazat.js";
//import { emberekLISTA} from "./adat.js";

const DS = new DataService();
DS.getAdat("http://localhost:3000/emberekLISTA", megjlenit)

function megjlenit(LISTA) {
    console.log(LISTA);
    new Tablazat(LISTA, $(".tablazat"));
}