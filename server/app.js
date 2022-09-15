require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./routes/routes');



const app = express();
const port = process.env.PORT || 5000;


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('uploads'))
app.use('/app/api', route);


//DB Connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log('connected to database'))
.catch((err) => console.log(err))


app.listen(port, () => console.log( `server running at http://localhost:${port}`));