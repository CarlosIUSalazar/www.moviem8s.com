import React from "react";
import Button from "../GoogleAuthButton";

import "./LoginPage.scss";

export default function LoginPage(){
  return(
    <div className="login-page">
      <div className="logo-wrapper">
        <picture>
          <img src="/MovieM8SLogo.png" className="logo-wrapper__main-logo"/>
        </picture>
      </div>
      <div className="title-wrapper">
        <picture>
          <img src="/moviem8s-dark-gold-logo.png" className="title-wrapper__main-title" />
        </picture>
      </div>
      <Button/>
    </div>
  )
}