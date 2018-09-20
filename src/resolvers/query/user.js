

function user(parent,{email},ctx,info){
  return ctx.db.query.user({where:{email}}, `{id email name}`)
}
function users(parent,args,ctx,info){
  return ctx.db.query.users({}, `{id email name}`)
}


module.exports = {
  user,
  users
}
