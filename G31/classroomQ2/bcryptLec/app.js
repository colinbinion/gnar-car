const bcrypt = require('bcrypt');
//this causes code to break until you actually set up knex
//const user = require('../db/user');
//pass rounds to genSalt
//bcrypt.genSalt(10, (err, salt)) => {
  //bcrypt.hash('hello', salt, (err, hash) => {
    //user('user').insert({password: hash});
//   });
// });
//use knex to pass the compare with insert
bcrypt.compare('the simpsons', '$2a$10$LmGj99ASy7Hx79HHXhBZ/uLtWJ9wXVOJ1zhvsLXfKtycTuU9VQWze', (err, isMatch) => {
  console.log('isMatch: ', isMatch);
})
