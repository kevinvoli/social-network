const {request,response} = require("express")

const InscriptionCOntroller= class {
    static getInscription= async(req=request, res = response, next)=>{
        
        res.render("inscription")
    }
    static setInscription= async(req=request,res= response,next)=>{
        console.log(req.body);
        res.redirect("inscription")
    }
}

module.exports = InscriptionCOntroller