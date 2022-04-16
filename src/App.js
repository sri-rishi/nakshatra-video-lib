import { Route, Routes } from "react-router-dom";
import "./App.css";
import {HistoryPage, Home, LikedVideos, Login, Playlist, PrivateRoute, SignUp, SinglePlaylist, SingleVideo, UserProfile, WatchLater} from "./pages/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/video" element={<Home />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user/playlists" element={<Playlist />} /> 
          <Route path="/user/playlists/:playlistId" element={<SinglePlaylist />} />
          <Route path="/user/user-profile" element={<UserProfile />} />
          <Route path="/user/watchlater" element={<WatchLater />} />
          <Route path="/user/likes" element={<LikedVideos />} />
          <Route path="/user/history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
