// import React, { useRef } from 'react'
// import { auth } from "../firebase"
// import "./SignupScreen.css"

// function SignupScreen() {
//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);

//     const register = (e) => {
//         e.preventDefault();
//         auth
//             .createUserWithEmailAndPassword(
//                 emailRef.current.value,
//                 passwordRef.current.value
//             )
//             .then((authUser) => {
//                 console.log(authUser);
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     const signIn = (e) => {
//         e.preventDefault();

//         auth
//             .signInWithEmailAndPassword(
//                 emailRef.current.value,
//                 passwordRef.current.value
//             )
//             .then((authUser) => {
//                 console.log(authUser);
//             })
//             .catch((error) => alert(error.message));
//     };

//   return (
//     <div className='signupScreen'>
//       <form>
//           <h1>로그인</h1>
//           <input ref={emailRef} placeholder='이메일' type='email'/>
//           <input ref={passwordRef} placeholder='비밀번호' type="password" />
//           <button type = 'submit' onClick={signIn}>로그인</button>
//           <h4>
//               <span className='signupScreen__gray'>회원이 아니라면? </span>
//               <span className='signupScreen__link' onClick={register}> 지금 회원가입</span>
//           </h4>
//       </form>
//     </div>
//   )
// }

// export default SignupScreen

import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "firebase/auth"
import "./SignupScreen.css"
import { auth } from '../firebase';
import LoginScreen from './MainScreen';

function goto_taste(){
  window.location.href = "./taste"
}

  function SignupScreen() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user)
        alert("회원가입 성공! 취향 선택 창으로 이동합니다.")
        goto_taste();
        // login();
      }
      catch(error){
        console.log(error.message);
        alert("이미 등록된 e-mail이거나 올바른 형식이 아닙니다.");
      }
    };
  
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user.email);
        window.location.href = "./"
      }
      catch(error){
        console.log(error.message);
        alert('등록되지 않은 e-mail입니다.');
      }
    };
  
    return (
      <div className='signupScreen'>
          {/* <h1> Register User </h1>
          <input
            placeholder = "Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input placeholder='Password...'
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
  
          <button onClick={register}> Create User</button> */}
  
        <h1> 
        <a href='./'>
          <div className='signup-logo'>
          <img
            className='MainScreen__logo'
            src = {require('../image/logo.png')}
            alt = ""
          />
          </div>
          </a>
           </h1>
          <input
            type="email"
            placeholder = "이메일"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder='비밀번호'
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
  
        <button onClick={login}>Login</button>
        <h4>
            <span className='signupScreen__gray'>맛플리에 처음이신가요? </span>
            <span className='signupScreen__link' onClick={register}>회원가입</span>
        </h4>
      </div>
    );
  }
  
  export default SignupScreen;