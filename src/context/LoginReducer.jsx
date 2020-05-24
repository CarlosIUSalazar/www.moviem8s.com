export default (state, action) => {
  console.log("In here????", state)
  switch(action.type){
    // Add Action for adding login user information
    case "ADD_GOOGLE_USER_INFO":
      return {...state, loginUser: {userID: action.payload.PU, userEmail: action.payload.Du, userFirstName: action.payload.sW, userLastName: action.payload.tU}}
    case "TOGGLE_LOGIN_STATE":
      return {...state, isUserLoggedIn: !state.isUserLoggedIn}
    default:
      return state;
  }

}