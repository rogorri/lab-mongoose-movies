
const express = require('express');
const router = express.Router();
const Movies = require('../models/movies');



//--Render the list of Movies--//
router.get('/', (req, res, next) => {
  Movies.find({}, (error, movies) => {
    if (error) {
      next(error);
    } else {
      res.render('movies/index', {movies});
    }
  });
});


router.get('/:id', (req, res, next) => {
   Movies.findById(req.params.id, (err, movie) => {
     if (err){
       next(err);
     } else {
       res.render('movies/show', {movie});
     }
   });
});


router.get('/new', (req, res) => {
  res.render('movies/new');
});


router.post('/', (req, res, next)=> {
    let newmovie = {
      title : req.body.title,
      genre : req.body.genre,
      plot  : req.body.plot
    };
Movies.create(newmovie, (err,doc)=>{
      if (err){
        res.redirect('/movies/new');
      } else{
        res.redirect('/movies');
      }
    });
  });


router.post('/:id/delete', (req, res, next) => {
      Movies.findByIdAndRemove(req.params.id, (err, movie) => {
        if (err){
          return next(err); }
        return res.redirect('/movies');
      });
    });

router.get('/:id/edit', (req, res, next) => {
  Movies.findById(req.params.id, (err, movie) => {
    if (err) {
      next(err);
    } else {
      res.render('movies/edit' , {movie});
    }
  });
});

router.post('/:id', (req, res, next)=>{
    let movietoUpdate = {
      title       : req.body.title,
      genre       : req.body.genre,
      plot        : req.body.plot
      };
    Movies.findByIdAndUpdate(req.params.id, movietoUpdate, (err, movie)=>{
      if (err){
        next(err);
      } else {
        res.redirect('/movies');
      }
    });
});


module.exports = router;
