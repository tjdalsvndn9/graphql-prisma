

function games(parent,{filter,skip,first,orderBy},ctx,info){
  let where = filter ?
  {
    OR: [
      {name_contains: filter}
    ]
  } : {};
  return ctx.db.query.games({where,skip,first,orderBy},info);
}
function game(parent,{id},ctx,info){
  return ctx.db.query.game({where:{id}},info)
}


module.exports = {
  games,
  game
}
