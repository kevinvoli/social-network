const models = require('../models/index')


const UserQuery= class{
    static setUser=(data)=>{
        let User = models.User(data)
        .then(result=>{
            return result
        })
        .catch(error=>{
            
        })
    }
}