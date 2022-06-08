const  SchemaUsers= new mongoose.Schema({
    nom: String,
    email:String,
    password:String,
    image: String,
    date:{type:Date, default:Date.now},
    reponse:[{ type:mongoose.Schema.ObjectId, ref:'reponse-ref' } ],
    message:[{ type:mongoose.Schema.ObjectId, ref:'message-ref' }]
  
  })
  
const  modelsMessage= new mongoose.Schema({
      message:{type: String, default:''},
      Date: {type:Date, default:Date.now},
      reponse:[{ type:mongoose.Schema.ObjectId, ref:'reponse-ref' }],
      Users: { type:mongoose.Schema.ObjectId, ref:"User-ref", childPath:"message" }
  })
  
  const  ModelReponse= new mongoose.Schema({
    reponse:{type: String, default:''},
    Date: {type:Date, default:Date.now},
    Users: { type:mongoose.Schema.ObjectId, ref:"User-ref", childPath:"reponse" },
    Messages: { type:mongoose.Schema.ObjectId, ref:"message-ref", childPath:"reponse" }
  
  })


exports.User= mongoose.model('User-ref',SchemaUsers) 
modelsMessage.plugin(relationship,{relationshipPathName:'Users' })
exports.Message=mongoose.model('message-ref',modelsMessage)

ModelReponse.plugin(relationship,{relationshipPathName:['Users','Messages']})
exports.Reponse=mongoose.model('reponse-ref',ModelReponse)

