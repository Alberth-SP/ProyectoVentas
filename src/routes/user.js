import routerx from 'express-promise-router';
import controllers from '../controllers/User.js';


const app = routerx();


app.post('/add', controllers.add);
app.get('/list', controllers.list)
app.post('/login', controllers.login);
export default app;

