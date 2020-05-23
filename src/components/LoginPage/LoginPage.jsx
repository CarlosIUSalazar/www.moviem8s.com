import React from "react";
import Button from "../GoogleAuthButton";

import "./LoginPage.scss";

export default function LoginPage(){
  return(
    <div className="login-page">
      <picture className="main-title">
        <img className="main-title__pic" src="/moviem8s.png" />
      </picture>
      <Button/>
    </div>
  )
}