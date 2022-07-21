const express = require('express');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.set('view engine', 'pug');

app.get('/', (request, response) => {
    response.render("index");
});

app.get('/cards', (request, response) => {
    // response.locals.prompt = 'who is you?'
    // another way of doing the prompt right below
    response.render('card', {prompt: 'who is you?', colors});
});

app.listen(3000, () =>{
    console.log('running on port 3000');
});