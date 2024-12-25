const API_KEY = 'TPVERP0J95UNQS5M'; 
let stockChart; 


async function fetchTrendingStocks() {
  const trendingStocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA']; 
  const dropdown = document.getElementById('trendingStocks');

  trendingStocks.forEach(stock => {
    const option = document.createElement('option');
    option.value = stock;
    option.textContent = stock;
    dropdown.appendChild(option);
  });

  dropdown.addEventListener('change', () => {
    fetchStockData(dropdown.value);
  });
}

async function fetchStockData(symbol) {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`);
    const data = await response.json();
    
    if (data['Error Message'] || data['Note']) {
      alert('Error: ' + data['Error Message'] || data['Note']);
      return;
    }


    displayStockDetails(data, symbol);
   
    displayStockGraph(data, symbol);

    addToComparisonTable(data, symbol);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    alert('Error fetching stock data. Please try again.');
  }
}


function displayStockDetails(data, symbol) {
  const stockDetails = document.getElementById('stockDetails');
  const latestDate = Object.keys(data['Time Series (Daily)'])[0];
  const latestData = data['Time Series (Daily)'][latestDate];

  stockDetails.innerHTML = `
    <p><strong>Symbol:</strong> ${symbol}</p>
    <p><strong>Price:</strong> ${latestData['4. close']}</p>
    <p><strong>Open:</strong> ${latestData['1. open']}</p>
    <p><strong>High:</strong> ${latestData['2. high']}</p>
    <p><strong>Low:</strong> ${latestData['3. low']}</p>
    <p><strong>Volume:</strong> ${latestData['5. volume']}</p>
  `;
}


function displayStockGraph(data, symbol) {
  const labels = Object.keys(data['Time Series (Daily)']).slice(0, 30).reverse();
  const prices = labels.map(date => data['Time Series (Daily)'][date]['4. close']);

  const ctx = document.getElementById('stockChart').getContext('2d');

  
  if (stockChart) {
    stockChart.destroy();
  }


  stockChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: `${symbol} Price`,
        data: prices,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
      }]
    },
    options: {
      responsive: true
    }
  });
}


function addToComparisonTable(data, symbol) {
  const tableBody = document.getElementById('comparisonTableBody');
  const latestDate = Object.keys(data['Time Series (Daily)'])[0];
  const latestData = data['Time Series (Daily)'][latestDate];


  const existingRow = Array.from(tableBody.children).find(row => row.firstChild.textContent === symbol);
  if (existingRow) {
    alert(`${symbol} is already in the comparison table.`);
    return;
  }


  const row = document.createElement('tr');

  const symbolCell = document.createElement('td');
  symbolCell.textContent = symbol;

  const priceCell = document.createElement('td');
  priceCell.textContent = latestData['4. close'];

  const changeCell = document.createElement('td');
  changeCell.textContent = (latestData['4. close'] - latestData['1. open']).toFixed(2);

  const volumeCell = document.createElement('td');
  volumeCell.textContent = latestData['5. volume'];

  row.appendChild(symbolCell);
  row.appendChild(priceCell);
  row.appendChild(changeCell);
  row.appendChild(volumeCell);

  tableBody.appendChild(row);
}


fetchTrendingStocks();

document.getElementById('searchButton').addEventListener('click', () => {
  const stockSymbol = document.getElementById('stockSearch').value.toUpperCase();
  if (stockSymbol) {
    fetchStockData(stockSymbol);
  }
});
