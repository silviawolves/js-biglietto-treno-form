"use strict"

const inputPasseggero = document.querySelector("[name=nome]")
const inputKm = document.querySelector("[name=km]")
const inputEta = document.querySelector("[name=eta]")
const inputGenera = document.getElementById("button-genera")

inputGenera.addEventListener ('click', function() {
    let prezzoBiglietto = inputKm.value * 0.21
    console.log(inputPasseggero.value, inputEta.value, inputKm.value, prezzoBiglietto)
})



//const nomeVisualizzato = document.getElementById("nome-passeggero")
//nomeVisualizzato.innerHTML = inputPasseggero.value







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