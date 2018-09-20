const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


async function signup(parents,{password, ...restArgs},ctx,info){

  const hashedPassword = await bcrypt.hash(password,10);

  const user = await ctx.db.mutation.createUser({
      data:{
        ...restArgs,
        password:hashedPassword
      }
    },`{id email}`)
  const token = jwt.sign({ userId:user.id}, process.env.APP_SECRET);
  return {
    token,
    user
  }
}

async function login(parents, {email,password}, ctx,info){
  const user = await ctx.db.query.user({where:{email}}, `{password id email name}`)

  if(!user) throw new Error('user not found')
  const res = await bcrypt.compare(password,user.password)
  if(!res) throw new Error('password not match');
  const token = jwt.sign({ userId:user.id}, process.env.APP_SECRET);
  const newUser = {
    email:user.email,
    id:user.id
  }
  return {
    token,
    user:newUser
  }
}


module.exports = {
  signup,
  login
}
