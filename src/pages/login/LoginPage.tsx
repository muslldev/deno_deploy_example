import LoginForm from "./components/LoginForm";

function LoginPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        columnGap: "10px",
        backgroundColor: "teal",
      }}
    >
      <LoginForm />
    </div>
  );
}

export default LoginPage;
