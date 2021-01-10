const expres = require('express');
const app = expres();
app.set('view engine', 'pug');

app.get('/', (req, res) => 
{
    res.render('den');
});

app.listen(3000);