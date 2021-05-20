import express from 'express';

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.get('/',(req,res)=>{
    res.send({message:"Welcome to my Todo App"});
})

const port = process.env.PORT || 5000

app.listen(port, ()=> console.log('Server is up and running on PORT:',port));