import "./App.css";
import { Suspense } from "react";
import { Toast, Loader } from "./Components/index";
import {AllRoutes} from "./Routes";

function App() {
  return (
    <div className="App">
      <Toast />
      <AllRoutes />
    </div>
  );
}

export default App;
