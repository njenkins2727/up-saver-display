import AccountInfo from './UpAccount'
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
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
    //   const response = await fetch('https://api.up.com.au/api/v1/webhooks/f9e29e64-6166-4017-a7e5-7f4db44258d7', {
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