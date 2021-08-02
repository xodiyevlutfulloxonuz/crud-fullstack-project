const router=require('express').Router()
const DB=require('../models/Todo')
router.get('/', async (req,res)=>{
    const allTodo=await DB.find({})
    res.render("index",{
        todos:allTodo
    })
})

module.exports={
    path:'/',
    router:router
}