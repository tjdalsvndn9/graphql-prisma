const game = require('./game');
const user = require('./user')

const Mutation = {
  ...game,
  ...user
}


module.exports = Mutation
