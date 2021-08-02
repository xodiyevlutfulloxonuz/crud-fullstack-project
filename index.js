const express=require('express')
const app=express()
const mongoose=require('mongoose')
const Router=require('./routes/main')
const Todo=require('./routes/todo')
const PORT=3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))
app.set('view engine','ejs')

app.use(Router.path, Router.router)
app.use(Todo.path, Todo.router)

//connect mongodb 
mongoose.connect('mongodb://localhost/crudproject',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})




app.listen(PORT,()=>{
    console.log(` Server is running at ${PORT}`)
})
