import React, { useEffect } from 'react';
import './App.css';
import {PlaylistPage, MorePage, GroupRecommendPage, CheckTastes, Manual} from './Pages/Pages';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './screens/SignupScreen';
import LoginMainScreen from './screens/LoginMainScreen'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path='/profile' element={<ProfileScreen/>}/>
            <Route path='/login' element={<SignupScreen />} />
            <Route path='/playlist' element={<PlaylistPage />} />
            <Route path='/recommend' element={<GroupRecommendPage />} />
            <Route path='/allplay' element={<MorePage />} />
            <Route path='/taste' element={<CheckTastes />} />
            <Route path='/manual' element={<Manual />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

class App1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageNum: 0,
    };
    this.moveToMorePage = this.moveToMorePage.bind(this);
    this.moveToPlaylistHome = this.moveToPlaylistHome.bind(this);
  }

  showPage(){
    if(this.state.pageNum === 0){
      return <PlaylistPage morePlaylistOnClick={this.moveToMorePage} homeOnClick={this.moveToPlaylistHome}/>;
    }
    else if(this.state.pageNum === 1){
      return <MorePage />;
    }
  }

  moveToMorePage(){
    this.setState({pageNum: 1});
  }

  moveToPlaylistHome(){
    this.setState({pageNum: 0});
  }

  render(){
    return (
      <div>
        <h1 className='pageName' onClick={this.moveToPlaylistHome}>맛플리</h1>
        {this.showPage()}
      </div>
    );
  }
}