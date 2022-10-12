import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    requiered: true
  },
  price: {
    type: Number,
    requiered: true
  },
  description: {
    type: String,
    requiered: true
  },
  maxPeople: {
    type: Number,
    requiered: true
  },
  roomNumbers: [{
    number: Number,
    unavaiableDates: {
      type: [Date]
    }
  }]
}, { timestamps: true })

export default mongoose.model('Room', RoomSchema)
