import express from 'express';
import dotenv from 'dotenv-defaults';
import mongoose from 'mongoose';
import router from './backend/routes/index.js';
dotenv.config();
const app = express();
//init middleware
app.use(express.json())
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})
//define routes
app.use('/api',router);
const port = process.env.PORT||4000;
app.listen(port,()=>
    console.log(`server listening on port ${port}`),
);

mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then((res)=>console.log("monge db connection created"));