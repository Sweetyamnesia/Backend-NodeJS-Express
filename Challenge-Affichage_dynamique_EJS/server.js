const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views')); // Définir le répertoire des vues

app.get('/users', (req, res) => {
    const users = [{ name: 'John', user_name: '@JohnCarter'}, { name: 'Jane', user_name: '@JaneCarter'}, { name: 'Jack', user_name: '@JackCarter'}, { name: 'Patrick', user_name: '@PatrickCarter'} ];
    console.log(users);
    res.render('index', { title: 'I am an EJS Expert', users: users });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});