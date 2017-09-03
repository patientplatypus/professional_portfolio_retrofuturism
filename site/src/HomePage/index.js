import React, { Component } from 'react'
import glamorous from 'glamorous';
import renderIf from 'render-if';
import styled from 'styled-components';
// import TypeScreen from './TypeScreen';
// import Typist from 'react-typist';
import spacepic1 from '../../images/spacepic1.jpg';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import { Switch, Route, RedirectWithStatus,  BrowserRouter as Router, withRouter } from 'react-router-dom'
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import mobxStore from '../../store/mobxStore';
import {Motion, spring, StaggeredMotion} from 'react-motion';
import { Redirect } from 'react-router'

const GridContentContainer = styled.div`
  display: grid;
  background-color: transparent;
  grid-template-columns: repeat(20, 4vw);
  grid-template-rows: repeat(17, 5vh);
  grid-gap: 0vw;
`

const RelativeContainer = styled.div`
  position: relative;
  width: 85vw;
  height: 100vh;
`

const AbsoluteContainer = glamorous.div(
  {
    position: 'absolute',
    x: '0',
    y: '0',
    width: '100%',
    height: '100%'
  },
  ({z})=>({
    zIndex: z
  }),
)



const GridBigContainer = styled.div`
  display: grid;
  grid-template-columns: 25vw auto;
  grid-template-rows: 5vh 94.8vh;
  grid-gap: 0.2vw;
  background-color: #fff;
  color: #444;
`

const OverflowBox = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  overflow: scroll;
`

const TitleBox = styled.div`
  background-color: blue;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: 150%;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`

const GridBox1 = styled.div`
  background-color: blue;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const GridBoxSideBar = styled.div`
  background-color: red;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

const GridBox2 = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  grid-column: 2 / 3;
  grid-row: 1 / 4;
`

const GridBox3 = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  grid-column: 3 / 4;
  grid-row: 1 / 4;
`

const GridBoxN = glamorous.div(
  {
    backgroundColor: 'transparent',
    color: 'transparent',
    borderRadius: '0px',
    borderStyle: 'dotted',
    borderWidth: '1px',
    borderColor: 'rgba(255,255,255,1)',
    padding: '20px',
    fontSize: '150%',
  },
  ({x})=>({
    gridColumn: `${x}/${x+1}`
  }),
  ({y})=>({
    gridRow: `${y}/${y+1}`
  }),
  ({color})=>({
    backgroundColor: color
  })
)


const RouterBox = ({test}) => {
  console.log(test);
  return (
    <div></div>
  )
}

const styles = {
  imagestyle: {
    maxHeight: '99.999%',
    width: '100%'
  },
}


class GridBoxContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      colorarray: [
        {r: 19, g: 198, b: 180},
        {r: 0, g: 171, b: 231},
        {r: 255, g: 81, b: 165},
        {r: 237, g: 33, b: 124},
        {r: 80, g: 216, b: 215},
      ],
    }
    this._nodes = new Map();
  }

  render(){
    return(
      <Motion
         defaultStyle={{ r: mobxStore.colorboxprev.r, g: mobxStore.colorboxprev.g , b: mobxStore.colorboxprev.b , a: 0}}
         style={{ r: spring(mobxStore.colorbox.r),  g: spring(mobxStore.colorbox.g),  b: spring(mobxStore.colorbox.b), a: 0.4}}
       >
         {style =>
           (
             <GridBoxN x={this.props.x} y={this.props.y} key={this.props.key} color={`rgba(${style.r}, ${style.g}, ${style.b}, ${style.a})`}/>
           )
         }
      </Motion>
    )
  }
}

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={
      boxcolor: 'transparent'
    }
  }

  gridboxfunc(){
    var matrix = [];
    for (var x = 1; x <= 17; x++) {
      for (var y = 1; y <= 19; y++ ){
        var key = "" + x + "-" + y
        matrix.push({"x": x, "y": y, "key": key})
      }
    }
    console.log("matrix test: ", matrix[10]['y']);
    let gridboxes = matrix.map(onebox=>{
        return(
          <VelocityComponent animation={{backgroundColorRed: mobxStore.colorbox.r, backgroundColorGreen: mobxStore.colorbox.g, backgroundColorBlue: mobxStore.colorbox.b, backgroundColorAlpha: 0.1}} duration={1000} delay={200*(onebox['x']+onebox['y'])}>
            <GridBoxN x={onebox['x']} y={onebox['y']} key={onebox['key']}/>
          </VelocityComponent>
        )
      })
    console.log('gridboxes is: ', gridboxes);
    return(gridboxes)
  }



  checkNodes() {
    Array.from(this._nodes.values())
        .filter(node => node != null)
        .forEach(node => {
            // do something with node
        });
  }

  render(){
    return (
        <div style={styles.container}>
          <AbsoluteContainer z={4}>
            <GridContentContainer>
              {this.gridboxfunc()}
            </GridContentContainer>
          </AbsoluteContainer>
          <AbsoluteContainer z={3}>
            <img style={styles.imagestyle} src={spacepic1}/>
          </AbsoluteContainer>
        </div>
    )
  }
}

export default withRouter(HomePage)
