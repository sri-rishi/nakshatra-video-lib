import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Home, LikedVideos, Login, PrivateRoute, SignUp, UserProfile, WatchLater} from "./pages/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user/user-profile" element={<UserProfile />} />
          <Route path="/user/watchlater" element={<WatchLater />} />
          <Route path="/user/likes" element={<LikedVideos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
