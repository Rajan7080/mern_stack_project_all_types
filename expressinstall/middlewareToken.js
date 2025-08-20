
letmytoken = "123456";
let checkToken = (req, res, next) => {
    if (req.query.mytoken == "" || req.query.mytoken == undefined) {
        return res.send({
            status: "1",
            msg: "the token is required"
        })
    }

    if (req.query.mytoken != mytoken) {
        res.send({
            status: "0",
            message: "Invalid token"
        });
    }

    next();
}
module.exports = checkToken();