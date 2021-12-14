const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers');
const path = require('path');



const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.use(routes);
app.set('view engine', 'handlebars');
app.listen(PORT, () => console.log('Now listening'));