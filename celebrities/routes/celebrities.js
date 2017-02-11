var express = require('express');
var router = express.Router();
const Celebrity = require('../models/celebrity');


router.get('/', (req, res, next) => {
  Celebrity.find({}, (error, celebrities)=>{
    if (error) {
      next(error);
    } else {
      res.render('celebrities', { celebrity: celebrities });
    }
  });
});

router.get('/new', (req, res) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  let celebobj = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    };
    Celebrity.create(celebobj, (err,doc)=>{
      if (err){
        res.redirect('/celebrities/new');
      } else{
        res.redirect('/celebrities');
      }
    });
  });

router.post('/:id/delete', (req, res, next) => {
      Celebrity.findByIdAndRemove(req.params.id, (err, celebrity) => {
        if (err){
          return next(err); }
        return res.redirect('/celebrities');
      });
    });

router.get('/:id/edit', (req, res, next) =>{
      Celebrity.findById(req.params.id, (err, celebrity) => {
        if (err){
          next(err);
        } else {
            res.render('celebrities/edit', { celebrity: celebrity });
        }
      });
    });

router.post('/:id', (req, res, next)=>{
  let celebrityToUpdate = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(req.params.id, celebrityToUpdate, (err, celebrity)=>{
    if (err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});



router.get('/show/:id', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity)=>{
    if (err) {
      next(err);
    } else {
        res.render('celebrities/show', { celebrity: celebrity });
    }
  });
});


module.exports = router;
