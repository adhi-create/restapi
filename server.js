const express = require('express')
const app = express();
app.get('/',(req,res) => {
   res.send('hello')
})
const products = [
    {
        id:1,
        name:"mi"
    },
    {
        id:2,
        name:"iphone"
    },
]
app.get('/products',(req,res)=>{
    res.json(products)
})
app.get('/products/:id',(req,res)=>{
    const newData = products.filter(item =>item.id.toString() === req.params.id);
    return res.json(newData)
},
)
app.listen(5000,()=> console.log('Server running...'));
