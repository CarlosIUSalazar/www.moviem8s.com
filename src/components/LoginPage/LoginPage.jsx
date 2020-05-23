import React from "react";
import Button from "../GoogleAuthButton";

import "./LoginPage.scss";

export default function LoginPage(){
  return(
    <div className="login-page">
      <picture className="main-title">
        <img className="main-title__pic" src="https://nes-box-art-library.s3-ap-northeast-1.amazonaws.com/MovieM8SFullLogo.png" />
      </picture>
      <Button/>
    </div>
  )
}