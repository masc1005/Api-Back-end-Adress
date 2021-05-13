import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import UserModel from '../models/Users'

class UserController {

  async allUsers(req: Request, res: Response){

    try {

      const userRepository = getRepository(UserModel)
      const showUsers = await userRepository.find()

      return res.json({ showUsers }).status(200)
      
    } catch (error) {
      console.log(error)
    }

  }

  async Register(req: Request, res: Response) {

    try {
      const userRepository = getRepository(UserModel)

      const { name, phone, email, idade, peso, etnia } = req.body

      const userExist = await userRepository.findOne({ where : { email } })
      
      if (userExist){
        res.sendStatus(409)
      }

      const saveUser = userRepository.create({ name, phone, email, idade, peso, etnia})
      await userRepository.save(saveUser)

      return res.json(saveUser)

    } catch (error) {
      console.log(error)
    }
  }

}

export default new UserController()