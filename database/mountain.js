var knex = require('./config');

// Mountains Queries
function findMountains(){
  return knex('mountain');
}

function findOptionsForRideOffer(){
  return knex('mountain').leftJoin('ride', 'ride.id', 'mountain.id');
}

function findMountainsById(id){
  return findMountains().where('id',id);
}

// Weather Icon Queries

function getAllIcons(){
  return knex('icons');
}

module.exports = {
  findMountains: findMountains,
  findOptionsForRideOffer: findOptionsForRideOffer,
  findMountainsById: findMountainsById,
  getAllIcons: getAllIcons
};
