import mongoose from 'mongoose' 
const OccupancyLogSchema = new mongoose.Schema({ 
    tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' }, 
    status: { type: String, enum: ['available', 'occupied'], required: true }, 
    updatedBy: { type: String, enum: ['admin', 'system'], default: 'admin' }, 
    timestamp: { type: Date, default: Date.now }
 }) 
 export default mongoose.model('OccupancyLog', OccupancyLogSchema)