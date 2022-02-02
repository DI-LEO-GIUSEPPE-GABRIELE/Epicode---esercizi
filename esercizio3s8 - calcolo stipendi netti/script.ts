//INIZIALIZZO LA MIA CLASSE ASTRATTA CONTENENTE TUTTE LE PROPRIETA' CHE CI SERVONO
abstract class Lavoratore {
    codRedd: number;
    tasseInps: number;
    tasseIrpef: number;
    redditoAnnuoLordo: number;

    //CREO IL MIO COSTRUTTORE BASE
    constructor(codRedd: number, tasseInps: number, tasseIrpef: number, redditoAnnuoLordo: number) {
        this.codRedd = codRedd;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
    
    //ISTANZIO LE FUNZIONI BASE
    getUtileTasse(): number {
        let utileTasse = (this.redditoAnnuoLordo * this.codRedd) / 100;
        return utileTasse;
    };
    getTasseInps(): number {
        let tasseInps = (this.getUtileTasse() * this.tasseInps) / 100;
        return tasseInps;
    };
    getTasseIrpef(): number {
        let tasseIrpef = (this.getUtileTasse() * this.tasseIrpef) / 100;
        return tasseIrpef;
    };
    getRedditoAnnuoNetto(): number {
        let redditoAnnuoLordo = this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
        return redditoAnnuoLordo;
    };
}

//ESTENDO LA CLASSE ASTRATTA SU CLASSI CREATE IN BASE ALLE TRE CATEGORIE RICHIESTE

//ARTIGIANO
class Artigiano extends Lavoratore {
    constructor(redditoAnnuoLordo: number) {
        super(78, 5, 25.72, redditoAnnuoLordo);
    }
}

//LIBERO PROFESSIONISTA
class LiberoProfessionista extends Lavoratore {
    constructor(redditoAnnuoLordo: number) {
        super(67, 15, 35, redditoAnnuoLordo);
    }
}

//COMMERCIANTE
class Commerciante extends Lavoratore {
    constructor(redditoAnnuoLordo: number) {
        super(40, 15, 35, redditoAnnuoLordo);
    }
}

//ISTANZIO LE TRE CLASSI
let panettiere = new Artigiano(10000);
let developer = new LiberoProfessionista(150000);
let abbigliamento = new Commerciante(12000);

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



