import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors({credentials:true, origin: true}));

app.use(express.urlencoded({extended:false}));
app.use(express.json())

routes(app);

const port = process.env.PORT || 5000

app.listen(port, ()=> console.log('Server is up and running on PORT:',port));