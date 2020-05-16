import React, {useState, useEffect, useContext} from "react";

import {LoginContext} from "../../context/LoginState";

import {Link} from "react-router-dom";

import history from "../../history";

export default function GoogleAuthButton(){
  const [userAuth, setUserAuth] = useState("");

  const { addGoogleUserInfo, toggleLoginState } = useContext(LoginContext)

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
    userAuth.signIn().then((signedInUser) => {
      addGoogleUserInfo(signedInUser.Pt)
      toggleLoginState();

      history.push("/deck")
    });
    // userAuth.signIn().then((signedInUser) => console.log(signedInUser.Pt));


    // setIsSignedIn(true);
    // console.log(userInfo);
  };
  return(
    <div>

        <Link to={"/deck"}>
        <div style={{marginRight: "40px"}}>
          <button>Click me after logged in... Fix it later lol</button>
        </div>
        </Link>


      <button onClick={onSignInClick}>Google Login</button>
    </div>
  )
}