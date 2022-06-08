var jwtUtils= require('../utils/jwt.utils')
var express = require('express');
var router = express.Router();
router.post('/',async(req,res,next)=>{
  console.log(req.body)
  if (req.body.formId===undefined) {
    upload(req,res,(err)=>{
      if(err){
       console.log(err)
       res.send(err)
      }else{
        console.log("le fichier est :", req.file.path)
        let user= new models.User({nom:req.body.nom,email:req.body.email,password:req.body.password,image:req.file.path}).save()
       res.render('index')
    }
    })
  } else {
    if (req.body.formId==="1") {
      console.log(req.body)
      
    
    } else if (req.body.formId==="3") {
      console.log(req.body.formId)
      if (req.session.user===undefined){
        req.session.error='vous devez vous enregistre avant de poste ou de repondre a un message'
        res.redirect('/')
      }else{
        console.log("envoie du dela Reponse GGGG ", req.body.id)
        let newReponse=await new models.Reponse({message:req.body.id,reponse:req.body.reponse,Users:req.session.user._id })
        let reponseId= newReponse._id
        newReponse.save() 
        models.User.update({_id:req.session.user._id}, {$push :{reponse: reponseId} },(err,obj)=>{
  
        })
        models.Message.update({_id:req.body.id}, {$push :{reponse: reponseId} },(err,obj)=>{
        
        })

        console.log("envoie du message ", req.session.user)
        return res.redirect('/')
      }
    }
    else {
      if (req.session.user===undefined){
        req.session.error='vous devez vous enregistre avant de poste ou de repondre a un message'
        res.redirect('/')
      }else{
        console.log("envoie du message ", req.session.user._id)
       let newMessage=await new models.Message({message:req.body.messages,Users:req.session.user._id })
       let messageId= newMessage._id
       newMessage.save() 
        models.User.update({_id:req.session.user._id}, {$push :{message: messageId} },(err,obj)=>{
          console.log('les message ss',obj)
        })

        console.log("envoie du message ", req.session.user)
        return res.redirect('/')
      }
    } 
  }
}) 
module.exports=router