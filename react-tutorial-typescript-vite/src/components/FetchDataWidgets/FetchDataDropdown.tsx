import { useState, ChangeEvent, useEffect } from "react";
import { API_PATH, API_CURRENCY_LOCATION } from "../../utils/paths";

function FetchDataDropdown() {
  const [currency, setCurrency] = useState<string>("");
  const [rate, setRate] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if(currency){
      setIsLoading(true);
      fetch(`${API_PATH}${API_CURRENCY_LOCATION}/${currency}.json`)
      .then(response => response.json())
      .then((data:number) =>{
        if(data)
          setRate(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
      
  }, [currency]);

  function handleDropdownChange( event: ChangeEvent<HTMLSelectElement> ){
    setCurrency(event.target.value);
  }

  return(
    <>
      <h2>Fetch Data Dropdown</h2>
      <select onChange={handleDropdownChange} disabled={isLoading}>
        <option value="">Select a currency</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="cad">CAD</option>
      </select>
      <h3>1 {currency.toUpperCase()} = {rate} USD</h3>
    </>
  )
}

export default FetchDataDropdown;