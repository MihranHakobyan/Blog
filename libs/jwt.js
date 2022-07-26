const jwt=require('jsonwebtoken')
const config = require('../config/dbConfigs')

function generateToken(payload){
    const token=jwt.sign(payload,config.JWT_SECRET,{expiresIn: "1h"})
    return{
        token
    }
}
function validateToken(token) {
    try {
        return jwt.verify(token,config.JWT_SECRET)
    }catch (err){
        return null
    }
}
module.exports = {
    generateToken,
    validateToken
}