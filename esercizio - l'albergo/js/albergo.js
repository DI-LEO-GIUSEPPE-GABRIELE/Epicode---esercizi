//VARIABILI GLOBALI
let nome = document.getElementById('nome');
let occupate = document.getElementById('occupate');
let disponibili = document.getElementById('disponibili');
let stanzaVerde = document.getElementById('verde');
let stanzaAvorio = document.getElementById('avorio');
let stanzaArancio = document.getElementById('arancione');
let prenota = document.getElementById('prenota');
let annulla = document.getElementById('annulla');

//INIZIALIZZO LA SCHERMATA CON I BUTTON NASCOSTI
annulla.hidden = true;
prenota.hidden = true;
let camere;
let input = document.getElementById('camDisp');
input.addEventListener('change', function () {
    prenota.hidden=false;
    camere = Number(document.getElementById('camDisp').value);
    disponibili.innerHTML = 'Camere disponibili: ' + camere;
    incrementa = 0;
    occupate.innerHTML = 'Camere occupate: ' + incrementa;
})
nome.innerHTML = 'Nome Struttura: Grand Hotel Roma';
// let camere = Math.floor(Math.random() * 50);   //POTEVAMO ANCHE GENERARE RANDOMICAMENTE LE STANZE

let incrementa = 0;

//SEZIONE EVENTS
prenota.addEventListener('click', function () {
    annulla.hidden = false;
    if ((stanzaVerde.checked = true) || (stanzaAvorio.checked = true) || (stanzaArancione.checked = true)) {
        incrementa++;
        occupate.innerHTML = 'Camere occupate: ' + incrementa;
        // camere--;
        disponibili.innerHTML = 'Camere disponibili: ' + (camere - incrementa);
        if ((camere - incrementa) == 0) {
            alert('ops, tutte le camere sono state prenotate!')
            prenota.hidden = true;
        };
    };
});

annulla.addEventListener('click', function () {
    prenota.hidden = false;
    if ((stanzaVerde.checked = true) || (stanzaAvorio.checked = true) || (stanzaArancione.checked = true)) {
        incrementa--;
        occupate.innerHTML = 'Camere occupate: ' + incrementa;
        // camere++;
        disponibili.innerHTML = 'Camere disponibili: ' + (camere - incrementa);
        if (incrementa == 0) {
            alert('La struttura è completamente disponibile!');
            annulla.hidden = true;
        };
    };
});




