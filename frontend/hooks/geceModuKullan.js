import localStorageKullan from "./localStorageKullan";

function geceModuKullan() {
  const timeCurrent = new Date().getHours();
  const initialGeceModu = timeCurrent > 19 ? true : false;
  const [geceModu, setGeceModu] = localStorageKullan("02LS23", initialGeceModu);

  return [geceModu, setGeceModu];
}
export default geceModuKullan;
