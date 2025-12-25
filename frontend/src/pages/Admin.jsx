import { useState } from 'react'

function Admin() {
  const [form, setForm] = useState({ tableNumber: '', capacity: '' })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await fetch('http://localhost:4000/api/tables', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    alert('Table added successfully!')
    setForm({ tableNumber: '', capacity: '' })
  }

  return (
    <div>
      <h2>Add New Table</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="tableNumber"
          type="number"
          placeholder="Table Number"
          value={form.tableNumber}
          onChange={handleChange}
          required
        />
        <input
          name="capacity"
          type="number"
          placeholder="Capacity"
          value={form.capacity}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Table</button>
      </form>
    </div>
  )
}

export default Admin
