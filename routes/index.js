var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', async(req, res, next) =>{
  let messages=await models.Message.find().populate('Users').populate('reponse').then(
    (obj)=>{

    return obj
  })
  let reponsess=await models.Reponse.find().populate('Messages').populate('Users').then((obj)=>{
    return obj
  })
  // console.log('les message ',messages)
  console.log('les message sss ',reponsess)

  if (req.session.user===undefined){
    res.render('index',{
      messages:messages
    });
  }else{
    res.setHeader('Content-Type', 'text/html')
    console.log('commence a bien passez  ',req.session)
    let users= req.session.user
    res.render('index',{utilisateur:users,token:req.session.token,messages:messages});
  }
  res.render('index');
});
module.exports = router;