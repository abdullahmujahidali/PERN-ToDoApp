/**
 * Our main file which is executed (server side) here express is used for multi purpose for instance here it is being used
 * for routing at backend 
 * cors is used to allow our frontend and backend to communicate 
 * here we register all our routes and declare our port oon which our backend is running.
 */
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