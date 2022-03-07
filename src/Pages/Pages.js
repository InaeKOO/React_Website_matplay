import React from 'react';
import './Pages.css';
import restaurants from '../Restaurants/Restaurants';
import { RecommendationContent, MorePlaylistContent, MyPlaylistContent, MorePagePlaylist, GroupRecommendContent, ChooseGroupContent, AboutRestaurantContent, CheckTastesContent, ManualContent } from '../Contents/Contents';
import { IntroductionBar, TitleBar } from '../Bar/Bar';

const playlists = [
    {
        id: 'Hyunjun',
        list: [
            restaurants['제주상회'],
            restaurants['차이나당'],
            restaurants['로향 양꼬치']
        ]
    },
    {
        id: 'Minjun',
        list: [
            restaurants['제주상회'],
            restaurants['에그썸'],
            restaurants['로향 양꼬치']
        ]
    },
    {
        id: 'Inae',
        list: [
            restaurants['에그썸'],
            restaurants['차이나당'],
            restaurants['로향 양꼬치']
        ]
    },
    {
        id: 'Hongnyeong',
        list: [
            restaurants['제주상회'],
            restaurants['에그썸'],
            restaurants['차이나당'],
        ]
    }
];

const questions = [
    '중식',
    '양식',
    '한식',
    '일식',
    '짠 음식',
    '기름진 음식',
    '느끼한 음식(까르보나라와 같은 느끼함)',
    '깔끔한 맛(개운한 맛)',
    '담백한 음식',
    '매운 음식',
    '조용한 분위기',
    '신나는 분위기',
    '해산물',
    '카레',
    '패스트푸트',
    '구이류(곱창, 고기)',
    '덮밥',
    '국밥',
    '파스타',
    '국물 있는 면류(국수, 쌀국수)'
];

export class PlaylistPage extends React.Component{
    render() {
        return (
            <div>
                {/* <h1 className='pageName'>맛플리</h1> */}
                <TitleBar />
                <div className='main-platform-recommendation-bar'>
                    <RecommendationContent playlists={playlists} type='platform-recommendation'/>
                </div>
                <div className='main-user-recommendation-bar'>
                    <RecommendationContent playlists={playlists} type='user-recommendation'/>
                </div>
                <div className='main-morePlaylist'>
                    <MorePlaylistContent playlists={playlists}/>
                </div>
                <div className='main-myPlaylist'>
                    <MyPlaylistContent/>
                </div>
                <IntroductionBar />
            </div>
        );
    }
}

export class MorePage extends React.Component {
    render() {
        return (
            <div>
                <TitleBar />
                <div className='morePlaylist'>
                    <MorePagePlaylist playlists={playlists}/>
                </div>
                <IntroductionBar />
            </div>
        );
    }
}

export class GroupRecommendPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                restaurants['제주상회'],
                restaurants['에그썸']
            ]
        };
        this.giveRecommendation = this.giveRecommendation.bind(this);
    }

    giveRecommendation(){
        const keys = Object.keys(restaurants);
        const l = keys.length;
        let list = [];
        const index1 = Math.floor(Math.random()*l);
        let index2 = Math.floor(Math.random()*l);
        while(index1 === index2){
            index2 = Math.floor(Math.random()*l);
        }

        list.push(restaurants[keys[index1]]);
        list.push(restaurants[keys[index2]]);

        this.setState({list: list});
    }
    
    render() {
        return (
            <div>
                <TitleBar />
                <div className='chooseGroupContent'>
                    <ChooseGroupContent buttonOnClick={this.giveRecommendation}/>
                </div>
                <div className='groupRecommendContent'>
                    <GroupRecommendContent recommendList={this.state.list}/>
                </div>
                <div className='aboutRestaurantContent'>
                    <AboutRestaurantContent recommendList={this.state.list}/>
                </div>
                <IntroductionBar />
            </div>
        );
    }
}

export class CheckTastes extends React.Component {
    render() {
        return (
            <div>
                <TitleBar />
                <CheckTastesContent questions={questions}/>
                <IntroductionBar />
            </div>
        );
    }
}

export class Manual extends React.Component {
    render(){
        return (
            <div className='manual'>
                <TitleBar />
                {/* <figure class="wp-block-video"><video autoplay controls loop src="../image/홍보영상_Main.mp4"></video></figure> */}
                {/* <iframe width="853" height="480" src="../image/홍보영상_Main.mp4" frameborder="0"></iframe> */}
                <ManualContent />
                <IntroductionBar />
            </div>
        );
    }
}