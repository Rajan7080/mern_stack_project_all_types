let express = require("express");
const { dbconnect } = require("./dbconnection");
const { ObjectId } = require("mongodb");
let app = express();
app.use(express.json());

app.get("/get-user", async (req, res) => {
    let db = await dbconnect();
    let usersCollection = await db.collection("users");
    let users = await usersCollection.find({}).toArray();
    res.send({
        status: 1,
        msg: "Users fetched successfully",
        data: users
    });
});

app.post("/add-user", async (req, res) => {
    let db = await dbconnect();
    let usersCollection = db.collection("users");
    let { name, email } = req.body;
    let user = { name, email };
    //if we want to only insert name and email not use same type
    let checkemail = await usersCollection.findOne({ email });
    if (checkemail) {
        console.log(checkemail);
        return res.send({
            status: 0,
            msg: "Email already exists"
        });
    }
    //form here
    let result = await usersCollection.insertOne(user);
    res.send({
        status: 1,
        msg: "User added successfully",
        data: result
    });
});



app.delete("/delete-user/:id", async (req, res) => {
    const { id } = req.params;

    let db = await dbconnect();
    let usercollections = db.collection("users");
    let result = await usercollections.deleteOne({ _id: new ObjectId(id) });

    res.send({
        status: 1,
        msg: "User deleted successfully",
        data: result
    });
});

app.put("/update-user/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    //its works when we need updated only one field and other is not changes
    let obj = {}
    if (name !== "" && name !== undefined && name !== null
    ) {
        obj['name'] = name
    }
    if (email !== "" && email !== undefined && email !== null
    ) {
        obj['email'] = email
    }
    //form here
    let db = await dbconnect();
    let usercollections = db.collection("users");
    let result = await usercollections.updateOne({ _id: new ObjectId(id) }, { $set: obj });

    res.send({
        status: 1,
        msg: "User updated successfully",

        data: result
    });
})
app.listen(8000);


