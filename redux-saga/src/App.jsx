import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./redux/catSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { cats, isLoading } = useSelector((state) => state.cats);

  useEffect(() => {
    dispatch(getCatsFetch());
  }, []);

  return (
    <div className="App">
      <header>
        <h2>Redux Toolkit + Redux Saga</h2>
      </header>

      <main>
        <h3>
          <u>Cat Breeds</u>
        </h3>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          cats.map((cat) => (
            <div key={cat.id}>
              <p>
                {cat.name} - {cat.life_span} yrs | <b>{cat.origin}</b>
              </p>
              <img
                src={cat.image.url}
                alt={cat.name}
                width="200px"
                height="200px"
              />
              <p>
                <b>Temperament: </b>
                {cat.temperament}
              </p>
              <hr></hr>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default App;
