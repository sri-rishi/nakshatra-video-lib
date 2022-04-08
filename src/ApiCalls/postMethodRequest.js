import axios from "axios";

const signInHandler = async (userDetails, authDispatch, navigate) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        password: userDetails.password,
      });
    
      if(response.status === 201 || response.status === 200) {
        authDispatch({type: "LOGIN", payload: response.data.createdUser})
      }
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/")
    } catch (error) {
      console.error(error);
    }
};

const loginHandler = async (userInput, authDispatch, navigate) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: userInput.email,
        password: userInput.password,
      });
      if(response.status === 200 || response.status === 201) {
        authDispatch({type: "LOGIN", payload: response.data.foundUser})
      }
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
}; 

const postVideoToWatchLater = async(video, serviceListDispatch) => {
  const token = localStorage.getItem("token"); 
  try {
    const response = await axios.post("/api/user/watchlater", {video}, {headers:{authorization: token}});
    if(response.status === 201 || response.status === 200) {
      serviceListDispatch({type: "SET_WATCHLATER_LIST", payload: response.data.watchlater})
    }
  } catch(error) {
    console.error(error);
  } 
}

const postVideoToLikedVideo = async(video, serviceListDispatch) => {
  const token = localStorage.getItem("token");
  try{
    const response = await axios.post("/api/user/likes", {video}, {headers: {authorization: token}});
    if(response.status === 201 || response.status === 200) {
      serviceListDispatch({type: "SET_LIKED_VIDEO_LIST", payload: response.data.likes})
    }
  }catch(error) {
    console.error(error)
  }
}

export {loginHandler, signInHandler, postVideoToWatchLater, postVideoToLikedVideo};

