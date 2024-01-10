import Forms from "../../../components/Forms/Form";

export default function CreateUser() {
    return (
      <div className="parent">
        <Forms btn="new user" endPoint="user/create" navigate='/dashboard/users' />
      </div>
    );
}