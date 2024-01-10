import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, SetUsers] = useState([]);
  const [runUseEffect, SetRun] = useState(0);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/show`)
      .then((res) => res.json())
      .then((data) => SetUsers(data));
  }, [runUseEffect]);

  async function DeleteUSer(id) {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/user/delete/${id}`
      );
      if (res.status === 200) {
        SetRun((prev) => prev + 1);
      }
    } catch {
      console.log("err");
    }
  }

  const ShowData = users.map((u, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{u.name}</td>
      <td>{u.email}</td>
      <td className="td-icons">
        <Link to={`${u.id}`}>
          <i className="fa-regular fa-pen-to-square"></i>
        </Link>
        <i onClick={() => DeleteUSer(u.id)} className="fa-solid fa-trash"></i>
      </td>
    </tr>
  ));
  return (
    <div style={{ padding: "20px" ,overflow:'hidden' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>USERS</th>
            <th>EMAIL</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>{ShowData}</tbody>
      </table>
    </div>
  );
}
