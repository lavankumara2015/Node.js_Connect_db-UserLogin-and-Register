
const exprees =require("express");


const app = exprees();

app.listen(3018, ()=>{
    console.log("server running");
});



app.get("/html",(req,res)=>{

    res.sendFile( __dirname +"/indexlavan.html")
})

// app.get("/",(req,res)=>{

//     if(req.query.city){

//     res.send(`well come to ${req.query.city}`)
// }
// else{

//     res.send("hello")
// }
// })



// app.get("/oko/:city",(req,res)=>{

//     if(req.params.city){

//     res.send(`well come to ${req.params.city}`)
// }

// })