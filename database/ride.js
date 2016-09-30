var knex = require('./config');

// Ride Queries
function getRides(){
  return knex('ride');
}

function addRide(car_id, mountain_id, departure_date, departure_time, return_date, return_time, seats_avail, cost_seat, meetup_loc){
  return knex('ride').insert({car_id: car_id, mountain_id: mountain_id, departure_date: departure_date, departure_time: departure_time, return_date: return_date, return_time: return_time, seats_avail: seats_avail, cost_seat: cost_seat, meetup_loc: meetup_loc, pickup: false});
}

function updateRide(rideID, car_id, mountain_id, departure_date, departure_time, return_date, return_time, seats_avail, cost_seat, meetup_loc){
  return knex('ride').where('id', rideID).update({car_id: car_id, mountain_id: mountain_id, departure_date: departure_date, departure_time: departure_time, return_date: return_date, return_time: return_time, seats_avail: seats_avail, cost_seat: cost_seat, meetup_loc: meetup_loc, pickup: false});
}

function getRideData(){
  return knex('ride').select('ride.id AS rideID','ride.seats_avail', 'ride.cost_seat', 'ride.departure_time','ride.departure_date', 'ride.return_time','ride.return_date', 'ride.meetup_loc', 'mountain.name','mountain.id AS mountainID','mountain.image_url AS mountain_image','users.username','users.image_url', 'ride.car_id').innerJoin('mountain','mountain.id','ride.mountain_id').innerJoin('car_user','car_user.car_id','ride.car_id').innerJoin('users','users.id','car_user.user_id').orderBy('ride.departure_time','asc');
}

function getCarDataByRideID(rideID){
  return knex('ride').innerJoin('car_user','car_user.car_id','ride.car_id').innerJoin('car','car.id','car_user.car_id').innerJoin('drive','car.drive_id','drive.id').where('ride.id',rideID);
}

function getRideDataByRideID(rideID){
  return getRideData().where('ride.id',rideID);
}

function getRideDataByUserID(userID){
  return getRideData().where('users.id',userID);
}

// function getRideDataByUserRideID(userID, rideID){
//   return getRideData().select('users.id AS userID').where({'users.id': userID, 'ride.id': rideID});
// }

function getRideDataByUserRideID(userID, rideID){
  return knex('rider').innerJoin('ride','ride.id','rider.ride_id').where({'rider.user_id': userID, 'rider.ride_id': rideID});
}

function getRideDataLimitThree(){
  return getRideData().limit(3);
}

function getRideDataByMountainId(id){
  return getRideData().where('mountain_id',id);
}

function getDriverRatingByRideID(rideID){
  return knex('ride').avg('rating').innerJoin('car_user','car_user.user_id','ride.car_id').innerJoin('users','car_user.user_id','users.id').innerJoin('rating_driver','rating_driver.user_id','users.id').where('ride.id',rideID).first();
}

function deleteRide(rideID){
  return knex('ride').where('ride.id',rideID).del();
}

function deleteRiderInRide(rideID,userID){
  return knex('rider').where({'ride_id': rideID, 'user_id': userID}).del();
}

module.exports = {
  getRides: getRides,
  addRide: addRide,
  updateRide: updateRide,
  getRideData: getRideData,
  getCarDataByRideID: getCarDataByRideID,
  getRideDataByRideID: getRideDataByRideID,
  getRideDataByUserID: getRideDataByUserID,
  getRideDataByUserRideID: getRideDataByUserRideID,
  getRideDataLimitThree: getRideDataLimitThree,
  getRideDataByMountainId: getRideDataByMountainId,
  getDriverRatingByRideID: getDriverRatingByRideID,
  deleteRide: deleteRide,
  deleteRiderInRide: deleteRiderInRide
};
