import React from "react";

const UsersTable = ({ users, onEdit, onDelete }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ borderBottom: "2px solid #444" }}>
          <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Nombre</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Correo</th>
          <th style={{ padding: "10px", textAlign: "center" }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} style={{ borderBottom: "1px solid #333" }}>
            <td style={{ padding: "10px" }}>{user.id}</td>
            <td style={{ padding: "10px" }}>{user.name}</td>
            <td style={{ padding: "10px" }}>{user.email}</td>
            <td style={{ padding: "10px", textAlign: "center" }}>
              <button
                onClick={() => onEdit(user)}
                style={{ marginRight: "10px", padding: "5px 10px", borderRadius: "5px", border: "none", background: "#ffa500", color: "#fff", cursor: "pointer" }}
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(user.id)}
                style={{ padding: "5px 10px", borderRadius: "5px", border: "none", background: "#e01f1f", color: "#fff", cursor: "pointer" }}
              >
                Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
