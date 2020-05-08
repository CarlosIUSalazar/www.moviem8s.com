import React, { Component }  from "react";
import Deck from "./components/Deck";

import GoogleLogin from 'react-google-login'

const App = () => {

function responseGoogle(response){
    console.log(response);
    console.log(response.profileObj);

  }
  
    return (

      <div>
        <GoogleLogin
        clientId="See .ENV for the client ID"
        buttonText="Login"
        onSuccess={<Deck />}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
        
      </div>
      
    )
    
}

export default App;
