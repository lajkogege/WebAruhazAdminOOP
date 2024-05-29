export default class Tsor {
    #termekObj = {};
    #szuloElem;
    #torlesElem;

    constructor(termekObj, szuloElem, torlesElem) {
        this.#termekObj = termekObj;
        this.#szuloElem = szuloElem;
        this.#torlesElem = torlesElem;
        this.#sorokLetrehozasa();
        console.log(this.#szuloElem);
        /*eseményt irunk a töröl gombra*/
        this.#torlesElem=this.#szuloElem.children("tr:last-child").children("td").children(".torol")
    }

    #sorokLetrehozasa() {
        let txt = `<tr>`
        for (const key in this.#termekObj) {
            txt += `<td>${this.#termekObj[key]}</td>`
        }
        txt+=`<td><button class="torol">🗑️</button></td>`
        txt += ` </tr>`
        this.#szuloElem.append(txt);
    }
}