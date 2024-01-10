import { useEffect, useState } from "react";
import "./update.css";
import Forms from "../../../components/Forms/Form";

export default function UpdateUser() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");

  const ID = window.location.pathname.split("/").slice(-1)[0];

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${ID}`)
      .then((res) => res.json())
      .then((data) => {
        SetName(data[0].name);
        SetEmail(data[0].email);
      });
  }, []);

  return (
    <>
      <h2>Update User Information</h2>
      <div className="parent">
        <Forms
          btn="Update"
          name={name}
          email={email}
          endPoint={`user/update/${ID}`}
          navigate="/dashboard/users"
          hasLocalStorage={false}
          colorStyle={true}
        />
      </div>
    </>
  );
}
