



const buttonGenera = document.getElementById('genera');
const buttonreset = document.getElementById('reset');

buttonGenera.addEventListener('click', function () {
    let nome = document.getElementById('nomeCognome').value;
    let percorso = parseInt(document.getElementById('km').value);
    let etaPasseggero = document.getElementById('eta').value;

    let risultatonome = document.querySelector('.risultato-nome');
    let risultatoeta = document.querySelector('.risultato-eta');
    let risultatoprezzo = document.querySelector('.risultato-prezzo');
    let risultatoVagone = document.querySelector('.risultato-vagone');
    let risultatoCP = document.querySelector('.risultato-CP');


    

    console.log('nome:',nome,'perorso:',percorso,'ed età:',etaPasseggero);

    let prezzoBiglietto = 0.21;
    let prezzoPercorso = prezzoBiglietto * percorso;
   
    
    
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
      console.log(randomNumberVagone);

      let randomNumberCP = getRandomNumber(10000, 99999);
      console.log(randomNumberVagone);
      
    
    risultatonome.innerHTML =
     `
        ${nome} 
     `;
      
     risultatoeta.innerHTML =
     `
        ${etaPasseggero} 
     `;

     risultatoVagone.innerHTML =
     `
        ${randomNumberVagone} 
     `;

     risultatoCP.innerHTML =
     `
        ${randomNumberCP} 
     `;

     risultatoprezzo.innerHTML =
     `
        ${prezzoFormattato} 
     `;
      console.log('Prezzo per utente:', risultatoprezzo);
    
    
});


