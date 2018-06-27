const baseURL = 'https://www.alphavantage.co/query?';
const key = 'ZAAPF7BTVFA92IGH';

const searchTerm = document.querySelector('.symbol');
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', fetchResults);

const section = document.querySelector('section')

function fetchResults(e) {
    e.preventDefault();
    let url = baseURL + 'function=' + 'BATCH_STOCK_QUOTES' + '&symbols=' + searchTerm.value + '&apikey=' + key;
    //    let url = "https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=FB,MSFT,DIS,PG,JJ&apikey=ZAAPF7BTVFA92IGH"

    fetch(url)
        .then(
            function (response) {
                console.log(response);
                return response.json()
            })
        .then(
            function(json){
                console.log(json)
                displayResults(json);
            })
} 

function displayResults(json){
    let stocks = json;
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }


let stock = document.createElement('div');
let symbol = document.createElement('p');
let price = document.createElement('p');
let timestamp = document.createElement('p');


symbol.textContent = 'symbol: ' + stocks["Stock Quotes"][0]["1. symbol"];
price.textContent = 'price (U.S. Dollar): ' + stocks["Stock Quotes"][0]["2. price"];
timestamp.textContent = 'Time/Date: ' + stocks["Stock Quotes"][0]["4. timestamp"];
//how to access the time, set the text content of time to equal that

stock.appendChild(symbol);
stock.appendChild(price);
stock.appendChild(timestamp);
section.appendChild(stock);
}


