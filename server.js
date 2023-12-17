require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoute')
// express app
const app = express();

// port
const port = process.env.PORT || 2000

// middlewares
app.use(express.json())
app.use((req,res,next)=> {
  console.log(req.path, req.method);
  next()
})



// routes
app.use('/api/projects', projectRoutes)

// mongodb
mongoose.connect(process.env.MONGO_URI).then(()=>{
  // listen to port
app.listen(port,()=>{
  console.log(` Connected to mongo and listening on http://localhost:${port}`)
})
}).catch((err)=>{
  console.log(err)
})


