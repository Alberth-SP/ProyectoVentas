import express from 'express';
import morgan from 'morgan';
import router from './routes/app.js'

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

//database

import pool from './settings/db.js'

const app = express();
//configurando cabecera de cors
const corsOptions = {
    origin: 'http.example.com',
    optionSuccessStatus: 200
}


//definimos los middleware
app.use(morgan('dev'));

// definimos las rutas 


app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}))


app.use('/api', cors(corsOptions) ,router);


//Definimos la ruta de los archivos publicos
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));



app.set('port', process.env.PORT || 3000) // establecemos el puerto del servidor o uno por defecto

app.listen(app.get('port'), () => {
    console.log("Server running on port: ", app.get('port'))
})
