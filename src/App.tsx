import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";
import Button from "./components/button/Button";
import {
  counterActionAdd,
  counterActionReset,
  counterActionSubtract,
} from "./redux/actions/counterActions";
import {
  loginActionLogin,
  loginActionLogoff,
} from "./redux/actions/loginActions";

function App() {
  const count = useSelector((state: RootState) => state.counter);
  const login = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  let color = "#fff";
  if (count >= 1) {
    color = "yellow";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <section>
      <div>
        <h1>React Counter App</h1>
        <div className="count" style={{ color: color }}>
          <p>{count}</p>
          <p>{login ? "Logged in" : "Logged off"}</p>
        </div>
        <div className="buttons">
          <Button
            onClick={() => dispatch(counterActionSubtract())}
          >{`- Subtract`}</Button>
          <Button
            onClick={() => dispatch(counterActionReset())}
          >{`! Reset`}</Button>
          <Button
            onClick={() => dispatch(counterActionAdd())}
          >{`+ Add`}</Button>
          <Button
            onClick={() => dispatch(loginActionLogin())}
          >{`Login`}</Button>
          <Button
            onClick={() => dispatch(loginActionLogoff())}
          >{`Logoff`}</Button>
        </div>
      </div>
    </section>
  );
}

export default App;
