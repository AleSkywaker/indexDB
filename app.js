
// indexedDB: Reforzamiento

let request = window.indexedDB.open('mi-database', 1)


//Se actualiza cuando se crea o se sube de version la DB

request.onupgradeneeded = event =>{
    console.log('Actualizacion de DB')

    let db = event.target.result;
}

