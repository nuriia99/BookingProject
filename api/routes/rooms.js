import express from 'express'
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from '../controllers/rooms.js'
import { verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router()

router.get('/', verifyAdmin, getRooms)

router.get('/:roomId', getRoom)

router.post('/:hotelId', createRoom)

router.put('/:roomId', verifyAdmin, updateRoom)

router.delete('/:hotelId/:roomId', verifyAdmin, deleteRoom)

export default router
