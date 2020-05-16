import React, {useState, useEffect, useContext} from "react";

export default function GoogleAuthButton(){
  const [userAuth, setUserAuth] = useState("");

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
    userAuth.signIn().then((signedInUser) => console.log(signedInUser.Pt
      ));
    // setIsSignedIn(true);
    // console.log(userInfo);
  };
  return(
    <div>
      <button onClick={onSignInClick}>Google Login</button>
    </div>
  )
}