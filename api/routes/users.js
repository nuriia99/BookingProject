import express from 'express'
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/Users.js'
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router()

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('Hello user, you are logged!')
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('Hello user, you can delete your own account!')
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Hello admin, you can delete all accounts!')
// })

router.get('/', getUsers)

router.get('/:id', getUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router
