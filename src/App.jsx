import AccountInfo from './UpAccount'
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
// testing 
// GET all webhooks  
  const getInfo = (async () => {
    const response = await fetch('https://api.up.com.au/api/v1/webhooks', {
      method: "GET",
      headers: {'Authorization': `Bearer ${import.meta.env.VITE_UP_API_KEY}`}
    })
    const results = await response.json();
    setMessage(results)
  })
    getInfo();

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
            //change url to new url *****
  //           url: "https://97f6-49-196-18-136.ngrok-free.app/webhook", 
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
    //   const response = await fetch('https://api.up.com.au/api/v1/webhooks/9f432986-47ff-44fe-abe2-faa13d7cea0d/ping', {
    //     method: "POST",
    //     headers: {'Authorization': `Bearer ${import.meta.env.VITE_UP_API_KEY}`}
    //   })
    //   const results = await response.json();
    //   setText(results)
    // })
    //   sendPing();
    
//DELETE a specific webhook 
    // const deleteWebhook = (async () => {
    //   const response = await fetch('https://api.up.com.au/api/v1/webhooks/f9cb2151-04d4-46cf-af9a-8b3b5524edc0', {
    //     method: "DELETE",
    //     headers: {'Authorization': `Bearer ${import.meta.env.VITE_UP_API_KEY}`}
    //   })
    //   setText(`webhook has been deleted`)
    // })
    //   deleteWebhook();
  }, []); 

  return (
    <div id='card'>
      <AccountInfo/>
      {console.log(message)}
      {console.log(text)}
    </div>
  )
}
export default App