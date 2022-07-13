const express = require('express')
const app = express();
app.get('/',(req,res) => {
   res.send('hello')
})
const users = [
    {
        id:1,
        name:"mi"
    },
    {
        id:2,
        name:"iphone"
    },
]
app.get('/users',(req,res)=>{
    res.json(users)
})
app.get('/users/:id',(req,res)=>{
    const newData = users.filter(item =>item.id.toString() === req.params.id);
    return res.json(newData)
},
)
app.listen( process.env.PORT,()=> console.log('Server running...'));
