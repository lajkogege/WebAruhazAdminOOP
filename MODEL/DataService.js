export default class DataService {
    constructor() {}
    getAdat(vegpont, callback) {/*lekéri az adatott a végpontrol*/
        fetch(vegpont, { method: "GET" })
            .then((respone) => respone.json())
            .then((data) => { callback(data) })
            .catch((error) => console.log(error))
        //megfogja kérni a végpontott, method megadjuk a kérést
    }

    postAdat(vegpont, adat) {
        fetch(vegpont,
            {
                method: "POST",
                body: JSON.stringify(adat) //listás objektumunkat átalakitjuk szöveges JSON-né
            })
            .then((respone) => respone.json())
            .then((data) => { console.log(data) })
            .catch((error) => console.log(error))
        //megfogja kérni a végpontott, method megadjuk a kérést
    }

    deleteAdat(vegpont, id) {
        fetch(vegpont + "/" + id,
            {
                method: "DELETE",
            })
            .then((respone) => respone.json())
            .then((data) => { console.log(data) })
            .catch((error) => console.log(error))
        //megfogja kérni a végpontott, method megadjuk a kérést
    }
}