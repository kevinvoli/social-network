
exports.SchemaUsers= new mongoose.Schema({
  nom: String,
  email:String,
  password:String,
  image: String,
  date:{type:Date, default:Date.now},
  reponse:[{ type:mongoose.Schema.ObjectId, ref:'reponse-ref' } ],
  message:[{ type:mongoose.Schema.ObjectId, ref:'message-ref' }]

})

exports.modelsMessage= new mongoose.Schema({
    message:{type: String, default:''},
    Date: {type:Date, default:Date.now},
    reponse:[{ type:mongoose.Schema.ObjectId, ref:'reponse-ref' }],
    Users: { type:mongoose.Schema.ObjectId, ref:"User-ref", childPath:"message" }
})
exports.ModelReponse= new mongoose.Schema({
  reponse:{type: String, default:''},
  Date: {type:Date, default:Date.now},
  Users: { type:mongoose.Schema.ObjectId, ref:"User-ref", childPath:"reponse" },
  Messages: { type:mongoose.Schema.ObjectId, ref:"message-ref", childPath:"reponse" }

})