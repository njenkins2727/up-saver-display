import AccountInfo from './UpAccount'
import './App.css'
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const eventSource = new EventSource(`https://${import.meta.env.VITE_BACKEND_URL}/events`); // Opens a persistent connection to http server which sends events in 'text/event-stream' format. Doesnt close until eventsource.close()
    eventSource.onmessage = (event) => { //onmessage is our event handeler 
      const data = JSON.parse(event.data);
      if (data.type === 'transaction-update') {
        window.dispatchEvent(new Event('balance-update')); // Creates a custom event in the browser.
      }
    };
    return () => eventSource.close(); // eventSource doesn't close until we command it. 
  }, []); 

  return (
    <main>
      <div id='card'>
        <AccountInfo/>
        <ul id='links'>
          <li><a href="https://github.com/njenkins2727" className='socials'>Github</a></li>
          <li><a href="https://www.linkedin.com/in/nathan-jenkins-17798b236/" className='socials'>Linkedin</a></li>
          <li><a href="https://www.instagram.com/nathanxjenkins/" className='socials'>Instagram</a></li>
          <li>created by nathan</li>
        </ul>
      </div>
    </main>
  )
}
export default App