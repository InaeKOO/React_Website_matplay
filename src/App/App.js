import './App.css';
import React from 'react';
import {PlaylistPage, MorePage, GroupRecommendPage} from '../Pages/Pages';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageNum: 2,
    };
  }

  showPage(){
    if(this.state.pageNum === 0){
      return <PlaylistPage morePlaylistOnClick={this.moveToPage.bind(this, 1)} homeOnClick={this.moveToPlaylistHome}/>;
    }
    else if(this.state.pageNum === 1){
      return <MorePage />;
    }
    else if(this.state.pageNum === 2){
      return <GroupRecommendPage />;
    }
  }

  moveToPage(num){
    this.setState({pageNum: num});
  }

  render(){
    return (
      <div>
        {/* <h1 className='pageName' onClick={this.moveToPage.bind(this, 0)}>맛플리</h1> */}
        {this.showPage()}
        {/* <IntroductionBar /> */}
      </div>
    );
  }
}

export default App;