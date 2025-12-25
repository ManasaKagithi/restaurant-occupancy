import express from 'express'
import { createReservation, getReservations } from '../controllers/reservationController.js'

const router = express.Router()
router.get('/', getReservations)
router.post('/', createReservation)

export default router
