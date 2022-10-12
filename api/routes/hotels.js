import express from 'express'
import { getHotels, getHotel, createHotel, updateHotel, deleteHotel } from '../controllers/hotels.js'
const router = express.Router()

router.get('/', getHotels)

router.get('/:id', getHotel)

router.post('/', createHotel)

router.put('/:id', updateHotel)

router.delete('/:id', deleteHotel)

export default router
