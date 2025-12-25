import Table from '../models/Table.js'

export const getTables = async (req, res) => {
  const tables = await Table.find()
  res.json(tables)
}

export const createTable = async (req, res) => {
  try {
    const { tableNumber, capacity } = req.body
    const table = new Table({ tableNumber, capacity })
    await table.save()
    res.status(201).json(table)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

