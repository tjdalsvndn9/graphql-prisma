const {games,game} = require('./game');
const user = require('./user');

const Query = {
  games,
  game,
  ...user
}


module.exports = Query
