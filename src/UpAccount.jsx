import { useEffect, useState } from "react";
import OdometerDisplay from "./odometerAnimation";

function UpAccount() {
  const [name, setName] = useState([]);
  const [balance, setBalance] = useState([]);

//Displaying account name and balance in account  
useEffect(() => {
  const getInfo = (async () => {
    try{

      const response = await fetch('https://api.up.com.au/api/v1/accounts?filter[accountType]=SAVER', { 
        method: "GET",
        headers: {'Authorization': `Bearer ${import.meta.env.VITE_UP_API_KEY}`}
      })

      if (!response.ok) { //If the response is invalid then return an error with the status and message
        throw new Error(`Account Info Error: ${response.status} ${response.statusText}`);
      }

      const results = await response.json(); // Since it is an asynchronus function we must await the resonse and convert into json for readability  

      //Using useState to set response from our fetch into a variable we can easily refer back to  
      setName(results.data[1].attributes.displayName); 
      setBalance(results.data[1].attributes.balance.value);

    }catch(error){
      console.log('failed to fetch account info', error) 
    }
  })
  getInfo();

  const handleUpdate = () => {
    getInfo(); // re-fetch name and balance 
  };

  //We are listening for when the 'balance-update' event is sent to the window object.
  window.addEventListener('balance-update', handleUpdate);

  //This cleanup function is so we dont stack addEventListeners evertime we re-mount or re-render;
  return () => window.removeEventListener('balance-update', handleUpdate); 

}, []); 

return (
  <div>
    {/* Displaying Name and Balance */}
    <h1 id="name">My {name} Saving</h1>
    <div id="balance">
    <OdometerDisplay balance={balance} /> 
    </div>
    <p>Last updated at:  </p>
  </div>
);
}
export default UpAccount;