const express = require('express');

const app= express();

const port = 3000;

const apiRoutes = require('./routes/apiRoutes');


app.get('/',(req,res)=>{
   res.json({message: "Inventory Service is up and running..."});
})

app.use('/api', apiRoutes);

app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`)
})