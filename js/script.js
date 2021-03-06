"use strict"

const inputPasseggero = document.querySelector("[name=nome]")
const inputKm = document.querySelector("[name=km]")
const inputEta = document.querySelector("[name=eta]")
const inputGenera = document.getElementById("button-genera")
const inputAnnulla = document.getElementById("button-annulla")

const ticketDiv = document.querySelector(".ticket")
ticketDiv.classList.replace("d-block", "d-none")

inputGenera.addEventListener ('click', function() {
    let prezzoBiglietto = inputKm.value * 0.21
    const scontoGiovani = (20 / 100 ) * prezzoBiglietto
    const prezzoGiovani = prezzoBiglietto - scontoGiovani
    const scontoAnziani = (40 / 100) * prezzoBiglietto
    const prezzoAnziani = prezzoBiglietto - scontoAnziani
    let prezzoFinale = prezzoBiglietto.toFixed(2)
    let bigliettoYoung = prezzoGiovani.toFixed(2)
    let bigliettoOver = prezzoAnziani.toFixed(2)
    let datiValidi = true

    let nomeVisualizzato = document.getElementById("nome-passeggero")
    nomeVisualizzato.innerHTML = `${inputPasseggero.value}`

    if ((inputEta.value === "0") || (inputKm.value === "0") || (inputPasseggero.value === "0")) {
        datiValidi = false
        alert("Inserisci dei dati validi, tutti i campi devono essere compilati.")
    }

    if ((inputEta.value === "") || (inputKm.value === "") || (inputPasseggero.value === "") ) {
        datiValidi = false
        alert("Inserisci dei dati validi, tutti i campi devono essere compilati.")
    }

    if (datiValidi) {
        if (inputEta.value < 18) {
        prezzoGiovani
        let offertaVisualizzata = document.getElementById("tipo-biglietto")
        offertaVisualizzata.innerHTML = `Biglietto Young`            
        let prezzoVisualizzato = document.getElementById("prezzo-biglietto")
        prezzoVisualizzato.innerHTML = `${bigliettoYoung} €`
    } else if (inputEta.value > 65) {
        prezzoAnziani
        let offertaVisualizzata = document.getElementById("tipo-biglietto")
        offertaVisualizzata.innerHTML = `Biglietto Over65`
        let prezzoVisualizzato = document.getElementById("prezzo-biglietto")
        prezzoVisualizzato.innerHTML = `${bigliettoOver} €`
    } else if ((inputEta.value >= 18) || (inputEta.value <= 65)) {
        let offertaVisualizzata = document.getElementById("tipo-biglietto")
        offertaVisualizzata.innerHTML = `Biglietto Standard`
        let prezzoVisualizzato = document.getElementById("prezzo-biglietto")
        prezzoVisualizzato.innerHTML = `${prezzoFinale} €` }
    }

    if (datiValidi) {
        let numeroCarrozza = Math.floor(Math.random() * 15 + 1)
        let carrozzaPasseggero = document.getElementById("numero-carrozza")
        carrozzaPasseggero.innerHTML = `${numeroCarrozza}`

        let codiceCp = Math.floor(Math.random() * 99999)
        let codicePasseggero = document.getElementById("codice-biglietto")
        codicePasseggero.innerHTML = `${codiceCp}`
    }

    if (datiValidi) {
        ticketDiv.classList.replace("d-none", "d-block")
    }

    console.log(inputPasseggero.value, inputEta.value, inputKm.value, prezzoBiglietto, prezzoAnziani, prezzoGiovani)
})

inputAnnulla.addEventListener ('click', function() {
    window.location.reload();
})


/*
Il programma dovrà mostrare una form da compilare con cui chiedere all’utente:

nome e cognome
km da percorrere
eta (input testuale o number)

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo)

Al click sul tasto GENERA si genera il biglietto con i calcoli dovuti
Al click sul tasto ANNULLA si svuotano i campi
*/