const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017" ;

const databaseName = "local";

const client = new MongoClient(url);

async function dbConnection(){

    let result = await client.connect();
    
    db = result.db(databaseName);
    
    // collection = db.collection("Learning");

    // let data = await collection.find({}).toArray();
    
    // console.log(data)
}

// dbConnection().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.log(data);
//     })

// })


const main = async ()=>{
    let data = await dbConnection();
data= await data.find({}).toArray();
console.log(data)
}

main()
