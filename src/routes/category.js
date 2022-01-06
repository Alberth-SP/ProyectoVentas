import routerx from 'express-promise-router';
import controllers from '../controllers/Category.js';
const app = routerx();


app.post('/add', controllers.add);

app.get('/list', controllers.list);
app.get('/queryCode', controllers.queryCode);


app.put('/activate', controllers.activate);
app.put('/desactivate', controllers.desactivate);


app.delete('/remove', controllers.remove);

export default app;