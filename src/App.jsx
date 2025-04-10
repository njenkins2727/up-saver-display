import AccountInfo from './UpAccount'
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5001/events'); // Opens a persistent connection to http server which sends events in 'text/event-stream' format. Doesnt close until eventsource.close()

    eventSource.onmessage = (event) => { //onmessage is our event handeler 
      const data = JSON.parse(event.data);
      if (data.type === 'transaction-update') {
        window.dispatchEvent(new Event('balance-update')); // Creates a custom event in the browser.
      }
    };

// testing 
// GET all webhooks  
  // const getInfo = (async () => {
  //   const response = await fetch('https://api.up.com.au/api/v1/webhooks', {
  //     method: "GET",
  //     headers: {'Authorization': `Bearer ${import.meta.env.VITE_UP_API_KEY}`}
  //   })
  //   const results = await response.json();
  //   setMessage(results)
  // })
  //   getInfo();

// POST webhook  
  // const createWebhook = (async () => {
  //   const response = await fetch("https://api.up.com.au/api/v1/webhooks", {
  //     method: "POST",
  //     headers: {
  //       "Authorization": `Bearer ${import.meta.env.VITE_UP_API_KEY}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       data: {
  //         attributes: {
  //          //change url to new url *****
  //           url: "https://92e2-49-196-19-194.ngrok-free.app/webhook", 
  //           description: "Transaction updates",
  //         },
  //       },
  //     }),
  //   });
  //   const result = await response.json();
  //   console.log("Webhook Created:", result);
  // })
  //   createWebhook();

// GET a specific webhook
    // const retrieveOurWebhook = (async () => {
    //   const response = await fetch('https://api.up.com.au/api/v1/webhooks/f1978ef0-667f-431c-ab02-e3a07bf95c49', {
    //     method: "GET",
    //     headers: {'Authorization': `Bearer ${import.meta.env.VITE_UP_API_KEY}`}
    //   })
    //   const results = await response.json();
    //   setText(results)
    // })
    //   retrieveOurWebhook();

//PING a specific webhook
    // const sendPing = (async () => {
    //   const response = await fetch('https://api.up.com.au/api/v1/webhooks/7c68ea26-fdeb-45da-aca5-6b8d961d6b60/ping', {
    //     method: "POST",
    //     headers: {'Authorization': `Bearer ${import.meta.env.VITE_UP_API_KEY}`}
    //   })
    //   const results = await response.json();
    //   setText(results)
    // })
    //   sendPing();
    
//DELETE a specific webhook 
    // const deleteWebhook = (async () => {
    //   const response = await fetch('https://api.up.com.au/api/v1/webhooks/b88d3b75-7d6f-4987-8fb6-7e967f45cfc6', {
    //     method: "DELETE",
    //     headers: {'Authorization': `Bearer ${import.meta.env.VITE_UP_API_KEY}`}
    //   })
    //   setText(`webhook has been deleted`)
    // })
    //   deleteWebhook();
  //
    return () => eventSource.close(); // eventSource doesn't close until we command it. 
  }, []); 

  return (
    <main>

      <div id='card'>
        <AccountInfo/>
        {/* {console.log(message)}
        {console.log(text)} */}
      </div>

      <ul>
        <li><a href="https://github.com/njenkins2727" className='socials'>Github</a></li>
        <li><a href="https://www.linkedin.com/in/nathan-jenkins-17798b236/" className='socials'>Linkedin</a></li>
        <li><a href="https://www.instagram.com/nathanxjenkins/" className='socials'>Instagram</a></li>
        <li>created by nathan</li>
      </ul>

    </main>
  )
}
export default App