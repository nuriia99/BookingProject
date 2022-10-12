import User from '../models/User.js'

export const getUsers = async (req, res, next) => {
  try {
    const getUsers = await User.find()
    res.status(200).json(getUsers)
  } catch (error) {
    next(error)
  }
}
