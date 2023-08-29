import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

// Your code here

const axios = require('axios');

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Use cors-anywhere proxy
const baseUrl = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const parameters = {
  start: '1',
  limit: '5000',
  convert: 'USD'
};

const headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': 'af3eca14-1ec4-4782-bff6-67571ffda661'
};

const config = {
  params: parameters,
  headers: headers
};

axios.get(proxyUrl + baseUrl, config) // Use the proxy URL before the API URL
  .then(response => {
    const data = response.data;
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


/*import axios from 'axios';
const axios = require('axios');

const url = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const parameters = {
  start: '1',
  limit: '5000',
  convert: 'USD'
};

const headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': 'af3eca14-1ec4-4782-bff6-67571ffda661'
};

const config = {
  params: parameters,
  headers: headers
};

axios.get(url, config)
  .then(response => {
    const data = response.data;
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/



/*var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankingeeeee46a7eb677db0354997c87cd3e6096831507c539e0c3";

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }
        //For Loop Starts
        coinsData.forEach((coin) => {
          cryptoCoin += "<tr>";
          cryptoCoin += `<td> ${coin.uuid} </td>`;
          cryptoCoin += `<td> ${coin.btcPrice} </td>`;
          cryptoCoin += `<td> ${coin.rank}</td>`;
          cryptoCoin += `<td> ${coin.tier} </td>`;
          cryptoCoin += `<td> ${coin.name}</td>`;
          cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
          cryptoCoin += `<td> ${coin.symbol}</td>`;"<tr>";
        });
        //For Loop Ends
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
  */