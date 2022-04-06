import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Home, Login, PrivateRoute, SignUp, UserProfile} from "./pages/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user/user-profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
