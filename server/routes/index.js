import auth from '../controllers/authController';
import customMiddleWare from  '../middleware/auth';
export const routes = (app) => {
    app.get('/', (req, res) => res.send({
        message: "Welcome to my Todo backend"
    }
    ))
    app.post('/server/auth/signup',customMiddleWare, auth.signUp);
    app.post('/server/auth/signin',auth.signIn);
};


