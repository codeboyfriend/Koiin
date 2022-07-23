import { Link } from 'react-router-dom'

const Coin = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="coin">
        <div className="coin_box">
          <h3>{coin.market_cap_rank}</h3>
          <div className="name">
            <img src={coin.image} alt="" />
            {coin.name}
          </div>
          <h3 className='media'>{coin.symbol}</h3>
          <h3>{coin.market_cap}</h3>
          <h3 className='media'>{coin.total_volume}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Coin