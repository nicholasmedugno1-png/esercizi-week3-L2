const lista = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');
const btnPushTask = document.querySelector('#bottone-aggiungi');
const inputValue = document.querySelector('#nuovo-task');
const inputPriority = document.querySelector('#user-priority');
const barAggiunta = document.querySelector('#btnFiltro')

const myTask = [{
	titoloTask: 'Pagare le bollette',
	priorita: 'alta',
	data: new Date(),
	completato: true
},
{
	titoloTask: 'Studiare JavaScript',
	priorita: 'media',
	data: new Date(),
	completato: false
},
{
	titoloTask: 'Comprare il pane',
	priorita: 'bassa',
	data: new Date(),
	completato: true
},
{
	titoloTask: 'Chiamare il dentista',
	priorita: 'alta',
	data: new Date(),
	completato: false
},
{
	titoloTask: 'Riposarsi',
	priorita: 'bassa',
	data: new Date(),
	completato: true
},
{
	titoloTask: 'Spritz Time',
	priorita: 'alta',
	data: new Date(),
	completato: false
},
];


const btnTutti = document.createElement('button')
btnTutti.setAttribute('type', 'button')
btnTutti.textContent = 'Tutti'
btnTutti.classList.add('btnFiltri')
barAggiunta.appendChild(btnTutti)

btnTutti.addEventListener('click', () => {
	lista.textContent = '';
	aggiungiTask()
})




const btnAttivi = document.createElement('button')
btnAttivi.setAttribute('type', 'button')
btnAttivi.textContent = 'Attivi'
btnAttivi.classList.add('btnFiltri')
barAggiunta.appendChild(btnAttivi)

btnAttivi.addEventListener('click', (e) => {

	const newMyTaskAttivi = myTask.filter((task) => task.completato === false)
	lista.textContent = ''
	aggiungiTask(newMyTaskAttivi);
	aggiornaContatore();
})





const btnCompletati = document.createElement('button')
btnCompletati.setAttribute('type', 'button')
btnCompletati.textContent = 'Completati'
btnCompletati.classList.add('btnFiltri')
barAggiunta.appendChild(btnCompletati)


btnCompletati.addEventListener('click', (e) => {

	const newMyTaskCompletati = myTask.filter((task) => task.completato === true)
	lista.textContent = ''
	aggiungiTask(newMyTaskCompletati);
	aggiornaContatore();
})







function aggiungiTask(arrayDaStampare = myTask) {
	arrayDaStampare.forEach((task, index) => {
		const newLi = document.createElement('li');
		newLi.classList.add(`priorita-${task.priorita}`);

		const btnCheck = document.createElement('input');
		btnCheck.setAttribute('type', 'checkbox');
		btnCheck.setAttribute('id', index + 1)
		btnCheck.checked = task.completato;
		newLi.appendChild(btnCheck)

		const textSpan = document.createElement('span');
		textSpan.textContent = task.titoloTask;
		newLi.appendChild(textSpan);


		const badge = document.createElement('span');
		badge.classList.add('badge');
		badge.textContent = task.priorita;
		newLi.appendChild(badge);

		const taskDate = document.createElement('span');
		taskDate.classList.add('data', 'divData');
		taskDate.textContent = task.data.toLocaleString('it-IT');

		const elimina = document.createElement('button');
		elimina.textContent = 'Elimina';
		elimina.setAttribute('type', 'button')
		elimina.setAttribute('id', index + 1)
		taskDate.appendChild(elimina);
		newLi.appendChild(taskDate);

		lista.appendChild(newLi);

	});

}




function aggiornaContatore() {
	contatore.textContent = myTask.length;
}

aggiungiTask();
aggiornaContatore();


//click per aggiungere elemento
btnPushTask.addEventListener('click', () => {
if(inputValue.value !== ''){
	lista.textContent = ''		//ripuliamo la lista altrimenti stampa sempre tutto l'array
	const nuovoOggettoTask = {     //creiamo l oggetto da inserire e gli assegniamo i valori estratti dall input
		titoloTask: inputValue.value.trim(),
		priorita: inputPriority.value,
		data: new Date(),
		completato: false
	};
	myTask.push(nuovoOggettoTask)	//pushiamo l oggetto creato nell'array
	inputValue.value = ''			//ripuliamo il campo di input dopo il click
	aggiungiTask();					//richiamiamo la funzione per aggiungere a schermo avendo ripulito il contenuto dell array stampa solo l oggetto creato
	aggiornaContatore();			//aggiorniamo il contatore dopo aver aaggiunto l oggetto
} 
})

//click per eliminare elemento
lista.addEventListener('click', (e) => {

	if (e.target.type === 'button') {
		myTask.splice(e.target.id - 1, 1)
		lista.textContent = ''
		aggiungiTask()
		aggiornaContatore()
	}

})


lista.addEventListener('change', (e) => {

	const index = e.target.id - 1
	if (e.target.type === 'checkbox') {
		myTask[index].completato = e.target.checked;
		console.log(`Il task all'indice ${index} ora è: ${e.target.checked}`);
	}
	const testoSpan = e.target.nextElementSibling;  //estraiamo il valore dell elemento successivo all evento (da usare solo se siamo sicuri dell elemento )

	if (e.target.checked === true) {
		testoSpan.style.textDecoration = 'line-through';
		testoSpan.style.color = '#888';
	} else {
		testoSpan.style.textDecoration = 'none';
		testoSpan.style.color = 'black'
	}
})