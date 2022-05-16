import { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const ListContainer = () => {
  const { list, removeTodo, deleteItemTodo } = useContext(TodoContext);

  const styles = {
    item: {
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      display: "flex",
      justifyContent: "space-between",
      width: "20rem",
      margin: "0.5rem 0",
    },
    trashBtn: {
      backgroundColor: "#FFFFFF",
      border: "0",
      borderRadius: ".5rem",
      boxSizing: "border-box",
      color: "#111827",
      fontSize: ".875rem",
      fontWeight: "600",
      lineHeight: "1.25rem",
      padding: ".75rem 1rem",
      textAlign: "center",
      textDecoration: "none #D1D5DB solid",
      textDecorationThickness: "auto",
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      cursor: "pointer",
      userSelect: "none",
      touchAction: "manipulation",
      position: "absolute",
      bottom: "1rem",
      width: "20rem",
    },
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    nothingToShow: {
      fontWeight: "600",
      fontSize: "1.5rem",
      margin: "3rem 0",
    },
    deleteBtn: {
      background: "#e62143",
      boxSizing: "border-box",
      color: "#fff",
      cursor: "pointer",
      display: "flex",
      fontSize: ".75rem",
      fontWeight: "700",
      justifyContent: "center",
      padding: ".8em 1em",
      textAlign: "center",
      textDecoration: "none",
      userSelect: "none",
      wordBreak: "break-word",
      border: "0",
    },
    itemText: {
      display: "flex",
      alignItems: "center",
      padding: "0.25rem 0.5rem",
      wordWrap: "break-word",
    },
  };

  const returnList = () => {
    return list.map((item) => (
      <div style={styles.item} key={item.id}>
        <span style={styles.itemText}>{item.data}</span>
        <button
          style={styles.deleteBtn}
          onClick={() => deleteItemTodo(item.id)}>
          {" "}
          X{" "}
        </button>
      </div>
    ));
  };

  return (
    <main style={styles.mainContainer}>
      {list.length === 0 ? (
        <div style={styles.nothingToShow}>Nothing to show</div>
      ) : (
        <>
          {returnList()}
          <button style={styles.trashBtn} onClick={() => removeTodo()}>
            \_/ Trash
          </button>
        </>
      )}
    </main>
  );
};

export default ListContainer;
