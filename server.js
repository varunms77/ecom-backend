const express = require('express')
const connectDB = require("./config/db")
const cors =require('cors')

const app = express()
const allowedOrigins=[
    "https://ecom-frontend-six-self.vercel.app/",
    "https://ecom-frontend-ark7s85ih-varun-s-projects-6f794134.vercel.app"
];

app.use(express.json())
app.use(cors([{
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authentication headers if needed
  }]))
connectDB()
app.use("/auth",require("./routes/authRoutes"))
app.use("/cart",require("./routes/cartRoutes"))


app.get('/',(req,res)=>{
    res.send('getting the server')

})
const port = 5000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})