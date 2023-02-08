// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/ContentSearch";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "./components/InputForm/InputForm";
import { pageActions } from "./Store/Store";
import FevDetails from "./components/MyFevList/FevDetails";

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
      {!ischecked && <FevDetails />}
    </div>
  );
}

export default App;
