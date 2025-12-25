import { useState } from "react";

function ReservationForm({ tables }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tableId: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Reservation submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <select name="tableId" onChange={handleChange} required>
        <option value="">Select a table</option>
        {tables.map((table) => (
          <option key={table._id} value={table._id}>
            Table {table.tableNumber} (Capacity: {table.capacity})
          </option>
        ))}
      </select>

      <input
        name="time"
        type="datetime-local"
        onChange={handleChange}
        required
      />
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
