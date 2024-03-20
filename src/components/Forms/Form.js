import axios from "axios";
import "./index.css";
import { useContext, useEffect, useState } from "react";
import { User } from "../../context/Context";

export default function Forms(props) {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPass] = useState("");
  const [repassword, SetRePass] = useState("");
  const [emailErorr, SetEmailError] = useState("");

  const UserNow = useContext(User);

  const StyleRegister = {
    display: "flex",
    justifiyContent: "start",
    alignItems: "center",
    marginTop: "40px",
  };

  const colorStyle = {
    background:
      "linear-gradient(68.3deg, rgb(23, 41, 77) 6.3%, rgb(243, 113, 154) 90.9%)",
    borderRadius: "12px",
    width: "50vw",
  };

  useEffect(() => {
    SetName(props.name);
    SetEmail(props.email);
  }, [props.name, props.email]);

  async function StopSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/${props.endPoint}`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: repassword,
        }
      );
      const token = res.data.data.token;
      const UserDetails = res.data.data.user;

      UserNow.SetAuth({ token, UserDetails });
    } catch (err) {
      SetEmailError(err.response.status);
    }
  }
  return (
    <>
      <div className="register" style={props.StyleRegister && StyleRegister}>
        <form onSubmit={StopSubmit} style={props.colorStyle && colorStyle}>
          <label htmlFor="name"> Name: </label>
          <input
            id="name"
            type="text"
            placeholder="Name...."
            required
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
          {/*(name === "" && Accsept && <p>Name is required </p>) ||
            (name?.length < 3 && Accsept && (
              <p className="error">Name is to short</p>
            ))*/}
          <label htmlFor="email"> Email: </label>
          <input
            id="email"
            type="email"
            placeholder="Email...."
            required
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          {/* Accsept && emailErorr === 422 && (
            <p className="error">Email is already taken</p>
          )*/}
          <label htmlFor="password"> Password: </label>
          <input
            id="password"
            type="password"
            placeholder="Password...."
            required
            value={password}
            onChange={(e) => SetPass(e.target.value)}
          />
          {/*password.length < 8 && Accsept && (
            <p className="error">password must be more than 8 Cahr</p>
          )*/}
          <label htmlFor="repassword"> Confirm Password: </label>
          <input
            id="repassword"
            type="password"
            placeholder="Confirm Password"
            required
            value={repassword}
            onChange={(e) => SetRePass(e.target.value)}
          />
          {/*repassword !== password && Accsept && (
            <p className="error">password is not match</p>
          )*/}

          <div>
            <button type="submit">{props.btn}</button>
          </div>
        </form>
      </div>
    </>
  );
}
