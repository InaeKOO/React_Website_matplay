import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import "./ProfileScreen.css"
import Nav from "../Nav"
import userEvent from '@testing-library/user-event'

function ProfileScreen() {
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
          <h1>Edit Profile</h1>
          <div className='profileScreen__info'>
              <img
                src = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt = ''
                />
                <div className='profileScreen__details'>
                    <h2>{userEvent.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <p></p>
                        <button 
                        onClick={() => auth.signOut()}
                        className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default ProfileScreen
