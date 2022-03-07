import React, { useState } from 'react'
import "./LoginButton.css"
import "../screens/MainScreen.css";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../firebase";

function goto_login(){
    window.location.href = "./login"
}

function LoginButton(){
    const [user, setUser] = useState({});
    
    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    })
    
    const logout = async () => {
    
        await signOut(auth);
        window.location.href = "./";
    };
    return(
        <div>
            {/* <span className='username'>
            {user?.email}
          </span> */}
          {user?(<span className='username'>{user.email}</span>):(<></>)}
          {!user ? (
            <button onClick={goto_login} className='MainScreen__button'>
              Login
            </button>
          ):(
            <button onClick={logout} className='MainScreen__button' style={{
              textDecoration: 'none',
              color: '#fff',
              border: 'none',
              }}>
              Logout
            </button>
          )}
        </div>
    );
}

export default LoginButton