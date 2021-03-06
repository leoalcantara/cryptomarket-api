var apiKey = {
    key: '719a17b9-b471-40de-8d79-97b8d00698fd'
}

fetch ('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apiKey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) =>{
         console.log(api);
        var text = "";

        for (let i = 0; i < 12; i++){
            text = text + `
            <div class="media ">
            <img src="coin.png" class="align-self-center mr3" alt="coin" >
            <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                <p>${api.data[i].first_historical_data}</p>
            </div>
        </div>    
        `;
        document.getElementById("coins").innerHTML = text;
        }
    })
    .catch((error) => {
        console.error(error.message);
    });