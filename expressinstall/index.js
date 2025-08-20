let express = require("express");
const { engine } = require("express/lib/application");
let app = express();
require("dotenv").config();
app.use(express.json());
// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });




let token = (req, res, next) => {

    if (req.query.process.env.mytoken == "" || req.query.process.env.mytoken == undefined) {
        return res.send({
            status: "1",
            msg: "the token is required"
        })
    }

    if (req.query.token != process.env.mytoken) {
        res.send({
            status: "0",
            message: "Invalid token"
        });
    }

    next();
}

app.use(token);


//dynamic id get to found by clicking on the link
app.get("/about", process.env.mytoken, (req, res) => {
    res.send({
        status: "1",
        message: "About Page"
    });
});
// app.get("/dataget/:id", (req, res) => {
//     const id = req.params.id;
//     res.send({
//         status: "1",
//         message: "Data retrieved successfully",
//         data: { "the user id is": id }
//     });
// });



// app.post("/datapost", (req, res) => {
//     console.log(req.body);
//     res.send({
//         status: "1", message: "Data received successfully",
//         data: req.body,
//         dataFormate: req.query
//     });
// });

app.listen(3000);