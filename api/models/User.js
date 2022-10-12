import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    requiered: true,
    unique: true
  },
  email: {
    type: String,
    requiered: true,
    unique: true
  },
  password: {
    type: String,
    requiered: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)
