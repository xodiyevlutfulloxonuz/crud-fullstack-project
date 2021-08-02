const router=require('express').Router()
const DB=require('../models/Todo')

router.post('/add/todo',(req,res)=>{
    const {todo}=req.body
    const newTodo= new DB({todo:todo})

    newTodo.save()
    .then(()=>{
        console.log("saved")
        res.redirect('/')
    })
})
router.get('/delete/todo/:_id',(req,res)=>{
   const {_id}=req.params   
   DB.deleteOne({_id})
   .then(()=>{
       console.log("deleted")
       res.redirect('/')
   })
})

module.exports={
    path:'/',
    router:router
}
