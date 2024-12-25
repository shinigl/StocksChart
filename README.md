# Stock Tracker Dashboard

## Overview
The Stock Tracker Dashboard is a fully functional web application built using HTML, CSS, JavaScript, and external APIs. The dashboard provides real-time stock data, allowing users to view and compare stock prices, historical trends, and visualize data through interactive charts. The dashboard is responsive, working well on both desktop and mobile devices.

## Live Demo
You can view the live demo of the project here:
[**Stock Tracker Dashboard**](https://github.com/shinigl/StocksChart)

## Key Features
- **Real-Time Stock Data**: Users can search for any stock by symbol (e.g., AAPL, MSFT), retrieve detailed information like price, volume, and changes in price, and display a graph showing the stock's historical performance.
- **Trending Stocks**: A dropdown menu lists the top 10 trending stocks. Users can select a stock from the list and view its current data and graph.
- **Stock Price Visualization**: The stock prices are visualized in a line graph, making it easy for users to view trends over time.
- **Dynamic Comparison Table**: Users can compare selected stocks based on price, change, and volume in a table format.
- **Responsive Design**: The interface adjusts to fit any screen size, from mobile devices to desktops.

## Technologies Used
- **HTML5**: For structuring the content.
- **CSS3**: For styling and implementing responsive design.
- **JavaScript**: For DOM manipulation, handling asynchronous API requests, and providing interactivity.
- **Chart.js**: For displaying stock data in an interactive graph.
- **Alpha Vantage API**: For retrieving real-time stock data.
- **Fetch API**: For making asynchronous requests to retrieve stock data.

## API Documentation
- **[Alpha Vantage API Documentation](https://www.alphavantage.co/documentation/)**: Used for fetching real-time stock prices and historical data.
- **[Chart.js Documentation](https://www.chartjs.org/docs/latest/)**: Used for displaying stock price trends in a line graph.

## How It Works
1. **Real-Time Data Fetching**: When a user searches for a stock symbol, the app makes a request to the Alpha Vantage API and retrieves the latest stock information.
2. **Trending Stocks Dropdown**: A dropdown menu fetches and lists the top 10 trending stocks, which users can select to view their real-time data and graph.
3. **Stock Visualization**: The stock data is displayed in an interactive line graph, generated using Chart.js, allowing users to analyze stock price trends over time.
4. **Dynamic Table**: A table dynamically updates to display stock information such as price, volume, and price change for easy comparison between different stocks.
5. **Responsive Design**: The dashboard layout is fully responsive, ensuring it provides a great user experience on both mobile devices and desktops.



