import React from "react";

const UsersTable = ({ users }) => {
  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={trStyle}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const containerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "40px",
  overflowX: "auto",
};

const tableStyle = {
  borderCollapse: "collapse",
  width: "80%",
  minWidth: "400px",
  backgroundColor: "#1e1e2f",
  color: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
  backgroundColor: "#27293d",
  color: "#ffffff",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #333",
};

const trStyle = {
  transition: "background 0.3s",
};

export default UsersTable;
