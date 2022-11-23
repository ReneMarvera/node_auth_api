const express       = require('express');
const mongoose      = require('mongoose');
require('dotenv').config();

// Local Files
const quotes        = require('./quotes.json');
const userRouter    = require('./routes/userRoutes');
const noteRouter    = require('./routes/noteRoutes');

// Others
const port      = process.env.PORT || 9000;

// Context
const app = express();
app.use(express.json());


// MongoDb Atlas Connection
mongoose
.connect(process.env.MONGODB_URI)
.then( () => {
    console.log('connected to mongodb atlas!')
    app.listen(port, () => console.log('server listening on port',port));
})
.catch( error => console.log(error) );

//Routes
app.use('/users',userRouter);
app.use('/notes',noteRouter);

app.get('/',(req,res) => { res.send('¡Hola Planeta!'); });
app.get('/quotes', (req,res) => { res.status(200).json(quotes) });
app.get('/quotes-random/', (req,res) =>
{
    const index = Math.floor( Math.random() * quotes.length );
    const quote = quotes[index];
    res.status(200).json(quote);
});