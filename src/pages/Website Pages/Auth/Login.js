import React, { useState } from "react";
import Header from "../../../components/Forms/Header";
import axios from "axios";
export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPass] = useState("");
  const [Accsept, SetAccsept] = useState(false);
  const [emailErorr, SetEmailError] = useState("");
  async function StopSubmit(e) {
    let Flag = true;
    e.preventDefault();
    SetAccsept(true);
    if (password.length < 8) {
      Flag = false;
    } else Flag = true;
    try {
      if (Flag) {
        let res = await axios.post(`http://127.0.0.1:8000/api/login`, {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      SetEmailError(err.response.status);
    }
  }

  return (
    <>
      <Header />
      <div className="parent">
        <div className="register">
          <form onSubmit={StopSubmit}>
            <label htmlFor="email"> Email: </label>
            <input
              id="email"
              type="email"
              placeholder="Email...."
              required
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            />
            {Accsept && emailErorr === 422 && (
              <p className="error">Email is already taken</p>
            )}
            <label htmlFor="password"> Password: </label>
            <input
              id="password"
              type="password"
              placeholder="Password...."
              required
              value={password}
              onChange={(e) => SetPass(e.target.value)}
            />
            {password.length < 8 && Accsept && (
              <p className="error">password must be more than 8 Cahr</p>
            )}

            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
