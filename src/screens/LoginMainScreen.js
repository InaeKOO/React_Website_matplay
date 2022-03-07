import React from "react";
import './LoginMainScreen.css';
import LoginScreen from "./LoginScreen";

function LoginMainScreen(){

    return <div className="loginScreen">
        <div className="loginScreen__background">
            <span className="matpli_logo">맛플리</span>
            {/* <img
                className="loginScreen__logo"
                src="https://blog.kakaocdn.net/dn/GPmM6/btqwxknr1eO/2c2nFBGSvKh1ZkudughDWk/img.png"
                alt=""
            /> */}
            <div className="loginScreen__gradient" />
        </div>

        <div className="loginScreen__body">
        <LoginScreen />
        </div>
    </div>;
}

export default LoginMainScreen;