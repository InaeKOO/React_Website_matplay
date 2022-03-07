import React from 'react';
import './IntroductionBar.css'

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