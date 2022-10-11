import mongoose from 'mongoose'

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    requiered: true
  },
  type: {
    type: String,
    requiered: true
  },
  city: {
    type: String,
    requiered: true
  },
  address: {
    type: String,
    requiered: true
  },
  distance: {
    type: String,
    requiered: true
  },
  photos: {
    type: [String]
  },
  title: {
    type: String,
    requiered: true
  },
  description: {
    type: String,
    requiered: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  rooms: {
    type: [String],
    requiered: true
  },
  cheapestPrice: {
    type: Number,
    requiered: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('Hotel', HotelSchema)
