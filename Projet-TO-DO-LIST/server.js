const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', {tasks: tasks})
});

app.post('/formulaire', (req, res) => {
    console.log('Request body : ', req.body);
    tasks.push(req.body.champ);
    res.redirect('/');
});

app.post('/modify/:index', (req, res) => {
    const index = req.params.index;
    tasks.splice(req.params.index, 1, req.body.champ1);
    console.log(`'${index} was modified'`);
    res.redirect('/');
});

app.post('/delete/:index', (req, res) => { 
    const index = req.params.index;
    tasks.splice(index, 1);
    console.log(`'${req.body.champ}' was deleted`);
    res.redirect('/');
});
  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});