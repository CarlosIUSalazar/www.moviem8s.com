import React, {useState, useEffect, useContext} from "react";

import {LoginContext} from "../../context/LoginState";

import history from "../../history";

export default function GoogleAuthButton(){
  const [userAuth, setUserAuth] = useState("");

  const { addGoogleUserInfo } = useContext(LoginContext)

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_SIGNIN_API_KEY,
        scope: "email"
        }).then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        setUserAuth(auth);
        // setIsSignedIn(auth.isSignedIn.get());
        // auth.isSignedIn.listen(onAuthChange)
      });
    });
  }, [])

  function onSignInClick(){
    // userAuth.signIn().then((signedInUser) => addGoogleUserInfo(signedInUser.Pt
    //   ));
    userAuth.signIn().then((signedInUser) => console.log(signedInUser.Pt));

    history.push("/deck")
    // setIsSignedIn(true);
    // console.log(userInfo);
  };
  return(
    <div>
      <button onClick={onSignInClick}>Google Login</button>
    </div>
  )
}