let http = require("http");
let server = http.createServer((req, res) => {
    // res.end("Hello World");
    if (req.url === "/news") {

        let obj = {
            status: "success",
            data: [
                {
                    title: "News 1",
                    description: "Description of News 1"
                }
            ]
        }
        res.end(JSON.stringify(obj));
    }
})
server.listen("3000")