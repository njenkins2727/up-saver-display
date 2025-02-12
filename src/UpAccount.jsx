import { useEffect, useState } from "react";

const apiKey = 'up:yeah:8yUTY4o4WauKy5rGw46OaQ1Bn67RER0sacEohM0Tkg2IYpQL5aBoHX0BqCOvuopvvNLY1O645gQH7TS3d9n9mACyzStVx8Tgb3VoLGLWFq1ggBXEPcfHOBT2QuU7NLUc';

function UpAccount() {
  const [name, setName] = useState([]);
  const [value, setValue] = useState([]);

    useEffect(() => {
      const getInfo = (async () => {
        const response = await fetch('https://api.up.com.au/api/v1/accounts?filter[accountType]=SAVER', {
          method: "GET",
          headers: {'Authorization': `Bearer ${apiKey}`}
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