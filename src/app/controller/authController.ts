import { NextFunction, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import jwt from 'jsonwebtoken'

import UserModel from '../models/Users'

class AuthController {

  async Index(req: Request, res: Response, next: NextFunction){
    
    const userRespository = getRepository(UserModel)

    const id = req.authId

    const idExists = userRespository.findOne({where: { id }})

    if(!idExists){
      res.sendStatus(409)
    }

    return console.log('passed'), next()
  }

  async Authenticate(req: Request, res: Response){

    const userRespository = getRepository(UserModel)

    const { email, phone } = req.body

    const userAuth = await userRespository.findOne({where: { email, phone }})

    if(!userAuth){
      return res.sendStatus(401)
    }

    const token = jwt.sign({ id: userAuth.id}, process.env.JWT_SECRET, {expiresIn: '1d'})

    return res.json({
      userAuth, token
    })

  }


}

export default new AuthController()