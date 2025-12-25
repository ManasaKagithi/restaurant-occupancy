import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tables, setTables] = useState([])

  // Fetch tables from backend
  useEffect(() => {
    fetch('http://localhost:4000/api/tables')
      .then(res => res.json())
      .then(data => setTables(data))
      .catch(err => console.error(err))
  }, [])

  // Toggle table status
  const toggleTable = async (id, occupied) => {
    const res = await fetch(`http://localhost:4000/api/tables/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ occupied: !occupied })
    })
    const updated = await res.json()
    setTables(tables.map(t => (t._id === id ? updated : t)))
  }

  return (
    <div className="app">
      <h1>Live Availability</h1>
      <div className="table-grid">
        {tables.map(table => (
          <div
            key={table._id}
            className={`table-card ${table.occupied ? 'occupied' : 'available'}`}
            onClick={() => toggleTable(table._id, table.occupied)}
          >
            <h3>{table.name || `Table ${table.number}`}</h3>
            <p>Capacity: {table.capacity}</p>
            <p>Status: {table.occupied ? 'Occupied' : 'Available'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
