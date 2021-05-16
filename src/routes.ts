import { Request, Response, Router } from 'express'

import userController from './app/controller/userController'
import adressController from './app/controller/adressController'

const routes = Router()

// routes.get('/', (req: Request, res: Response ) => {
//   res.send("Olá get!!")
// })
// routes.post('/', (req: Request, res: Response ) => {
//   res.send("Olá post!!")
// })
// routes.put('/', (req: Request, res: Response ) => {
//   res.send("Olá put!!")
// })
// routes.delete('/', (req: Request, res: Response ) => {
//   res.send("Olá delete!!")
// })

// user routes
routes.get('/user', userController.allUsers)
routes.post('/user', userController.Register)
routes.put('/user', userController.Update)
routes.delete('/user', userController.Delete)

// adress routes
routes.get('/adress', adressController.allAdress)
routes.post('/adress', adressController.Register)
routes.put('/adress', adressController.Update)
routes.delete('/adress', adressController.Delete)

export default routes