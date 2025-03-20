import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT ||5001;

//Middleware 
app.use(cors()); //frontend can communicate to backend 
app.use(bodyParser.json()); // Parses JSON requests
app.use(express.json());

// app.put("/notify", (req, res) => {
//     console.log("Recieved update", req.body);

//     res.json({ message: "update recieved successfully"});
// });

let latestBalance = null; // Store the latest balance

// Webhook endpoint to receive updates from Up Bank
app.put('/webhook', (req, res) => {
    console.log('Webhook Received:', req.body);

    // Respond to Up Bank
    res.status(200).json({ message: 'Webhook received successfully' });
});

// Endpoint for frontend to get the latest balance when needed
app.get('/api/balance', (req, res) => {
    console.log("Received request for balance", req);

    res.json({ balance: latestBalance ?? "No data yet" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


//To recreate Checkpoint/ Problem: 
    //1) Create webhook with new ngrok url (*Note 1)
        //You must consider your "-X POST" command is in the correct spot // And VITE_UP_API_KEY is valid by using `echo VITE_UP_API_KEY`
        // C+P this command 
        //curl -X POST "https://api.up.com.au/api/v1/webhooks" \
        //   -H "Authorization: Bearer your_real_up_api_key_here" \
        //   -H "Content-Type: application/json" \
        //   -d '{
        //     "data": {
        //       "attributes": {
        //         "url": "https://abcd-1234.ngrok.io/webhook",
        //         "description": "Transaction updates"
        //       }
        //     }
        //   }'

    //2) test and make sure your new webhook url is working by using the PING 
    
    //3) run 'npm run dev' first, then run 'ngrok http http://localhost:5173'

    //4) Open ngrok url and click 'visit site', here you should see our running application 

    //5) send 0.1c into holiday account and you will be met with 'AWS POST 404 NOT FOUND' err. 
    
//*Note 1
    // We need to create a new webhook with a new ngrok url because the ngrok im using is FREE and i dont want to pay a subscription for testing. 