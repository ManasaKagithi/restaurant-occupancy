import { Router } from 'express'
import Reservation from '../models/Reservation.js'
const router = Router()

router.get('/', async (req, res) => {
  const reservations = await Reservation.find().sort({ createdAt: -1 })
  res.json(reservations)
})

router.post('/', async (req, res) => {
  const reservation = await Reservation.create(req.body)
  res.status(201).json(reservation)
})

router.patch('/:id/status', async (req, res) => {
  const { status } = req.body
  const reservation = await Reservation.findByIdAndUpdate(req.params.id, { status }, { new: true })
  res.json(reservation)
})

export default router
