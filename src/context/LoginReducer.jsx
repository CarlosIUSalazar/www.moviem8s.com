export default (state, action) => {
  switch(action.type){
    // Add Action for adding login user information
    case "ADD_GOOGLE_USER_INFO":
      return {...state, loginUser: {userID: action.payload.MU, userEmail: action.payload.yu, userFirstName: action.payload.pW, userLastName: action.payload.qU}}
    default:
      return state;
  }

}