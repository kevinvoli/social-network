const {request,response} = require("express")

const ConnectionController= class {
    static getConnection= async(req=request, res = response, next)=>{
        res.render("connection")
    }
}
module.exports = ConnectionController