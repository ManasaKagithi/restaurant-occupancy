import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import tableRoutes from './routes/tableRoutes.js'

dotenv.config()
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/tables', tableRoutes)

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() })
})

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(process.env.PORT || 4000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 4000}`)
    )
  })
  .catch(err => console.error('❌ MongoDB error:', err))
