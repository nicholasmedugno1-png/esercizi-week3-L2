/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/


/* ESTRARRE "UL" DAL "HTML" E CREARCI UN "LI" ALL'INTERNO CON  "createElement"
CREARE FUNZIONE CHE RICEVE DEI VALORI INSERITRI DALL UTENTE 
ESTRARRE I VALORI E INSERIRLI IN VARIABILI PER RESTITUIRLI NELL ORDINE IN CUI CI SERVONO
USARE "appendChild" PER APPENDERE GLI ELEMENTI AL PADRE OVVERO "UL"
ASSEGNARE CLASSE AI VARI ELEMENTI CREATI PER STILIZZARE COME DA FOTO CON "classList.add"
*/




const task = document.querySelector('#lista-task')
const date = document.querySelector('.divData')

// ASSEGNIAMO ALLA FUNZIONE I DUE VALORI CHE RICEVEREMO
function aggiungiTask(valoreInserito, priorita) {

  //CREAIAMO IL LI CHE DOVRA CONTENETE TUTTE LE CARATTERISTICHE
  const newTask = document.createElement('li');
  //ASSEGNIAMO LA CLASSE PER PER FLEXARE I CONTENUTI
  newTask.classList.add('aggiunta');
  //ESTRAIAMO IL VALORE INSERITO DALL UTENTE
  const newValoreInserito = document.createElement('span');
  newValoreInserito.textContent = valoreInserito;
  
  //ESTRAIAMO LA PRIORITA' DELL INPUT SEMPRE INSERITA DALL UTENTE
  const newPriorita = document.createElement('span')
  newPriorita.textContent = priorita
  //ASSEGNIAMO CLASSE ALLA PRIORITA 
 newPriorita.classList.add('badge')
  
  //GENERIAMO UNA DATA CHE SI AGGIORNA IN AUTOMATICO 
  const newDate = document.createElement('span')
  newDate.textContent =  new Date().toLocaleDateString('it-IT' );
  //ASSERGNIAMO CLASSE ALLA DATA PER SPOSTARLA SULLA DESTRA 
   newPriorita.classList.add('divData')

  //GENERIAMO IL BUTTON ELIMINA  
  const newButton = document.createElement('button');
  newButton.textContent = 'Elimina'
  
  
  
  newTask.appendChild(newValoreInserito);
  newTask.appendChild(newPriorita);
  newTask.appendChild(newDate);
  newTask.appendChild(newButton);

  task.appendChild(newTask);

      
}


aggiungiTask('ciao', 'urgente')
aggiungiTask('ciao', 'urgente')
aggiungiTask('ciao', 'urgente')

