import './Bar.css'
import React from 'react'
import LoginButton from '../LoginButton/LoginButton';

export class TitleBar extends React.Component {
    render() {
        return (
            <div className='titleBar'>
                <div className='logo'>
                    <a href='./'><img className='matplay-logo' src={require('../image/logo.png')}/></a>
                </div>
                <div className='menu'>
                    <a href='./playlist'><p>플레이리스트</p></a>
                    <a href='./recommend'><p>모임 추천</p></a>
                    <a href='./manual'><p>메뉴얼</p></a>
                    <div className='bar_login'>
                        <LoginButton />
                    </div>
                </div>
            </div>
        );
    }
}

export class IntroductionBar extends React.Component {
    render(){
        return (
            <div className='introductionBar'>
                <hr/>
                <p className='introductionBar-teamName'>Team 빅문가들</p>
            </div>
        );
    }
}