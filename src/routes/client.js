import routerx from 'express-promise-router';

import controllers from '../controllers/Client.js';
const app = routerx();

app.post('/add', controllers.add);
app.get('/list', controllers.list);
export default app;