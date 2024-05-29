import Tsor from "./Tsor.js";

export default class Tablazat {
    #LISTA = [];
    #szuloElem;
    #tbodyElem;

    constructor(LISTA, szuloElem) {
        this.#LISTA = LISTA;
        this.#szuloElem = szuloElem;
        this.#tablazatMegjelenit();
        /*a sorok szülöeleme a tbody lesz*/
        this.#tbodyElem = this.#szuloElem.children("table").children("tbody");
        console.log(this.#tbodyElem);
        this.#sorokHozaadasa();
    }

    #tablazatMegjelenit() {
        let txt = "";
        txt += "<table class='table table-striped'>";
        txt += "<tr><th>ID</th><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>";
        /*  szorgalmi: a fejléc kulcsait is ciklussal írd ki! */
        /* txt += "<tbody></tbody>";*/
        /* tbody-ba kerülnek a sorok JQ magától létrehozza a tbody-t*/
        txt += "</table>";
        this.#szuloElem.append(txt);
    }

    #sorokHozaadasa() {
        this.#LISTA.forEach((element, i) => {
            new Tsor(element, this.#tbodyElem);
        });
    }
}