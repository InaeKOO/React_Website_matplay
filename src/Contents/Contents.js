import React from "react";
import {PlaylistSimple, Playlist, GroupRecommendList, GroupUserList, RestaurantIntroductionList, TasteQuestionList} from "../Playlist/Playlist";
import './Contents.css';
import restaurants from "../Restaurants/Restaurants";
import { render } from "@testing-library/react";

export class MorePlaylistContent extends React.Component{
    list(){
        const playlists = this.props.playlists;
        const l = playlists.length;
        const index1 = Math.floor(Math.random()*l);
        let index2 = Math.floor(Math.random()*l);
        while(index1 === index2){
            index2 = Math.floor(Math.random()*l);
        }

        return (
            <div>
                <PlaylistSimple playlist={playlists[index1]} />
                <PlaylistSimple playlist={playlists[index2]} />
            </div>
        );
    }
    
    render(){
        return (
            <div>
                <a href='./allplay'><h1 className='morePlaylistTitle'>More Playlists</h1></a>
                {this.list()}
            </div>
        );
    }
}

export class RecommendationContent extends React.Component{
    recommend(){
        let playlists = this.props.playlists;
        let l = playlists.length;
        let index = Math.floor(Math.random()*l);

        return (
            <Playlist playlist={playlists[index]}/>
        );
    }

    title(){
        if(this.props.type==='platform-recommendation'){
            return <h1 className='recommendation-title'>맛플리의 추천!</h1>;
        }
        else if(this.props.type==='user-recommendation'){
            return <h1 className='recommendation-title'>유저들의 추천!</h1>;
        }
    }
    
    render() {
        return (
            <div className={this.props.type}>
                {this.title()}
                {this.recommend()}
            </div>
        );
    }
}

export class MyPlaylistContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 'Harry',
            list: []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(){
        const keys = Object.keys(restaurants);
        const l = keys.length;
        const index = Math.floor(Math.random()*l);
        const list = this.state.list;
        list.push(restaurants[keys[index]]);

        this.setState({list: list});
    }
 
    render(){
        return (
            <div>
                <h1 className='contentTitle'>Make your own Playlist!</h1>
                <Playlist playlist={this.state} className='playlistMy' addItem={this.addItem}/>
            </div>
        );
    }
}

export class MorePagePlaylist extends React.Component {
    morePageLists(){
        return this.props.playlists.map(playlist => {
            return <Playlist playlist={playlist} />;
        });
    }
    
    render() {
        return (
            <div>
                <h1 className='contentTitle'>All Playlists</h1>
                {this.morePageLists()}
            </div>
        );
    }
}

export class GroupRecommendContent extends React.Component {
    render() {
        return (
            <div>
                <h1 className='recommendation-title'>맛플리의 모임 맞춤 추천!</h1>
                <GroupRecommendList recommendList={this.props.recommendList}/>
            </div>
        );
    }
}

export class ChooseGroupContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickPlus: 0,
            clickButton: 0,
            clickDifference: 0
        };
        this.onClickPlus = this.onClickPlus.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickPlus(){
        let clickPlus = this.state.clickPlus;
        clickPlus++;

        this.setState({clickPlus: clickPlus});
    }

    onClickButton(){
        let difference = this.state.clickDifference;
        let clickButton = this.state.clickButton;
        clickButton+=1;

        if(this.state.clickButton < this.state.clickPlus + this.state.clickDifference){
            this.props.buttonOnClick();
        }

        difference = clickButton - this.state.clickPlus;
        this.setState({clickDifference: difference, clickButton: clickButton});
    }
    
    render() {
        return (
            <div className='chooseGroupContent'>
                <h1 className='contentTitle'>사람을 추가해주세요!</h1>
                <GroupUserList onClickPlus={this.onClickPlus}/>
                <div className='chooseGroupContent-button'>
                    <button className='button-1' role='button' onClick={this.onClickButton}>맛플리 추천 검색</button>
                    {/* <p>{this.state.clickButton} {this.state.clickPlus} {this.state.clickDifference}</p> */}
                </div>
            </div>
        );
    }
}

export class AboutRestaurantContent extends React.Component {
    render() {
        return (
            <div>
                <h1 className='aboutRestaurantContent-title'>맛플리 추천 식당에 대하여...</h1>
                <RestaurantIntroductionList recommendList={this.props.recommendList}/>
            </div>
        );
    }
}

export class CheckTastesContent extends React.Component {
    goto_main(){
        alert("감사합니다! 메인 화면으로 이동합니다.");
        window.location.href = "./";
    }

    render() {
        return (
            <div className='checkTastesContent'>
                <h1 className='taste-title'>아래 항목들의 선호도를 입력해주세요!</h1>
                <TasteQuestionList questions={this.props.questions}/>
                <div className='checkTastesContent-button'>
                    <button onClick={this.goto_main} className='button-1'>설문 종료</button>
                </div>
            </div>
        );
    }
}

export class ManualContent extends React.Component {
    render() {
        return (
            <div className="manualContent">
                {/* <h1>맛플리 소개 영상</h1> */}
                <video autoplay='autoplay' controls src={require('../image/video_Main.mp4')}></video>
                <div className='manualContent-title'>
                    <h1>맛플리 웹사이트 사용 메뉴얼</h1>
                    <a href='#login-content'><h2>- 로그인 및 회원가입</h2></a>
                    <a href='#playlist-content'><h2>- 플레이리스트 체험</h2></a>
                    <a href='#group-content'><h2>- 모임 추천 체험 </h2></a>
                </div>

                <h1>매뉴얼 사용 방법</h1>
                <p>위 매뉴얼 목차의 항목을 클릭하면 해당 섹션으로 넘어갑니다! <br /> 또한 오른쪽 상단 네비게이션 바에 매뉴얼 링크가 있으니 웹페이지를 사용하시면서 궁금한 점이 생긴다면 클릭해주세요!</p>
                <img src={require('../image/manual_0-1.png')} />

                <hr/>

                <h1 id="login-content">로그인 및 회원가입</h1>
                <h2>Step 1</h2>
                <p>우측 상단 로그인 버튼을 눌러주세요.</p>
                <img src={require('../image/manual_1-1.png')} />

                <h2>Step2</h2>
                <p>새로 회원가입을 원하시는 분들은 회원가입 하고자 하는 이메일과 비밀번호를 입력한 후 회원가입 버튼을 눌러주세요. <br /> 이메일 및 비밀번호 입력 전 회원가입 버튼을 누르지 않도록 조심하세요!</p>
                <img src={require('../image/manual_1-2.png')} />

                <h2>Step3</h2>
                <p>회원가입 후 입맛 조사 페이지로 넘어갈 것입니다. 원활한 추천을 위해 설문에 응답을 적어주세요! <br /> 슬라이더를 클릭한 뒤 방향키로 값을 조절할 수 있으니 참고해서 설문조사에 답해주세요!</p>
                <img src={require('../image/manual_1-3.png')} />

                <h2>Step4</h2>
                <p>설문을 다 작성한 후 설문 종료 버튼을 입력하면 회원가입이 마무리 됩니다.</p>
                <img src={require('../image/manual_1-4.png')} />

                <h2>Step5</h2>
                <p>로그아웃을 원하시는 분들은 우측 상단의 로그아웃 버튼을 눌러주세요.</p>
                <img src={require('../image/manual_1-5.png')} />

                <h2>Step6</h2>
                <p>다시 로그인 하기를 원하신다면 우측 상단의 로그인 버튼을 눌러주세요. 회원가입한 이메일과 비밀번호를 입력하고 로그인 버튼을 눌러주세요!</p>
                <img src={require('../image/manual_1-6.png')} />

                <hr />

                <h1 id='playlist-content'>플레이리스트 체험</h1>
                <h2>Step1</h2>
                <p>메인 화면의 Playlist 체험해보기 버튼을 선택하거나 화면 이용 도중 위 네비게이션 바의 플레이리스트를 클릭하면 체험을 시작할 수 있습니다.</p>
                <img src={require('../image/manual_2-1.png')} />
                <img src={require('../image/manual_2-2.png')} />

                <h2>Step2</h2>
                <p>사용자 데이터를 기반으로 분석한 맛플리의 추천 플레이리스트를 확인해보세요! 유저의 평점 기반 가장 인기있는 플레이리스트 역시 확인하실 수 있습니다.</p>
                <img src={require('../image/manual_2-3.png')} />

                <h2>Step3</h2>
                <p>밑으로 스크롤을 내리면 More Playlists를 통해 더 많은 사용자의 플레이리스트를 확인할 수 있으며 My Playlist를 통해 나만의 플레이리스트를 만들 수 있습니다.</p>
                <img src={require('../image/manual_2-4.png')} />

                <h2>Step4</h2>
                <p>More Playlists의 제목을 클릭하면 모든 사용자의 플레이리스트를 확인할 수 있습니다.</p>
                <img src={require('../image/manual_2-5.png')} />
                <img src={require('../image/manual_2-6.png')} />

                <h2>Step5</h2>
                <p>My Playlist를 통해 나만의 플레이리스트를 만들 수 있다. + 버튼 클릭시 랜덤하게 식당이 플레이리스트에 추가되는 것을 확인할 수 있을 것입니다.</p>
                <img src={require('../image/manual_2-7.png')} />

                <hr />

                <h1 id='group-content'>모임 추천 체험</h1>
                <h2>Step1</h2>
                <p>메인 화면의 모임 추천 체험해보기 버튼을 클릭하거나 화면 이용 도중 네비게이션 바의 모임 추천을 클릭하여 체험을 시작할 수 있습니다.</p>
                <img src={require('../image/manual_3-1.png')} />
                <img src={require('../image/manual_3-2.png')} />

                <h2>Step2</h2>
                <p>모임 추천 페이지 상단에 사람을 추가해주세요! 부분의 + 버튼을 클릭해 모임에 사람을 추가하세요. 모임의 사람은 본인 포함 최대 5명까지 랜덤하게 추가될 것입니다.</p>
                <img src={require('../image/manual_3-3.png')} />

                <h2>Step3</h2>
                <p>사람을 모두 추가했다면 맛플리 추천 검색 버튼을 클릭하면 선정한 모임에 맞는 추천을 찾아줄거에요!</p>
                <img src={require('../image/manual_3-4.png')} />
            </div>
        );
    }
}