'use strict';

fetch('https://api2.binance.com/api/v3/ticker/24hr')
    .then(response => response.json())
    .then(data => {
        const cryptoData = data.slice(0, 10); 
        
        const rows = cryptoData.map(({ symbol, lastPrice, priceChangePercent }) => {
            return `<tr><td>${symbol}</td><td>${lastPrice}</td><td>${priceChangePercent}</td></tr>`;
        });

        const table = document.createElement('table');
        table.innerHTML = `<tr><th>Символ</th><th>Остання ціна (USDT)</th><th>Зміна за 24 години (%)</th></tr>${rows.join('')}`;
        
        document.body.appendChild(table);
    })
    .catch(error => console.error(error));
