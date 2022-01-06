import mongoose from 'mongoose';
import { database  } from './keys.js';


const conn = mongoose.connect(database, {

    useNewUrlParser: true,
    useUnifiedTopology: true
   
})
.then( data => console.log("connect to database "))
.catch( err => console.log(err))

export default conn;
