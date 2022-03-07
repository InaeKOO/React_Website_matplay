import React, {useRef} from "react";
import { auth } from "../firebase";
import './LoginScreen.css';

function LoginScreen(){
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register = (e) => {
        e.preventDefault(); //to prevent refreshing

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser)
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => alert(error.message));
    };

    return(
        <div className="signupScreen">
            <form>
                <h1>(맛플리 로고)</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>로그인</button>

                <h4>
                    <span className="signupScreen__gray">맛플리가 처음이신가요? </span>
                    <span className="signupScreen__link" onClick={register}> 회원가입</span>
                    </h4>
            </form>
        </div>
    );
}

export default LoginScreen