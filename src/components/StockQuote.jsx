import { useState, useEffect } from 'react';

// Use the API key from the .env file
const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

// Component to fetch and display stock quote data
const StockQuote = () => {
  // State to store stock data and error
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [symbol, setSymbol] = useState('TSLA'); // Default stock symbol (Tesla)

  // Function to fetch stock quote data from Finnhub API
  const fetchStockQuote = async (stockSymbol) => {
    try {
      const response = await fetch(
        `${FINNHUB_BASE_URL}/quote?symbol=${stockSymbol}&token=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setStockData(data);
      setError(null);
    } catch (err) {
      setError('Error fetching stock data: ' + err.message);
      setStockData(null);
    }
  };

  // Fetch data when component mounts or when symbol changes
  useEffect(() => {
    fetchStockQuote(symbol);
  }, [symbol]);

  // Handle input change for stock symbol
  const handleSymbolChange = (e) => {
    setSymbol(e.target.value.toUpperCase());
  };

  return (
    <div className='stock-quote container text-center mb-3'>
      {/* Input for stock symbol */}
      <h4 className='text-light'>{symbol} Stock Quote</h4>
      <div className='text-light'>
        <label className='mt-3'>
          Stock Symbol:
          <input className='rounded bg-dark text-light text-center' type="text" value={symbol} onChange={handleSymbolChange} />
        </label>
      </div>

      {/* Display error if any */}
      {error && <div>{error}</div>}

      {/* Display stock data */}
      {stockData && (
        <div>
          <h5 className='text-warning'>Current Price: ${stockData.c}</h5>
          <p className='text-light'>Change: ${stockData.d} ({stockData.dp}%)</p>
          <p className='text-light'>High Price: ${stockData.h}</p>
          <p className='text-light'>Low Price: ${stockData.l}</p>
          <p className='text-light'>Open Price: ${stockData.o}</p>
          <p className='text-light'>Previous Close: ${stockData.pc}</p>
        </div>
      )}
    </div>
  );
};

export default StockQuote;