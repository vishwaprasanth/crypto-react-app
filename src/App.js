import axios from "axios";
import React, { useEffect, useState }from "react";
import Coins from "./components/Coins";

function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'


  useEffect(() => {
    axios.get(url).then(() =>{
      setCoins(Response.data)
      console.log(Response.data[1])
    }).catch((error) => {
      console.log(error)
    },[])

  })


  return (
    <>
    <Coins coins={coins}/>
    </>
  );
}

export default App;
