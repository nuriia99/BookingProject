import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'
// import { handleError } from '../utils/errors.js'

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hetelid
  const newRoom = new Room(req.body)

  try {
    const savedRoom = await newRoom.save()
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
    } catch (error) {
      next(error)
    }
    res.status(200).json(savedRoom)
  } catch (error) {
    next(error)
  }
}
