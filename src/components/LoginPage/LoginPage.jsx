import React from "react";

import {Link} from "react-router-dom";

import Button from "../GoogleAuthButton";

export default function LoginPage(){
  return(
    <div>
      <h1>Login Page</h1>
      {/* <Link to={"/deck"}> */}
        <Button/>
      {/* </Link> */}
    </div>
  )
}