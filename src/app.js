const express = require('express');
const conn = require('./db/conn');
const oleo = require('./models/oleo');

const port = process.env.PORT || 3000;

const app = express();



app.set('view engine', 'ejs');
app.set('views','./views');

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

