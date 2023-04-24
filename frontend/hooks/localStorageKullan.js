import { useState } from "react";
//KEYİMİ BİLMEM GEREKİYOR

export function localStorageKullan(LSKey, initValue) {
  const [dataLS, setDataLS] = useState(() => {
    const localData = JSON.parse(localStorage.getItem(LSKey));

    //ls deki değeri var mı yok mu kontrol edip
    if (localData === null) {
      //varsa state onu atıyor

      return localData;
    } else {
      //yoksa inital olarak belirtilen değeri yazıyor
      localStorage.setItem(LSKey, JSON.stringify(initValue));
      return initValue;
    }
  });

  function writeToLocalStorage(newValue) {
    setDataLS(newValue);
    localStorage.setItem(LSKey, JSON.stringify(newValue));
  }

  return [dataLS, writeToLocalStorage];
}

export default localStorageKullan;
