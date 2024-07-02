console.log('hello ');

const path = require('path');
const express = require('express');
let static = path.join(__dirname, './views')
let err = path.join(__dirname, './views')
let app = express();
app.set('view engine', 'hbs')

app.use(express.static(static));
app.use(express.static(err));
app.get('/', (req, res) => {
    res.render('index')
})

app.get('*', (req, res) => {
    res.render('err')
})

app.listen(5000, () => {
    console.log('completed');

})