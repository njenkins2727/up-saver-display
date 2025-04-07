import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5001;

let clients = []; 

//Middleware 
app.use(cors()); //frontend can communicate to backend 
app.use(bodyParser.json()); // Parses JSON requests
app.use(express.json());

//needed thiese 3 lines to jumpstart server - spent hours on this to be the solution ** issue that took alot longer than needed
app.get("/", (req, res) => {
    res.send("Server is running!");
  });

//when running server side events you need to impliment a route with headers. These headers tell the browser the following: 
app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream'); // what data to expect 
  res.setHeader('Cache-Control', 'no-cache'); // dont cache 
  res.setHeader('Connection', 'keep-alive'); // how to treat the connection 
  res.flushHeaders(); // sends above headers immediately (we confirm with browser we are talking through SSE, so it can listen for events + this is listening to our func sendEventToAllclients())  

  clients.push(res);

  req.on('close', () => {
    clients = clients.filter(c => c !== res); // if any index in "clients" array does not equal the response (a single clients connection), it will be removed from the arrray. this is for disconnecting clients or clients who dont need to recieve anymore updates. 
  });
});

function sendEventToAllclients(data) {
  clients.forEach(res => {
    res.write(`data: ${JSON.stringify(data)}\n\n`); // sends data to the client (this must occure after establishing headers)
  });
}

// Webhook endpoint to receive updates from Up Bank
app.post('/webhook', (req, res) => {
    console.log('Webhook Received:', req.body);

    // Send data to all SSE clients
  sendEventToAllclients({ type: 'transaction-update' }); //when event is triggered, the webhook will ping and the incoming info will pass through this 

    // Respond to Up Bank
    res.status(200).json({ message: 'Webhook received successfully' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//To recreate Checkpoint/ Problem: 
    //1) Create webhook with new ngrok url in App.jsx under "POST webhook", need to paste new ngrok url where it intructs you to do so. 

    //2) test and make sure your new webhook url is working by using the PING 
    
    //3) run 'npm run dev' first, then run 'ngrok http http://localhost:5173'

    //4) Open ngrok url and click 'visit site', here you should see our running application 

    //5) send 0.1c into holiday account and you will be met with 'AWS POST 404 NOT FOUND' err. 

//*Note 1
    // We need to create a new webhook with a new ngrok url because the ngrok im using is FREE and i dont want to pay a subscription for testing. 