import Container from "@material-ui/core/Container";
import CalculateForm from "./components/CalculateForm";

function App() {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>투자 예상 계산기</h1>
      <CalculateForm />
    </Container>
  );
}

export default App;
