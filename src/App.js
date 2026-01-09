import React, { useState, useEffect } from "react";
import UsersTable from "./UsersTable";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://users-api-9xii.onrender.com/users");
        if (!response.ok) throw new Error("Error al cargar los usuarios");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#121212", minHeight: "100vh", color: "#fff", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Usuarios</h1>
      {loading ? <p style={{ textAlign: "center" }}>Cargando...</p> : <UsersTable users={users} />}
    </div>
  );
}

export default App;
