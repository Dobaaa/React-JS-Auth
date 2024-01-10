import Header from "../../components/Forms/Header";

export default function Home() {
  return (
    <div>
      <Header Dash={true} />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "cursive",
        }}
      >
        {" "}
        Welcome , Dear User
      </h2>
    </div>
  );
}
