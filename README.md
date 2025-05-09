# Up Saver Display

This project started after I wanted to see what data you can retrive from the [Up Bank API](https://developer.up.com.au). I decided to make a simple yet functional application to reinforce my knowledge and apply what I was learning. 

## 🔧 Tech Stack

- **Node.js + Express.js** — backend server and API integration
- **Vite + React** — fast frontend development and build tool
- **Server-Sent Events (SSE)** — for real-time updates using webhooks
- **Up Bank API** — to access account balance and transaction data
- **Render** - for hosting my application  
- **Ngrok** - to run the backend server and test application with webhooks

## 📦 Deployment

- Backend and frontend are hosted using [Render](https://render.com/)
- You can visit the deployed app here: 
```
https://myupsaver.onrender.com/
```

![Image of application](/public/myupsaver-ss.png)

## 🚀 How It Works

1. The backend listens for webhook events from Up Bank (e.g transfer money TO or FROM my "Holiday' saving account).
2. On send/receive of a new transaction, the webhook pushes a custom event to all connected clients via SSE.
3. The frontend listens to these events and updates the display with an animation in real-time.

## 📲 Contact 

- [Email](njenkins2727@gmail.com)
- [Linkedin](https://www.linkedin.com/in/nathan-jenkins-17798b236/)
- [Github](https://github.com/njenkins2727)

---

Thank you for visiting My Up Saver! I hope you enjoy exploring the app as much as I enjoyed building this project. If you have any feedback or suggestions, feel free to reach out. 