const express=require('express')
const UserRoute=require('./UserRoute')
const AuthRoute=require('./AuthRoute')
const PostRoute=require('./PostRoute')
const router=express.Router()


router.use('/user',UserRoute)
router.use('/auth',AuthRoute)
router.use('/post',PostRoute)
module.exports=router