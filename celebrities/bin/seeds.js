const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/celebrities');
const Celebrity = require('../models/celebrity');
const Movies = require('../models/movies');

const movies = [
  {
    title: 'Titanic',
    genre: "love",
    plot: 'un poco basurilla',
  },
  {
    title: 'Salvar al soldado Ryan',
    genre: "war",
    plot: 'Muy buena',
  },
  {
    title: 'Rambo',
    occupation: "war",
    plot: 'Un clasico',
  }
];

// Movie.create(movies, (err, docs) => {
//   if (err) { throw err };
//
//   docs.forEach( (movie) => {
//     console.log(movie.title)
//   })
//   mongoose.connection.close();
// });

Movies.create(movies, (err, docs) => {
  if (err) throw err;
  docs.forEach( (movies) => {
    console.log(movies.title);
  });
  mongoose.connection.close();
});

//
// const celebrities = [
//   {
//     name: 'Tom Cruise',
//     occupation: "actor",
//     catchPhrase: 'I´m Maverick',
//   },
//   {
//     name: 'Nadie',
//     occupation: "actor",
//     catchPhrase: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
//   },
//   {
//     name: 'Soylent',
//     occupation: "Hola",
//     catchPhrase: 'You never have to leave your computer! All you can eat nutrition!',
//   }
// ];
//
// Celebrity.create(celebrities, (err, docs) => {
//   if (err) { throw err };
//
//   docs.forEach( (celebrity) => {
//     console.log(celebrity.name)
//   })
//   mongoose.connection.close();
// });
