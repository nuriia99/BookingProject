import express from 'express'
import { getHotels, getHotel, createHotel, updateHotel, deleteHotel } from '../controllers/hotels.js'
import { verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router()

router.get('/', verifyAdmin, getHotels)

router.get('/:id', getHotel)

router.post('/', createHotel)

router.put('/:id', verifyAdmin, updateHotel)

router.delete('/:id', verifyAdmin, deleteHotel)

export default router
