// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/ContentSearch";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "./components/InputForm/InputForm";
import { pageActions } from "./Store/Store";
let initial = true;
function App() {
  const dispatch = useDispatch();
  if (initial) {
    dispatch(pageActions.getFromStore());
    initial = false;
  }
  const ischecked = useSelector((st) => st.ischecked);
  const selected = useSelector((st) => st.data);
  return (
    <div className="app">
      <Header />
      <Content />
      {ischecked && <InputForm data={selected} />}
    </div>
  );
}

export default App;
