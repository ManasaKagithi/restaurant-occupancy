import mongoose from 'mongoose'
const ReservationSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  contact: { type: String, required: true },
  date: { type: String, required: true },      // ISO date string
  time: { type: String, required: true },      // HH:mm
  partySize: { type: Number, required: true },
  preferences: {
    section: { type: String, enum: ['indoor', 'outdoor'] },
    smoking: { type: Boolean, default: false },
    vegSection: { type: Boolean, default: false }
  },
  status: { type: String, enum: ['pending', 'confirmed', 'rejected'], default: 'pending' },
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' }
}, { timestamps: true })
export default mongoose.model('Reservation', ReservationSchema)
