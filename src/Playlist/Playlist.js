import React from "react";
import './Playlist.css';
import {PlaylistItem, PlaylistItemSimple, RestaurantItem, TasteQuestion, UserItem} from '../PlaylistItem/PlaylistItem'

export class Playlist extends React.Component{
    itemList(){
        let items = this.props.playlist.list.map(
            item => <div className='listItem'><PlaylistItem item={item}/></div>
        );

        if(this.props.className === 'playlistMy'){
            items.push(
                <p className='addItem' onClick={this.props.addItem}>+</p>
            );
        }

        return items;
    }
    
    render(){
        return (
            <div className='playlist'>
                <p className='playlist-title'>{this.props.playlist.id}'s Playlist</p>
                <div className='playlist-list'>
                    {this.itemList()}
                </div>
            </div>
        );
    }
}

export class PlaylistSimple extends React.Component{
    itemList(){
        return this.props.playlist.list.map(
            item => <PlaylistItemSimple item={item}/>
        );
    }
    
    render(){
        return (
            <div className='playlistSimple'>
                <p className='playlistSimple-title'>{this.props.playlist.id}'s Playlist</p>
                <div className='playlistSimple-list'>
                    {this.itemList()}
                </div>
            </div>
        );
    }
}

export class GroupRecommendList extends React.Component{
    groupRecommend(){
        return this.props.recommendList.map(
            item => {
                return <PlaylistItem item={item}/>;
            }
        );
    }
    
    render() {
        return (
            <div className='groupRecommendList'>
                {this.groupRecommend()}
            </div>
        );
    }
}

export class GroupUserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: ['현준', '민준', '인회', '홍녕'],
            userlist: ['나'],
            maxUsers: 5
        }
        this.addUser = this.addUser.bind(this);
    }
    
    userlist() {
        const userItemList = this.state.userlist.map(
            user => {
                return <UserItem username={user} />;
            }
        );

        if(userItemList.length < this.state.maxUsers)
        {
            userItemList.push(<p className='addUser' onClick={this.addUser}>+</p>);
        }

        return userItemList;
    }

    addUser(){
        let userlist = this.state.userlist;
        let users = this.state.users;
        let l = users.length;
        let index = Math.floor(Math.random()*l);

        while(userlist.includes(users[index]))
        {
            index = Math.floor(Math.random()*l);
        }

        userlist.push(users[index]);
        this.props.onClickPlus();
        this.setState({userlist: userlist});
    }

    render(){
        return (
            <div className='groupUserList'>
                {this.userlist()}
            </div>
        );
    }
}

export class RestaurantIntroductionList extends React.Component {
    restaurantList(){
        return this.props.recommendList.map(
            item => {
                return <RestaurantItem recommendItem={item}/>;
            }
        );
    }
    
    render() {
        return (
            <div className='restaurantIntroductionList'>
                {this.restaurantList()}
            </div>
        );
    }
}

export class TasteQuestionList extends React.Component  {
    tasteQuestions() {
        return this.props.questions.map((question) => {
            return <TasteQuestion question={question}/>;
        });
    }
    
    render() {
        return (
            <div className='tasteQuestionList'>
                {this.tasteQuestions()}
                {/* <TasteQuestion question={this.props.questions[0]} /> */}
            </div>
        );
    }
}