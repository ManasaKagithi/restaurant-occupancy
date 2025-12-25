import { Router } from 'express'
import Table from '../models/Table.js'
const router = Router()

router.get('/', async (req, res) => {
  const tables = await Table.find().sort({ name: 1 })
  res.json(tables)
})

router.post('/', async (req, res) => {
  const table = await Table.create(req.body)
  res.status(201).json(table)
})

router.patch('/:id/status', async (req, res) => {
  const { status } = req.body
  const table = await Table.findByIdAndUpdate(req.params.id, { status }, { new: true })
  res.json(table)
})

export default router
