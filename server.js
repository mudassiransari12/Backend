//server Instantiate
const express=require('express');
const app=express();
//used to parse req.body in express -> put or post
const bodyparser=require('body-parser');
//specifically parse json data & add it to the request.body object 
app.use(bodyparser.json());

//Activate the server on port 3000
app.listen(8000,()=>{
    console.log("server started at port number 8000");
})
//routes
app.get('/',(request,response)=>{
    response.send("hello jee, kaise ho bhai");
})
app.post('/api/cars', (request,response)=>{
    const {name,brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted sucessfully");
})
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlparser:true,
    useUnifiedTopology:true
})

.then(()=>{console.log("connection Sucessful")})
.catch( (error)=>{console.log("Recieved an error")});
