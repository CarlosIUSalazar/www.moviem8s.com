import React, {useState, useEffect, useContext} from "react";

import {LoginContext} from "../../context/LoginState";

import {useHistory} from "react-router-dom";

import "./GoogleAuthButton.scss";

export default function GoogleAuthButton(){
  const [userAuth, setUserAuth] = useState("");
  const [loginState, setLoginState] = useState(false);

  const { addGoogleUserInfo, toggleLoginState } = useContext(LoginContext);

  const history = useHistory();

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_SIGNIN_API_KEY,
        scope: "email"
        }).then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        setUserAuth(auth);
      });
    });
  }, []);

  useEffect(() => {
    if(loginState){
      setTimeout(() => history.push("/deck"),3000)
    }
  }, [loginState])

  function onSignInClick(){
    userAuth.signIn().then((signedInUser) => {
      console.log(signedInUser)
      addGoogleUserInfo(signedInUser.Tt)
      toggleLoginState();
      setLoginState(true);
    });

    // setTimeout(() => history.push("/deck"),3000)
  };
  return(
    <div>
      <article className="btn">
        <div className="btn__neon" onClick={onSignInClick}>Google Login</div>
      </article>

    </div>
  )
}