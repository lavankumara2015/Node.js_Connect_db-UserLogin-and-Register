const express = require("express");
const app = express();
const connection = require("./db.js");

app.use(express.json())

app.listen(3265, () => {
  console.log("Server running on port 3265");
});

app.get("/", (req, res) => {

  connection.query(`insert into tablename set ?`,req.body, (err, result) => {
  
    res.status(200).json({
        "status":200,
        "message":"successful register"
        
    })
  });
});

app.get("/users",(req,res)=>{

    connection.query("SELECT * FROM testing.tablename;",(err,data)=>{

        if(err){
            res.status(404).send(err)
        }else{
            res.status(200).json(data)
        }
    })
})
