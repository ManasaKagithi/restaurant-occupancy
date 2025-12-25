import { useEffect, useState } from 'react'
import api from '../services/api'

export default function Home() {
  const [tables, setTables] = useState([])

  useEffect(() => {
    api.get('/tables').then(res => setTables(res.data)).catch(console.error)
  }, [])

  return (
    <div>
      <h1>Live Availability</h1>
      <ul>
        {tables.map(t => (
          <li key={t._id}>
            {t.name} — {t.capacity} seats — {t.status} — {t.section}
          </li>
        ))}
      </ul>
    </div>
  )
}
