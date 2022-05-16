import "./App.css";
import InputForm from "./components/InputForm";
import ListContainer from "./components/ListContainer";

function App() {
  //box-shadow: 20px 20px 50px 10px pink inset;
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "4rem 0",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <header style={styles.header}>React + Context Todo</header>
      <InputForm />
      <ListContainer />
    </div>
  );
}

export default App;
