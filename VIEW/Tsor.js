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
        this.#torlesElem = this.#szuloElem.children("tr:last-child").children("td").children(".torol")
        console.log(this.#torlesElem);
        this.#torlesElem.on("click", () => {
            /*nyíl függvény kell mert ekkor jelenti az osztály példányt*/
            this.#trigger("torol");
        })
    }

    #trigger(esemenynev) {
        const e = new CustomEvent(esemenynev, { detail: this.#termekObj.id });
        window.dispatchEvent(e)
    }

    #sorokLetrehozasa() {
        let txt = `<tr>`
        for (const key in this.#termekObj) {
            txt += `<td>${this.#termekObj[key]}</td>`
        }
        txt += `<td><button class="torol">🗑️</button></td>`
        txt += ` </tr>`
        this.#szuloElem.append(txt);
    }
}