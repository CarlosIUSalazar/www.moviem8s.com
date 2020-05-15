import React from "react";

import {Link} from "react-router-dom";

export default function LoginPage(){
  return(
    <div>
      <h1>Login Page</h1>
      <Link to={"/deck"}>
        <button>Login</button>
      </Link>
    </div>
  )
}