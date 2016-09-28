var knex = require('./config');

function findRidersByRideID(ride_id){
  return knex('rider').innerJoin('users','users.id','rider.user_id').where('ride_id',ride_id);
}

function addRiderToRide(ride_id, user_id){
  return knex('rider').insert({ride_id:ride_id, user_id:user_id});
}

module.exports = {
  findRidersByRideID: findRidersByRideID,
  addRiderToRide: addRiderToRide
};
