function TableCard({ table }) {
  return (
    <div className="card">
      <h3>Table {table.tableNumber}</h3>
      <p>Capacity: {table.capacity}</p>
      <p>Status: {table.status}</p>
    </div>
  )
}

export default TableCard
