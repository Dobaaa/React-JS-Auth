import Forms from "../../../components/Forms/Form";
import "./SignUp.css";
import Header from "../../../components/Forms/Header";
export default function SignUp() {
  return (
    <>
      <Header />
      <div className="parent">
        <Forms
          btn="Register"
          endPoint="register"
          navigate="/"
          StyleRegister={true}
        />
      </div>
    </>
  );
}
