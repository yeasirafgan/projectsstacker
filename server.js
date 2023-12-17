require("dotenv").config();
const express = require('express');
const app = express();


app.get('/', (req,res)=>{
  res.send('Okay thik aase')
})
const port = process.env.PORT || 2000

app.listen(port,()=>{
  console.log(`listening on http://localhost:${port}`)
})