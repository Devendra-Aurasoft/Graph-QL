import mongoose from 'mongoose';
import {URI} from './config.js'
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Data base connected SuccessFuly");
}).catch(error => {
    console.log(error);
})