// indexedDB: Reforzamiento

let request = window.indexedDB.open('mi-database', 2);

//Se actualiza cuando se crea o se sube de version la DB

request.onupgradeneeded = (event) => {
	console.log('Actualizacion de DB');

	let db = event.target.result;

	db.createObjectStore('heroes', {
		keyPath: 'id'
	});
};

//Manejo de errores

request.onerror = (event) => {
	console.log('DB error : ', event.target.error);
};

//insertar datos

request.onsuccess = (event) => {
	let db = event.target.result;

	let heroesData = [
		{ id: '1', heroe: 'Spiderman', mensaje: 'Aqui su amigo Spiderman' },
		{ id: '2', heroe: 'Ironman', mensaje: 'Aqui su amigo Ironman' }
    ];
    
    let heroesTransaction = db.transaction('heroes', 'readwrite')

    heroesTransaction.onerror = event =>{
        console.log("Error guardando : ", event.target.error)
    }

    //Informar sobre el exito de la transaction
    heroesTransaction.oncomplete = event =>{
        console.log('Transsaction hecha ', event)
    }

    let hereosStore = heroesTransaction.objectStore('heroes')

      for(let heroe of heroesData){
          hereosStore.add(heroe)
      }

      hereosStore.onsuccess = event => {
          console.log("nuevo item agregado a la base de datos")
      }

};
