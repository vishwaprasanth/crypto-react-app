import React from 'react'

const CoinItem = () => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
    </div>
  )
}

export default CoinItem