const dagen = document.querySelector(" dagen ");
const uren = document.querySelector(" uren ");
const minuten = document.querySelector(" minuten ");
const seconden = document.querySelector(" seconden ");  

const Huidige_Datum = new Date().getfullyear();

const Verjaardag_Datum = new Date ('May 17 ${Huidige_Datum + 1} 00:00:00');