const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.render('index')
})


app.post('/formulaire', (req, res) => {
    console.log('Request body : ', req.body);
    res.redirect('/')
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})