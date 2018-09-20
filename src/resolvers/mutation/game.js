const {getUserId} = require('../../utils');

function createGame(parent, args, ctx,info){
  const userId = getUserId(ctx)
  return ctx.db.mutation.createGame({
    data:{
      ...args,
      postedBy:{
        connect:{
          id:userId
        }
      }
    }
  },info)
}

function updateGame(parent,args,ctx,info){
  const {id, ...restArgs} = args;
  return ctx.db.mutation.updateGame({
    data:{
      ...restArgs
    },
    where:{id}
  }, info)
}

function deleteGame(parent,{id},ctx,info){
  return  ctx.db.mutation.deleteGame({
    where:{id}
  },info)
}

module.exports = {
  createGame,
  updateGame,
  deleteGame
}
