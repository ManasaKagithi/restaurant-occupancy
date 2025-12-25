import Reservation from '../models/Reservation.js'

export const createReservation = async (req, res) => {
  const { name, email, phone, tableId, time } = req.body
  const reservation = new Reservation({ name, email, phone, tableId, time })
  await reservation.save()
  res.status(201).json(reservation)
}

export const getReservations = async (req, res) => {
  const reservations = await Reservation.find().populate('tableId')
  res.json(reservations)
}
