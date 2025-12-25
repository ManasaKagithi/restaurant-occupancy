import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import tableRoutes from './routes/tableRoutes.js'
import reservationRoutes from './routes/reservationRoutes.js'

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.use('/api/tables', tableRoutes)
app.use('/api/reservations', reservationRoutes)

mongoose.connect('mongodb://localhost:27017/restaurant')
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(err => console.error(err))
