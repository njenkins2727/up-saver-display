import { useEffect, useState } from "react";

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
        setBalance(results.data[1].attributes.balance.balance);
      }catch(error){
        console.log('failed to fetch account info', error) 
      }
  })
        getInfo();
      }, []); 
  

      return (
        <div>
          {/* Displaying Name and Balance */}
          <h1 id="name">{name}</h1>
          <div id="balance">{balance}</div>
        </div>
      );
}
export default UpAccount;


