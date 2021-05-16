import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import AdressModel from '../models/Adress'

class UserController {

  async allAdress(req: Request, res: Response){

    try {

      const adressRepository = getRepository(AdressModel)
      const showAdress = await adressRepository.find()

      return res.json({ showAdress }).status(200)
      
    } catch (error) {
      console.log(error)
    }

  }

  async Register(req: Request, res: Response) {

    try {

      const adressRepository = getRepository(AdressModel)

      const { adress, number, complement, cep, city, state } = req.body

      const saveAdress = adressRepository.create({adress, number, complement, cep, city, state})
      await adressRepository.save(saveAdress)

      return res.json(saveAdress).status

    } catch (error) {
      console.log(error)
    }
  }

  async Update(req: Request, res: Response){

    try {

      const adressRepository = getRepository(AdressModel)

      const { adress, number, complement, cep, city, state } = req.body

      const data = {
        adress,
        complement,
        city,
        state
      }
      
      await adressRepository.update({number, cep}, data).then(() => { res.json("updated") })

    } catch (error) {
      console.log(error)
    }
  
  }

  async Delete(req: Request, res: Response){

    try {

      const adressRepository = getRepository(AdressModel)

      const { number, cep } = req.body

      const deleteAdress = await adressRepository.findOne({ where: { number, cep } })

      await adressRepository.delete(deleteAdress)

      res.json("droped")

    } catch (error) {
      console.log(error)
    }

  }

}


export default new UserController()