import React , { createContext, useReducer} from "react";
import LoginReducer from "./LoginReducer";

// Initial State
const initialState = {
  loginUser: {
    userID: "",
    userEmail: "",
    userFirstName: "",
    userLastName: ""
  },
  isUserLoggedIn: false
}

// Create store
export const LoginContext = createContext(initialState);

//Provider content
export const LoginProvider = ({children}) => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  //Actions
  function addGoogleUserInfo(user){
    dispatch({
      type: "ADD_GOOGLE_USER_INFO",
      payload: user
    });
  }

  return (
    <LoginContext.Provider value={{
      loginUser: state.loginUser,
      addGoogleUserInfo
    }}>
      {children}
    </LoginContext.Provider>
  )
}