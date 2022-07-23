import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/style.css';
import Header from './utils/Header';
import Coins from './Pages/Coins';
import SingleCoin from './Pages/SingleCoin';

const App = () => {
  const [mode, setMode] = useState(true);
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  
  const fetchData = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setCoins(data))

    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Router>
      <div className={mode ? 'container' : 'dark-theme'}>
      <Header
        mode={mode} 
        setMode={setMode} 
      />
      
      <Routes>
        <Route 
          path='/' 
          element={
            <Coins 
              coins={coins} 
              isLoading={isLoading} 
          />} />
        <Route 
          path='/coin/:coinId' 
          element={
            <SingleCoin 
          />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
