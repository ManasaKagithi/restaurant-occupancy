import express from 'express'
import Table from '../models/Table.js'

const router = express.Router()

// Update table status
router.put('/:id', async (req, res) => {
  try {
    const table = await Table.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(table)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

export default router
