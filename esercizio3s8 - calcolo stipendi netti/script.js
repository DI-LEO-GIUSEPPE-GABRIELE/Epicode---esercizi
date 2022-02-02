var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//INIZIALIZZO LA MIA CLASSE ASTRATTA CONTENENTE TUTTE LE PROPRIETA' CHE CI SERVONO
var Lavoratore = /** @class */ (function () {
    //CREO IL MIO COSTRUTTORE BASE
    function Lavoratore(codRedd, tasseInps, tasseIrpef, redditoAnnuoLordo) {
        this.codRedd = codRedd;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
    //ISTANZIO LE FUNZIONI BASE
    Lavoratore.prototype.getUtileTasse = function () {
        var utileTasse = (this.redditoAnnuoLordo * this.codRedd) / 100;
        return utileTasse;
    };
    ;
    Lavoratore.prototype.getTasseInps = function () {
        var tasseInps = (this.getUtileTasse() * this.tasseInps) / 100;
        return tasseInps;
    };
    ;
    Lavoratore.prototype.getTasseIrpef = function () {
        var tasseIrpef = (this.getUtileTasse() * this.tasseIrpef) / 100;
        return tasseIrpef;
    };
    ;
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoLordo = this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
        return redditoAnnuoLordo;
    };
    ;
    return Lavoratore;
}());
//ESTENDO LA CLASSE ASTRATTA SU CLASSI CREATE IN BASE ALLE TRE CATEGORIE RICHIESTE
//ARTIGIANO
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(redditoAnnuoLordo) {
        return _super.call(this, 78, 5, 25.72, redditoAnnuoLordo) || this;
    }
    return Artigiano;
}(Lavoratore));
//LIBERO PROFESSIONISTA
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista(redditoAnnuoLordo) {
        return _super.call(this, 67, 15, 35, redditoAnnuoLordo) || this;
    }
    return LiberoProfessionista;
}(Lavoratore));
//COMMERCIANTE
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(redditoAnnuoLordo) {
        return _super.call(this, 40, 15, 35, redditoAnnuoLordo) || this;
    }
    return Commerciante;
}(Lavoratore));
//ISTANZIO LE TRE CLASSI
var panettiere = new Artigiano(10000);
var developer = new LiberoProfessionista(150000);
var abbigliamento = new Commerciante(12000);
//LAVORATORI
console.log("Lavoratori:");
console.log(panettiere);
console.log(developer);
console.log(abbigliamento);
// METODI PANETTIERE
console.log("Panettiere: ");
console.log("Reddito annuo lordo panettiere: " + panettiere.redditoAnnuoLordo);
console.log('Utile tasse panettiere: ' + panettiere.getUtileTasse());
console.log("Tasse irpef panettiere: " + panettiere.getTasseIrpef());
console.log('Tasse inps panettiere: ' + panettiere.getTasseInps());
console.log('Reddito annuo netto panettiere: ' + panettiere.getRedditoAnnuoNetto());
//METODI DEVELOPER
console.log("Developer: ");
console.log("Reddito annuo lordo developer: " + developer.redditoAnnuoLordo);
console.log('Utile tasse developer: ' + developer.getUtileTasse());
console.log("Tasse irpef developer: " + developer.getTasseIrpef());
console.log('Tasse inps developer: ' + developer.getTasseInps());
console.log('Reddito annuo netto developer: ' + developer.getRedditoAnnuoNetto());
//METODI ABBIGLIAMENTO
console.log("Commerciante abbigliamento: ");
console.log("Reddito annuo lordo commerciante abbigliamento: " + abbigliamento.redditoAnnuoLordo);
console.log('Utile tasse commerciante abbigliamento: ' + abbigliamento.getUtileTasse());
console.log("Tasse irpef commerciante abbigliamento: " + abbigliamento.getTasseIrpef());
console.log('Tasse inps commerciante abbigliamento: ' + abbigliamento.getTasseInps());
console.log('Reddito annuo netto commerciante abbigliamento: ' + abbigliamento.getRedditoAnnuoNetto());
