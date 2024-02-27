// var http=require("http");
// // const { json } = require("stream/consumers");
// http.createServer((req,res)=>{
//     res.write("hello")
//     res.end()
// }).listen(3011,()=>{
//     console.log("your sever running 3002 port");
// })

var http=require("http");
var url=require("url");
var file=require("fs");

http.createServer((req,res)=>{

  let data = url.parse(req.url,true)
 
  if(data.path==="/login"){

   file.rename("./index.html","indexlavan", (err,ress)=>{
     if(err){
      res.write(err);         
      res.end()
     }else{
      res.write("file is updated");         
      res.end()
     }
   })
}
 else if(data.path==="/register"){
   res.write("Welcome to Register page")
   res.end()
 }
 else if(data.path==="/"){
   res.write(JSON.stringify([{"profile" : "lavankumar"}]))  
   res.end()
 }

 else if(data.path==="/Addtocart"){
   
   res.write("welcome to cart")
   res.end()
 }

 else{
   res.write("invalid Url");
   res.end()
}

}).listen(3012,()=>{

   console.log("your sever ready");

})




