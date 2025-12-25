import { useEffect, useState } from 'react'
import TableCard from '../components/TableCard'
import ReservationForm from '../components/ReservationForm'

function Home() {
  const [tables, setTables] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/tables')
      .then(res => res.json())
      .then(data => setTables(data))
  }, [])

  return (
    <div>
      <h2>Available Tables</h2>
      <div className="table-grid">
        {tables.map(table => (
          <TableCard key={table._id} table={table} />
        ))}
      </div>
      <ReservationForm tables={tables} />
    </div>
  )
}

export default Home
