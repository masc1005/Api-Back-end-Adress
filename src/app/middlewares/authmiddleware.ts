import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

interface tokenData {
  id: string
  iat: number
  exp: number
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  
  const { authorization } = req.headers

  if(!authorization){
    return res.sendStatus(201)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {

    const data = jwt.verify(token, process.env.JWT_SECRET)

    const { id } = data as tokenData

    req.authId = id

    return next()

  } catch (error) {
    return console.log(error)
  }

}