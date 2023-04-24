import React, { useState, useEffect } from "react";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

/*
keyimi bilmem lazım
başlangı.ta localstoragede deger var mı 
localstoragede tutulacak değerleri bilmem lazım

*/
import localStorageKullan from "./hooks/localStorageKullan";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  const initialGeceModu = false;

  const [geceModu, setGeceModu] = localStorageKullan("02LS23", initialGeceModu);

  //const localKey = 0223;
  //localStorage.setItem(lokalKey,"olala");

  /* function checkLocalStorage(LSKey, inialLSValue) {
    const localData = localStorage.getItem(LSKey);
    if (localData === null) {
      setGeceModu(inialLSValue);
      localStorage.setItem(LSKey, inialLSValue);
    } else {
      setGeceModu(localData);
    }
  }

  const [LoginInfo, setLoginInfo] = useState();

  function checkLocalStorage(LSKey, inialLSValue) {
    const localData = localStorage.getItem(LSKey);
    if (localData === null) {
      setGeceModu(inialLSValue);
      localStorage.setItem(LSKey, inialLSValue);
    } else {
      setGeceModu(localData);
    }
  }
  */

  useEffect(() => {
    // checkLocalStorage(localKey, initialGeceModu);
    // checkLocalStorage("loginUser", "tokenUserkkkkjdgdk");
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
