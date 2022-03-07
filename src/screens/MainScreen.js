import { findNonSerializableValue } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./MainScreen.css";
import SignupScreen from './SignupScreen';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../firebase";
import LoginButton from '../LoginButton/LoginButton';

// function goto_playlist(){
//   window.location.href = "./playlist"
// }

// function goto_allplay(){
//   window.location.href = "./recommend"
// }

// function goto_login(){
//   window.location.href = "./login"
// }

function MainScreen() {
  // const [signIn, setSignIn] = useState(false);
  const [user, setUser] = useState({});
  // const [click, setClick] = useState(false);
  
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
  // const logout = async () => {
  
  //   await signOut(auth);
  // };


  return (
    <div className='MainScreen'>
      <div className='MainScreen__background'>
          <a href='https://bigdatahub3.mycafe24.com/' rel="stylesheet">
          <div className='main-logo'>
          <img
            className='MainScreen__logo'
            src = {require('../image/logo.png')}
            alt = ""
          />
          </div>
          </a>
          <div className='main_login'>
            <LoginButton />
          </div>
          {/* <span className='username'>
            {user?.email}
          </span>
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
          )} */}
          <div className='MainScreen__gradient' />
      </div>
      <div className='MainScreen__body'>
          {/* {signIn ? (
              <SignupScreen />
          ): (
            <> */}
          <h1>
              Mat:play
          </h1>
          <h2>여러가지 식당들을 확인해보세요!</h2>
          <h3>
              본 웹페이지는 PC 전체 화면에 최적화 되어있습니다. <br /> 
              {/* 웹사이트 사용 매뉴얼을 보기 위해 <a href='./manual'>여기</a>를 클릭해주세요! */}
          </h3>
          <a href={'./manual'}><button className='manual_button'>
                사용 메뉴얼
          </button></a>
          {/* <div className='MainScreen__input'>
                  <input type='email' placeholder="Email Address" />
                  <button className='MainScreen__getStarted' onClick = {goto_login}>
                      Login
                  </button>
          </div> */}
          <div className='buttons'>
            <a href={user?'./playlist':'./login'}><button className='button'>Playlist 체험해보기</button></a>
            <a href={user?'./recommend':'./login'}><button className='button'>모임 추천 체험해보기</button></a>
          </div>
      </div>
    </div>
  )
}

export default MainScreen