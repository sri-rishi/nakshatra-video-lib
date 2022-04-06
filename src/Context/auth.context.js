import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const initialUserState = {
        user:{},
        isUserLoggedIn: false
    } 

    const authReducer = (state, action) => {
        switch(action.type) {
            case "LOGIN":
                return {
                    ...state, 
                    user: action.payload,
                    isUserLoggedIn: true
                }

            case "LOGOUT":
                localStorage.clear()
                return {
                    initialUserState
                }
        }
    }

    const [state, dispatch] = useReducer(authReducer, initialUserState);
    
    return(
        <AuthContext.Provider value={{
            user: state.user, 
            isUserLoggedIn: state.isUserLoggedIn,
            authDispatch: dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => useContext(AuthContext);

export{useAuth, AuthProvider};