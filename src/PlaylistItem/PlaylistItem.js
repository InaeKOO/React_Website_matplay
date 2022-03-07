import React from 'react';
import './PlaylistItem.css';
import {Slider} from 'react-input-slider';
import {InputRange} from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export class PlaylistItem extends React.Component{
    render(){
        return (
            <a href={this.props.item.url} target='_blank'>
                <div className='item'>
                    <img src = {this.props.item.imageUrl} />
                    <p className='restaurant-name'>{this.props.item.name}</p>
                    <div className='restaurant-description'>
                        <div className='restaurant-info'>
                            <p className='restaurant-type'>{this.props.item.type}</p>
                        </div>
                        <div className='restaurant-review'>
                            <p className='restaurant-rating'>{this.props.item.rating}</p>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export class PlaylistItemSimple extends React.Component{
    render() {
        return (
            <a href={this.props.item.url} target='_blank'>
                <div className='simple-item'>
                    <p className='restaurant-name'>{this.props.item.name}</p>
                    <div className='restaurant-description'>
                        <div className='restaurant-info'>
                            <p className='restaurant-type'>{this.props.item.type}</p>
                        </div>
                        <div className='restaurant-review'>
                            <p className='restaurant-rating'>{this.props.item.rating}</p>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export class UserItem extends React.Component{
    render() {
        return (
            <div class='userItem'>
                <p>{this.props.username}</p>
            </div>
        );
    }
}

export class RestaurantItem extends React.Component{
    render() {
        return (
            <div className='restaurantItem'>
                <PlaylistItem item={this.props.recommendItem}/>
                <div className='restaurantItemExplanation'>
                    <p className='restaurantItemExplanation-title'>설명</p>
                    <p className='restaurantItemExplanation-explanation'>{this.props.recommendItem.explanation}</p>
                    {/* <p className='restaurantItemExplanation-title'>평점</p> */}
                </div>
            </div>
        );
    }
}

class Slider1 extends React.Component {
    onChange = range => {
      this.props.onChange({
        type: this.props.data.label,
        value: range
      });
    }
    render() {
      const { min, max, step, value, label } = this.props.data;
      return (
        <div className="slider">
          <label>{label}</label>
          <InputRange
            minValue={min}
            maxValue={max}
            step={step}
            onChange={this.onChange}
            value={value}
          />
        </div>
      )
    }
  } 

export class TasteQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            val: 10
        };
        this.inputSlider = this.inputSlider.bind(this);
    }

    inputSlider(){
        const slider = document.getElementById(`${this.props.question}-slider`);
        const selector = document.getElementById(`${this.props.question}-selector`);
        // const slider = document.getElementById(`slider`);
        // const selector = document.getElementById(`selector`);
        const left = 17 + slider.value * 6;

        selector.style.marginLeft = left + "%";

        this.setState({val: slider.value});
    }
    
    render() {
        return (
            <div className='tasteQuestion'>
                <h2 className='tasteQuestion-title'>{this.props.question}</h2>
                <form className='tasteQuestion-form'>
                    <div id={`${this.props.question}-selector`}>
                        {/* <div className='SelectBtn'></div> */}
                        <div className='SelectValue'>{this.state.val}</div>
                    </div>
                    <div className='question-slider'>
                        <p>정말 싫어요!</p>
                        <input class="slideContainer" type='range' min='1' max='10' id={`${this.props.question}-slider`} onInput={this.inputSlider}/>
                        {/* <div>
                            ({state.x}, {state.y})
                            <Slider axis="xy" x={state.x} y={state.y} onChange={setState} />
                            <Slider
                                axis="x"
                                x={state.x}
                                onChange={({ x }) => setState(state => ({ ...state, x }))}
                            />
                        <Slider axis="y" y={state.y} onChange={({ y }) => setState(state => ({ ...state, y }))} />
                        </div> */}
                        {/* <input class="slideContainer" type='range' min='1' max='10' id={`slider`} onInput={this.inputSlider}/> */}
                        <p>너무 좋아요!</p>
                    </div>
                </form>
            </div>
        );
    }
}