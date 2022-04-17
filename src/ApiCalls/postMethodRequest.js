import axios from "axios";

const signInHandler = async (userDetails, authDispatch, navigate, setToastData) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        password: userDetails.password,
      });
    
      if(response.status === 201 || response.status === 200) {
        authDispatch({type: "LOGIN", payload: response.data.createdUser});
        setToastData({
          toastText:"Successfully signed up",
          toastDisplay: true,
          toastType: "success"
        })
      }
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/")
    } catch (error) {
      setToastData({
          toastText: error,
          toastDisplay: true,
          toastType: "error"
      })
    }
};

const loginHandler = async (userInput, authDispatch, navigate, setToastData) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: userInput.email,
        password: userInput.password,
      });
      if(response.status === 200 || response.status === 201) {
        authDispatch({type: "LOGIN", payload: response.data.foundUser});
        setToastData({
          toastText:"Successfully logged in",
          toastDisplay: true,
          toastType: "success"
        })
      }
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
    } catch (error) {
      setToastData({
          toastText: error,
          toastDisplay: true,
          toastType: "error"
      })
    }
}; 

const postTestLoginUser = async(authDispatch, navigate, setToastData) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: "adminforever@gmail.com",
      password: "admin123"
    })
    if(response.status === 200 || response.status === 201) {
      authDispatch({type: "LOGIN", payload: response.data.foundUser});
      setToastData({
        toastText:"Successfully logged in",
        toastDisplay: true,
        toastType: "success"
      })
    }
    localStorage.setItem("token", response.data.encodedToken);
    navigate("/")
  }catch(error) {
    setToastData({
        toastText: error,
        toastDisplay: true,
        toastType: "error"
    })
  }
}

const postVideoToWatchLater = async(video, serviceListDispatch, setToastData) => {
  const token = localStorage.getItem("token"); 
  try {
    const response = await axios.post("/api/user/watchlater", {video}, {headers:{authorization: token}});
    if(response.status === 201 || response.status === 200) {
      serviceListDispatch({type: "SET_WATCHLATER_LIST", payload: response.data.watchlater});
      setToastData({
        toastText:"Successfully added video to watch later",
        toastDisplay: true,
        toastType: "success"
      })
    }
  } catch(error) {
    setToastData({
        toastText: error,
        toastDisplay: true,
        toastType: "error"
    })
  } 
}

const postVideoToLikedVideo = async(video, serviceListDispatch, setToastData) => {
  const token = localStorage.getItem("token");
  try{
    const response = await axios.post("/api/user/likes", {video}, {headers: {authorization: token}});
    if(response.status === 201 || response.status === 200) {
      serviceListDispatch({type: "SET_LIKED_VIDEO_LIST", payload: response.data.likes});
      setToastData({
        toastText:"Successfully added video to liked videos",
        toastDisplay: true,
        toastType: "success"
      })
    }
  }catch(error) {
    console.error(error)
  }
}

const postVideoToHistory = async(video, serviceListDispatch, setToastData) => {
  const token = localStorage.getItem("token");
  try {
      const response = await axios.post(`/api/user/history`,{video}, {headers: {authorization: token}})
      if(response.status === 200 || response.status === 201) {
          serviceListDispatch({type: "SET_HISTORY_VIDEO_LIST", payload: response.data.history});
      }
  }catch(error) {
    setToastData({
      toastText: error,
      toastDisplay: true,
      toastType: "error"
    })
  }
}


const postPlaylist = async(newPlaylistName, serviceListDispatch, setToastData) => {
  const token = localStorage.getItem("token");
  try {
      const response = await axios.post("/api/user/playlists", {playlist: {title: newPlaylistName}}, {headers: {authorization: token}})
      if(response.status === 200 || response.status === 201) {
          serviceListDispatch({type: "SET_ALL_PLAYLIST_ARRAY", payload: response.data.playlists});
          setToastData({
            toastText:"Successfully created playlist",
            toastDisplay: true,
            toastType: "success"
          })
      }
  }catch(error) {
    setToastData({
      toastText: error,
      toastDisplay: true,
      toastType: "error"
    })
  }
}

const postVideoInPlaylist = async(playlistId, video, serviceListDispatch, setToastData) => {
  const token = localStorage.getItem("token");
  try {
      const response = await axios.post(`/api/user/playlists/${playlistId}`, {video}, {headers: {authorization: token}});
      if(response.status === 200 || response.status === 201) {
        serviceListDispatch({type: "SET_VIDEO_IN_PLAYLIST", payload: response.data.playlist});
        setToastData({
          toastText:"Successfully added video to playlist",
          toastDisplay: true,
          toastType: "success"
        })
      }
      
  }catch(error) {
    setToastData({
        toastText: error,
        toastDisplay: true,
        toastType: "error"
    })
  }
}

export {loginHandler, signInHandler, postVideoToWatchLater, postVideoToLikedVideo, postVideoToHistory, postPlaylist, postVideoInPlaylist, postTestLoginUser};

