import React, { useState, useEffect } from "react";
import UsersTable from "./UsersTable";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [editingUserId, setEditingUserId] = useState(null); 

  const API_URL = "https://users-api-9xii.onrender.com/users";

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Error al cargar los usuarios");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUserId) {
        const res = await fetch(`${API_URL}/${editingUserId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        });
        if (!res.ok) throw new Error("Error al editar usuario");
      } else {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        });
        if (!res.ok) throw new Error("Error al agregar usuario");
      }
      setName("");
      setEmail("");
      setEditingUserId(null);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que quieres borrar este usuario?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Error al borrar usuario");
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditingUserId(user.id);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#121212", minHeight: "100vh", color: "#fff", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Usuarios</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          style={{ padding: "8px", marginRight: "10px", borderRadius: "5px", border: "none" }}
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          style={{ padding: "8px", marginRight: "10px", borderRadius: "5px", border: "none" }}
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          style={{ padding: "8px 16px", borderRadius: "5px", border: "none", background: "#1f80e0", color: "#fff", cursor: "pointer" }}
        >
          {editingUserId ? "Editar" : "Agregar"}
        </button>
      </form>

      {loading ? (
        <p style={{ textAlign: "center" }}>Cargando...</p>
      ) : (
        <UsersTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;

