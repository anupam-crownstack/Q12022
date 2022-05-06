import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const styles = {
    form: {
      display: "flex",
      justifyContent: "center",
    },
    addBtn: {
      backgroundColor: "#13aa52",
      border: "1px solid #13aa52",
      boxShadow: "rgba(0, 0, 0, .1) 0 2px 4px 0",
      boxSizing: "border-box",
      color: "#fff",
      cursor: "pointer",
      fontSize: "1.5rem",
      fontWeight: "400",
      outline: "none",
      outline: "0",
      padding: ".25rem 0.5rem",
      textAlign: "center",
      userSelect: "none",
    },
    inputField: {
      outline: "none",
      fontSize: "1rem",
      padding: "0.25rem 0.5rem",
      border: "1px solid black",
      borderRadius: "0.15rem",
    },
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };
  return (
    <div>
      <form style={styles.form} onSubmit={submitForm}>
        <input
          style={styles.inputField}
          type="text"
          placeholder="Add an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button style={styles.addBtn} type="submit">
          {" "}
          +{" "}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
