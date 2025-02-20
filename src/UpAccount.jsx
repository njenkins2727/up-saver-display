import { useEffect, useState } from "react";

function UpAccount() {
  const [name, setName] = useState([]);
  const [value, setValue] = useState([]);

    useEffect(() => {
      const getInfo = (async () => {
        const response = await fetch('https://api.up.com.au/api/v1/accounts?filter[accountType]=SAVER', {
          method: "GET",
          headers: {'Authorization': `Bearer ${import.meta.env.VITE_UP_API_KEY}`}
        })
        const results = await response.json();
        setName(results.data[1].attributes.displayName);
        setValue(results.data[1].attributes.balance.value);
      })
        getInfo();
      }, []); 

      return (
        <div>
          <h1 id="name">{name}</h1>
          <div id="value">{value}</div>
        </div>
      );
}
export default UpAccount;

//Next steps: 

  // automatically update value onChange - get webhook response  
  //CSS upgrades : change design and add animation and aethetic 