import routerx from 'express-promise-router';
import controllers from '../controllers/Articulo.js'

const app = routerx();
//definimos las rutas para get put post delete  y la logica la definimos en un controlador
//post 
//add article
app.post('/add', controllers.add );

app.get('/list', controllers.list );

app.get('/queryCode', controllers.queryCode)


//put: actualizar y activar y desactivar

//app.put('/update',);
app.put('/activate', controllers.activate);
//app.put('/desactivate', controllers.desactivate);
app.put('/desactivate', controllers.desactivate);
// delete: para eliminar

app.delete('/delete', controllers.remove);

export default app;