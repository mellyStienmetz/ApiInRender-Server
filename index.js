import express  from "express";
import cors from "cors";
import axios from "axios";
const app=express();
app.use(cors());
const port=3000;


const options = {
  method: 'GET',
  url: 'https://api.render.com/v1/services?limit=20',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer rnd_CP68Wvm1J7ozh6K8nivbpU4iMAbc'
  }
};

app.get('/',(req,res)=>{
  axios
  .request(options)
  .then(function (response) {
    res.send(response.data);
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  
})


app.listen(port,()=>{console.log("the site is working")});