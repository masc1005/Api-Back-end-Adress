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

      function validateEmail(email: string) {
        var validateEmail = /\S+@\S+\.\S+/;
        return validateEmail.test(email);
      }
          
      (validateEmail(email))

      if((validateEmail(email))){
        const userExist = await userRepository.findOne({ where : { email } })      
      
        if (userExist){
          res.sendStatus(409)
        }

        const saveUser = userRepository.create({ name, phone, email, idade, peso, etnia })
        await userRepository.save(saveUser)

        return res.json(saveUser)
      }

      return res.json('invalid mail')

    } catch (error) {
      console.log(error)
    }
  }

  async Update(req: Request, res: Response){

    try {

      const userRepository = getRepository(UserModel)

      const { name, phone, email, idade, peso, etnia } = req.body

      const data = {
        name,
        phone,
        idade, 
        peso,
        etnia
      }
      res.json("updated")
      await userRepository.update({ email }, data).then(() => { res.json("updated") })

    } catch (error) {
      console.log(error)
    }
  
  }

  async Delete(req: Request, res: Response){

    try {

      const userRepository = getRepository(UserModel)

      const { email } = req.body

      const deleteUser = await userRepository.findOne({ where: { email } })

      await userRepository.delete(deleteUser)

      res.json("droped")

    } catch (error) {
      console.log(error)
    }

  }

}


export default new UserController()