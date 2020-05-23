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

  function toggleLoginState(){
    dispatch({
      type: "TOGGLE_LOGIN_STATE",
    })
  }

  return (
    <LoginContext.Provider value={{
      loginUser: state.loginUser,
      isUserLoggedIn: state.isUserLoggedIn,
      addGoogleUserInfo,
      toggleLoginState
    }}>
      {children}
    </LoginContext.Provider>
  )
}