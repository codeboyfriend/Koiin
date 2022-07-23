import { useEffect, useState } from "react";

const SingleCoin = () => {
    const coinId = window.location.pathname.split("/")[2];
    const [coin, setCoin] = useState({});

    const fetchCoin = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        .then(res => res.json())
        .then(data => setCoin(data))
    }

    useEffect(() => {
        fetchCoin()
      }, [])

  return (
    <div className="single_coin">
      <div className="single_coin_header">
        <img src={coin.image?.small} alt="" />
        <h3>{coin.name}</h3>
      </div>

      <div className="single_coin_content">
        <div className="content_box">
          <div className="content">
            <h3><img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/undefined/external-rank-seo-xnimrodx-lineal-gradient-xnimrodx.png" 
                alt=""></img> Rank
            </h3>
            <h3>{coin.market_cap_rank}</h3>
          </div>
          <div className="content">
            <h3><img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/undefined/external-graph-science-and-technology-icongeek26-outline-gradient-icongeek26.png" 
                alt=""></img> Market Cap
            </h3>
            <h3>${coin.market_data?.market_cap.aed}</h3>
          </div>
          <div className="content">
            <h3><img src="https://img.icons8.com/nolan/64/cost.png" 
                alt=""></img> Price
            </h3>
            <h3>${coin.market_data?.current_price.aed}</h3>
          </div>
          <div className="content">
            <h3><img src="https://img.icons8.com/nolan/64/total-sales-1.png" 
                alt=""></img> Total Volume
            </h3>
            <h3>{coin.market_data?.total_volume.aed}</h3>
          </div>
        </div>

        <div className="change_box">
          <div className="left_box">
            <div className="box_header">
              <h3><img src="https://img.icons8.com/nolan/64/change.png"></img>Price Changes</h3>
            </div>

            <div className="content">
              <h3><i className="bi bi-currency-exchange"></i>24h</h3>
              <h3>{coin.market_data?.price_change_percentage_24h}%</h3>
              <h3>${coin.market_data?.price_change_24h}</h3>
            </div>

            <div className="content">
              <h3><i className="bi bi-currency-exchange"></i>7d</h3>
              <h3>{coin.market_data?.price_change_percentage_7d}%</h3>
              <h3>${coin.market_data?.price_change_percentage_7d_in_currency.aed}</h3>
            </div>

            <div className="content">
              <h3><i className="bi bi-currency-exchange"></i>14d</h3>
              <h3>{coin.market_data?.price_change_percentage_14d}%</h3>
              <h3>${coin.market_data?.price_change_percentage_14d_in_currency.aed}</h3>
            </div>

            <div className="content">
              <h3><i className="bi bi-currency-exchange"></i>30d</h3>
              <h3>{coin.market_data?.price_change_percentage_30d}%</h3>
              <h3>${coin.market_data?.price_change_percentage_30d_in_currency.aed}</h3>
            </div>

            <div className="content">
              <h3><i className="bi bi-currency-exchange"></i>60d</h3>
              <h3>{coin.market_data?.price_change_percentage_60d}%</h3>
              <h3>${coin.market_data?.price_change_percentage_60d_in_currency.aed}</h3>
            </div>

            <div className="content">
              <h3><i className="bi bi-currency-exchange"></i>200d</h3>
              <h3>{coin.market_data?.price_change_percentage_200d}%</h3>
              <h3>${coin.market_data?.price_change_percentage_200d_in_currency.aed}</h3>
            </div>

            <div className="content">
              <h3><i className="bi bi-currency-exchange"></i>1yr</h3>
              <h3>{coin.market_data?.price_change_percentage_1y}%</h3>
              <h3>${coin.market_data?.price_change_percentage_1y_in_currency.aed}</h3>
            </div>
          </div>
        </div>

        <div className="market_change">
          <div className="box_header">
            <h3><img src="https://img.icons8.com/nolan/64/change.png"></img>Market Cap Changes</h3>
          </div>

          <div className="content">
              <h3><i className="bi bi-currency-exchange"></i>24h</h3>
              <h3>{coin.market_data?.market_cap_change_percentage_24h}%</h3>
              <h3>${coin.market_data?.market_cap_change_24h}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCoin