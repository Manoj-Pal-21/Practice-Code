const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectToMongoDB = require('./db/databseConnection');
const bookRoutes = require('./routes/book')
dotenv.config();
const PORT = process.env.PORT || 8080;


const app = express();
app.use(cors())

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', bookRoutes);

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`server is listern ${PORT}`)
})