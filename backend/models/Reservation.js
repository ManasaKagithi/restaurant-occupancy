import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  tableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table'
  },
  time: Date
})

export default mongoose.model('Reservation', reservationSchema)
