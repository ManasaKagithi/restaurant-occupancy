import mongoose from 'mongoose'

const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true, unique: true },
  capacity: { type: Number, required: true },
  status: {
    type: String,
    enum: ['available', 'reserved', 'occupied'],
    default: 'available'
  },
  lastUpdatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('Table', tableSchema)
