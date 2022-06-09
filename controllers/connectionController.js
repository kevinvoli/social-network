const {request,response} = require("express")

const ConnectionController= class {
    static getConnection= async(req=request, res = response, next)=>{
        res.render("connection")
    }
    static setConnection = async(req= request, res= response)=>{
        console.log(req.body);
        res.redirect('/connection')
    }
}
module.exports = ConnectionController