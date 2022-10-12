import jwt from 'jsonwebtoken'
import { handleError } from './errors.js'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) {
    return next(handleError(401, 'You are not authenticated.'))
  }

  jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) return next(handleError(403, 'Token is not valid.'))
    req.user = user
    next()
  })
}

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      return next(handleError(403, 'You are not authorized!'))
    }
  })
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user)
    if (req.user.isAdmin) {
      next()
    } else {
      return next(handleError(403, 'You are not authorized!'))
    }
  })
}
