const router = require('express').Router();
const sequelize = require('../config/config');
const { Post, User, Comment } = require('../models');

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/', (req, res) => {
    res.render('homepage', {
      id: 1,
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'Handlebars Docs',
      created_at: new Date(),
      comments: [{}, {}],
      user: {
        username: 'test_user'
      }
    });
  });

module.exports = router;