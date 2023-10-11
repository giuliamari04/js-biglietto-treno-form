



const buttonGenera = document.getElementById('genera');
const buttonreset = document.getElementById('reset');
let risultatonome = document.querySelector('.biglietto');
let errore = document.querySelector('.error');


buttonreset.addEventListener('click', function () {
    const nomeCognomeInput = document.getElementById('nomeCognome');
    const kmInput = document.getElementById('km');
    const etaSelect = document.getElementById('eta');

    nomeCognomeInput.value = '';
    kmInput.value = '';
    etaSelect.value = '';

    risultatonome.classList.add('d-none');
    errore.classList.add('d-none');

});

buttonGenera.addEventListener('click', function () {
    let nome = document.getElementById('nomeCognome').value;
    let percorso = parseInt(document.getElementById('km').value);
    let etaPasseggero = document.getElementById('eta').value;
    risultatonome.classList.remove('d-none');
    

    console.log('nome:',nome,'perorso:',percorso,'ed età:',etaPasseggero);

    let prezzoBiglietto = 0.21;
    let prezzoPercorso = prezzoBiglietto * percorso;
   if(nome ==='' || percorso === '' || etaPasseggero ==='' || percorso <= 0 || isNaN(percorso) ){
    errore.classList.remove('d-none');
    errore.innerHTML = ` errore dati. fai click su annulla e riprova`;
   }else{
    
    
    if(etaPasseggero ==='minorenne'){
        prezzoPercorso = prezzoPercorso - (prezzoPercorso*20/100);
        etaPasseggero = 'Biglietto ridotto giovani'; 
    }else if(etaPasseggero === 'anziano'){
        prezzoPercorso = prezzoPercorso - (prezzoPercorso*40/100);
        etaPasseggero = 'Biglietto ridotto anziani'; 
    }else{
        etaPasseggero = 'Biglietto Standard';
    }
    
    let prezzoFormattato = prezzoPercorso.toLocaleString('it-IT', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
      let randomNumberVagone = getRandomNumber(1, 13);
      console.log('Numero vagone :',randomNumberVagone);

      let randomNumberCP = getRandomNumber(10000, 99999);
      console.log('Numero CP',randomNumberCP);

      console.log('Prezzo del biglietto: ',prezzoFormattato);
      

     risultatonome.innerHTML =
     `
     <div>
     <h2 class="text-uppercase text-center">il tuo biglietto</h2>
     <table class="m-2 border-1">
     <tr>
         <th class="my-bg-first-cell">
             <h3>nome passeggero</h3>
             <div> ${nome}</div></th>
         <th>
             <h3>Offerta</h3>
         </th>
         <th>
             <h3>Carrozza</h3>
         </th>
         <th>
             <h3>codice CP</h3>
         </th>
         <th>
             <h3>Costo biglietto</h3>
         </th>
     </tr>

     <tr>
         <th></th>
         <th>${etaPasseggero}</th>
         <th >${randomNumberVagone}</th>
         <th > ${randomNumberCP}</th>
         <th >${prezzoFormattato}€</th>
     </tr>
 </table>
 </div>
 `;
    
   }
});


