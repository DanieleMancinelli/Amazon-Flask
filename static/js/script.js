function getProdotto(richiesta) {

    //visualizza la richiesta
    console.log(richiesta);

    //funzione per far sparire e riapparire le pagine
    let mainPage = document.getElementById('mainPage');
    let infoPage = document.getElementById('infoPage');
    mainPage.style.display = 'none';
    infoPage.style.display = 'block';

    //Fetch delle informazioni e la richiesta al server
    fetch('https://3245-danielemanc-amazonflask-92bzisl2wb5.ws-eu114.gitpod.io/elenco', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({NomeProdotto: richiesta}),
    })
    .then((response) => response.json())
    .then((data) => {

        //visualizza i dati ricevuti
        console.log(data);

        //Valori
        let CategoriaValue = data[0]['Categoria'];
        let NomeValue = data[0]['Nome'];
        let ImmagineValue = data[0]['Immagine'];
        let PrezzoValue = data[0]['Prezzo'];
        let QuantitàValue = data[0]['Quantità'];

        //QuerySelector
        let Categoria = document.querySelector('.Categoria');
        let Nome = document.querySelector('.Nome');
        let Immagine = document.getElementById('Immagine');
        let Prezzo = document.querySelector('.Prezzo');
        let Quantità = document.querySelector('.Quantità');

        //Cambio del testo
        Categoria.innerHTML = 'Categoria del prodotto: '+CategoriaValue;
        Nome.innerHTML = NomeValue;
        Immagine.src = ImmagineValue;
        Prezzo.innerHTML = 'Prezzo: '+PrezzoValue+"/pz";
        Quantità.innerHTML = 'Quantità: '+QuantitàValue;
    })
    .catch((error) => {
        console.error('Errore nella richiesta fetch:', error);
    })
}
//bottone per tornare indietro
function Back() {
    let mainPage = document.getElementById('mainPage');
    let infoPage = document.getElementById('infoPage');
    mainPage.style.display = 'block';
    infoPage.style.display = 'none';
}