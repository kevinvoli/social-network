const {request,response} = require("express")


const UserController = class {
    
    static getUser = async(req=request, res= response, next)=>{
        console.log("blalala")
        // let utilisateur= await models.User.findOne({nom:req.body.nom,password:req.body.password},(err,obj)=>{
        //     return obj
        //   })
          // console.log(utilisateur)
          // if (utilisateur===null) {
          //   console.log("pas d'utilisateur")
          //   res.redirect('/')
          // } else {
          //   console.log(req.session)
    
          //   req.session.user=utilisateur
          //   req.session.token= jwtUtils.generateTokenUser(utilisateur._id)
          //   user=req.session.user
          //    return res.redirect('/')
          // }

        // res.send('respond with a resource');
        res.redirect('/inscription')
    }
    static setUser = async(req=request, res=response,next)=>{

    }

}


module.exports = UserController