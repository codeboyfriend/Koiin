import Coin from "../Components/Coin"

const Coins = ({ coins, isLoading }) => {
  return isLoading ? (<h1>Loading</h1>) : (
    <div className='coin_header'>
        <div className="box">
          <h3>Rank</h3>
          <h3>Name</h3>
          <h3 className="media">Symbols</h3>
          <h3>Price($)</h3>
          <h3 className="media">Volume</h3>
        </div>

        {coins.map((coin) => <Coin key={coin.id} coin={coin} />)}

        <div className="footer">codeboyfriend &copy; 2022</div>
    </div>
  )
}

export default Coins