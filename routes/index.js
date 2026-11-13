var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home', 
                      pageheader: 'Home Page'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home',
                      pageheader: 'Home Page'
   });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me',
                      pageheader: 'About Page'
   });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',
                      pageheader: 'Contact Page'
   });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',
                      pageheader: 'Projects Page'
   });
});

module.exports = router;
