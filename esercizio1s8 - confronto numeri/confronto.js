//VARIABILI GLOBALI
var btnVerifica = $("#verifica");
var giocatoreVincitore = $("#giocatoreVincitore");
var giocatoreVicino = $("#giocatoreVicino");
var errore = $("#errore");
var giocaDiNuovo = $("#nuovo");
var giocatore1 = Number($("#giocatore1").val());
var giocatore2 = Number($("#giocatore2").val());
//EVENT HANDLER PRINCIPALE
btnVerifica.on('click', function () {
    //VARIABILI INTERNE
    var giocatore1 = Number($("#giocatore1").val());
    var giocatore2 = Number($("#giocatore2").val());
    var numCasuale = $("#numCasuale");
    //CREO UN NUMERO CASUALE
    var num = Math.round((Math.random() * (100 - 1)) + 1);
    numCasuale.text('Il numero estratto è:' + num);
    //PRIMO CONTROLLO S EI NUMERI COINCIDONO
    if (giocatore1 === num) {
        giocatoreVincitore.text('Ha vinto il giocatore 1');
    }
    else if (giocatore2 === num) {
        giocatoreVincitore.text('Ha vinto il giocatore 2');
    }
    else {
        giocatoreVincitore.text('Fate pietà entrambi');
    }
    //SECONDO CONTROLLO QUALE SI AVVICINA DI PIU'
    if ((giocatore1 - num) > (giocatore2 - num)) {
        giocatoreVicino.text('Ma per scarto ha vinto il giocatore 1');
    }
    else if ((giocatore2 - num) > (giocatore1 - num)) {
        giocatoreVicino.text('Ma per scarto ha vinto il giocatore 2');
    }
    //TERZO CONTROLLO SE I CAMPI COINCIDONO
    if (giocatore1 === giocatore2) {
        giocatoreVincitore.text('Avete fortuna entrambi, siete vincitori');
        giocatoreVicino.text('');
    }
    //RIPETI I CONTROLLI OGNI CLICK
    return;
});
//SECONDO EVENT HANDLER AZZERA TUTTO E RICOMINCIA
giocaDiNuovo.on('click', function () {
    $("*p").text('');
    $("*input").val([]);
});
