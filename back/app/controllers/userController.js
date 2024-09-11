import bcrypt from 'bcrypt';
import { User } from '../models/Index.js'


export async function registerUser(req, res) {

  const { password } = req.body


  const hashedPassword = await bcrypt.hash(password, 10)
  res.send(hashedPassword)

  // stocker en db et compare 

}