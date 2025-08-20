const { MongoClient } = require("mongodb");
let uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

const dbconnect = async () => {
    await client.connect();
    let dbo = client.db("mydatabase");
    return dbo;
}
module.exports = { dbconnect };