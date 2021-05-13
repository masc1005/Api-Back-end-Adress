import { Request, Response, Router } from 'express'

import userController from './app/controller/userController'

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

routes.get('/user', userController.allUsers)
routes.post('/user', userController.Register)

export default routes