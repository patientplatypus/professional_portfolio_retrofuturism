import React, { Component } from 'react'
import glamorous from 'glamorous';
import renderIf from 'render-if';
import styled from 'styled-components';
// import TypeScreen from './TypeScreen';
// import Typist from 'react-typist';
import spacepic1 from '../../images/spacepic1.jpg';
import hexgraph from '../../images/hexgraph.png'
import {VelocityComponent} from 'velocity-react';
import {withRouter } from 'react-router-dom'
import './work.css';
import profile from '../../images/profile.jpeg';
import live0 from '../../images/live0.png';
import live1 from '../../images/live1.png';
import live2 from '../../images/live2.png';
import finance0 from '../../images/finance0.png';
import finance1 from '../../images/finance1.png';
import finance2 from '../../images/finance2.png';
import tracker0 from '../../images/tracker0.png';
import tracker1 from '../../images/tracker1.png';
import tracker2 from '../../images/tracker2.png';
import kiwi0 from '../../images/kiwi0.png';
import kiwi1 from '../../images/kiwi1.png';
import kiwi2 from '../../images/kiwi2.png';
import swapper0 from '../../images/swapper0.png';
import swapper1 from '../../images/swapper1.png';
import swapper2 from '../../images/swapper2.png';
import port10 from '../../images/port10.png';
import port11 from '../../images/port11.png';
import port12 from '../../images/port12.png';
import port20 from '../../images/port20.png';
import port21 from '../../images/port21.png';
import port22 from '../../images/port22.png';
import small0 from '../../images/small0.png';
import small1 from '../../images/small1.png';
import small2 from '../../images/small2.png';


const GridContentContainer = styled.div`
  display: grid;
  background-color: transparent;
  grid-template-columns: 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-template-rows: 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh;
  grid-gap: 0vw;
`

const Flex1 = styled.div`
  Flex: 1;
`

const ProjectorHolder = glamorous.div(
  {
    backgroundColor: 'transparent',
    opacity: '1',
    pointerEvents: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 600,
    height: '100%',
    width: '100%'
  }
)

const WorkFlexColumn = glamorous.div(
  {
    display: 'flex',
    flexDirection: 'column',
  }
)


const Work1Title = glamorous.div(
  {
    padding: '20px',
    borderRadius: '0vw 50vw 0vw 0vw',
    color: 'tomato',
    backgroundColor: 'rgba(27, 40, 180,1)',
    textAlign: 'center'
  }
)

const Work2Title = glamorous.div(
  {
    padding: '10px',
    paddingLeft: '11%',
    borderRadius: '50vw 0vw 0vw 0vw',
    color: 'tomato',//'rgba(54, 113, 249,1)',
    backgroundColor: 'rgba(27, 40, 180,1)',
    textAlign: 'left'
  }
)

const ProjectDescription = glamorous.div(
  {
    padding: '10px',
    color: 'rgb(127, 154, 203)',
    backgroundColor: 'rgba(27, 40, 230,1)'
  }
)

const ProjectItem = glamorous.div(
  {
    padding: '10px',
    textAlign: 'right',
    color: 'black',
    '&:hover':{
      // // color: 'tomato',
      // textDecoration: 'underline'
    }
  },
  ({evenodd})=>({
    backgroundColor: evenodd==="odd"?'rgba(27, 40, 230,1)':'rgba(17, 80, 200,1)',
    '&:hover':{
      background: evenodd==='odd'?'linear-gradient(to left, rgba(27, 40, 230,1), tomato)':'linear-gradient(to left, rgba(27, 40, 230,1), tomato)',
      cursor: 'pointer'
    }
  }),
  ({activestate})=>({
    color: activestate[0]===activestate[1]?'tomato':'rgb(127, 154, 203)'
  })
)

const PositionRelative = glamorous.div(
  {
    position: 'relative',
    height: '100%',
    width: '100%',
  }
)

const PositionAbsolute = glamorous.div(
  {
    position: 'absolute',
    x: 0,
    y: 0,
    height: '100%',
    width: '100%'
  },
  ({events})=>({
    pointerEvents: events[0]===events[1]?'auto':'none'
  })
)

const GridWork1 = glamorous.div(
  {
    backgroundColor: 'transparent',
    opacity: '0',
    gridRow: '2/10',
    gridColumn: '2/9',
    transform: 'translate(2.5vw, 2.4vh) scale(0.97, 0.97)'
  }
)

const GridWork1d0 = glamorous.div(
  {
    backgroundColor: '#476cad',
    opacity: '0.4',
    gridRow: '2/10',
    gridColumn: '2/9',
    transform: 'translate(2vw, 1.5vh)'
  }
)

const GridWork1d1 = glamorous.div(
  {
    backgroundColor: '#3a5ca5',
    opacity: '0.4',
    gridRow: '2/10',
    gridColumn: '2/9',
    transform: 'translate(2.5vw, 2vh)'
  }
)

const GridWork1d2 = glamorous.div(
  {
    backgroundColor: '#3C97D8',
    opacity: '0.4',
    gridRow: '2/10',
    gridColumn: '2/9',
    transform: 'translate(3vw, 3vh)'
  }
)

const GridWork2 = glamorous.div(
  {
    backgroundColor: 'transparent',
    gridRow: '11/17',
    gridColumn: '3/17',
    transform: 'translate(3.19vw, 2.6vh) scale(0.985, 0.97)'
  }
)

const GridWork2d0 = glamorous.div(
  {
    backgroundColor: '#476cad',
    opacity: '0.4',
    gridRow: '11/17',
    gridColumn: '3/17',
    transform: 'translate(2.7vw, 1.5vh)'
  }
)

const GridWork2d1 = glamorous.div(
  {
    backgroundColor: '#3a5ca5',
    opacity: '0.4',
    gridRow: '11/17',
    gridColumn: '3/17',
    transform: 'translate(3.2vw, 2vh)'
  }
)


const GridWork2d2 = glamorous.div(
  {
    backgroundColor: '#3C97D8',
    opacity: '0.4',
    gridRow: '11/17',
    gridColumn: '3/17',
    transform: 'translate(3.7vw, 3vh)'
  }
)

const GridWork3 = glamorous.div(
  {
    backgroundColor: 'transparent',
    gridRow: '2/12',
    gridColumn: '10/16',
    transform: 'translate(3vw, 2vh) scale(0.97, 0.97)',
    pointerEvents: 'none'
  }
)


const GridWork3d0 = glamorous.div(
  {
    backgroundColor: '#476cad',
    opacity: '0.4',
    gridRow: '2/12',
    gridColumn: '10/16',
    transform: 'translate(2vw, 1.5vh)',
    pointerEvents: 'none'
  }
)

const GridWork3d1 = glamorous.div(
  {
    backgroundColor: '#3a5ca5',
    opacity: '0.4',
    gridRow: '2/12',
    gridColumn: '10/16',
    transform: 'translate(2.5vw, 2vh)',
    pointerEvents: 'none'
  }
)


const GridWork3d2 = glamorous.div(
  {
    backgroundColor: '#3C97D8',
    opacity: '0.4',
    gridRow: '2/12',
    gridColumn: '10/16',
    transform: 'translate(3.0vw, 3vh)',
    pointerEvents: 'none'
  }
)

const Triangle1 = glamorous.div(
  {
    position: 'absolute',
    top: '90%',
    left: '85%',
    width: '4%',
    height: '5%',
    zIndex: 700,
    backgroundColor: 'rgb(127, 154, 203)',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    '&:hover': {
      cursor: 'pointer'
    },
  },
  ({triangle})=>({
    backgroundColor: triangle===0?'tomato':'rgb(127, 154, 203)'
  })
)

const Triangle2 = glamorous.div(
  {
    position: 'absolute',
    top: '85%',
    left: '90%',
    width: '4%',
    height: '5%',
    zIndex: 700,
    backgroundColor: 'rgb(127, 154, 203)',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    transform: 'rotate(60deg)',
    '&:hover':{
      cursor: 'pointer'
    },
  },
  ({triangle})=>({
    backgroundColor: triangle===1?'tomato':'rgb(127, 154, 203)'
  })
)

const Triangle3 = glamorous.div(
  {
    position: 'absolute',
    top: '77%',
    left: '92.5%',
    width: '4%',
    height: '5%',
    zIndex: 700,
    backgroundColor: 'rgb(127, 154, 203)',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    transform: 'rotate(0deg)',
    '&:hover':{
      cursor: 'pointer'
    },
  },
  ({triangle})=>({
    backgroundColor: triangle===2?'tomato':'rgb(127, 154, 203)'
  })
)


const GridBoxN = glamorous.div(
  {
    backgroundColor: 'transparent',
    color: 'transparent',
    borderRadius: '0px',
    borderStyle: 'dotted',
    borderWidth: '1px',
    borderColor: 'rgba(255,255,255,0.4)',
    padding: '20px',
    fontSize: '150%',
  },
  ({x})=>({
    gridColumn: `${x}/${x+1}`
  }),
  ({y})=>({
    gridRow: `${y}/${y+1}`
  }),
  ({opacity})=>({
    opacity: opacity<=2?(0.6*(opacity/2)):1,
    borderTop: opacity<1?"thin dotted rgba(255,255,255,0.4)":"none"
  }),
  ({color})=>({
    backgroundColor: color
  }),
)


const styles = {
  imagestyle: {
    maxHeight: '99.999%',
    width: '100%'
  },
  test:{
    backgroundColor: "white",
    color: "black",
    padding: "100px"
  },
  overflowscroller: {
    maxHeight: '100%',
    overflow: 'hidden',
    overflowY: 'scroll'
  },
  maxheight100: {
    maxHeight: '100%',
  },
  introduction: {
    maxHeight: '100%',
    opacity: 0
  },
  projector:{
    // height: '100%',
    // width: '100%'
  },
  projectorpoint: {
    gridRow: '16/17',
    gridColumn: '1/2',
    backgroundColor: 'transparent'
  },
  pointerEvents: {
    pointerEvents: 'none'
  },
  images:{
    maxHeight: '100%',
    maxWidth: '100%'
  },
  container: {
    overflow: 'hidden',
  }
}


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

const PictureFrame = glamorous.div(
  {
    position: 'absolute',
    top: '0%',
    left: '0%',
    height: '99%',
    width: '95%',
    zIndex: 670,
    borderBottomRightRadius: '40%',
  },
  ({background})=>({
    background: background,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  })
)


class WorkPage extends Component{
  constructor(props){
    super(props);
    this.state={
      projectactive:-1,
      fadeIn: false,
      opacitygenerated: 50,
      trianglenumber: 0,
      nexttrianglenumber: 0,
      wait: false,
      pictureframe: null
    }
    this._nodes = new Map();
  }

  componentDidMount(){
    this.setState({
      fadeIn: true
    })
    this.pictureframer(false);
    this.carouselInterval = setInterval(()=>{
      this.pictureframer(false);
    },3000)
  }

  componentWillUnmount(){
    window.clearInterval(this.carouselInterval);
  }

  triangleclicked(number){
    window.clearInterval(this.carouselInterval);
    this.setState({
      trianglenumber: number
    }, ()=>{
      this.pictureframer(true);
    })
    this.carouselInterval = setInterval(()=>{
      this.pictureframer(false);
    },3000)
  }

  resetcarousel(){
    window.clearInterval(this.carouselInterval);
    this.setState({
      trianglenumber: 0
    }, ()=>{
      this.pictureframer(true);
    })
    this.carouselInterval = setInterval(()=>{
      this.pictureframer(false);
    },3000)
  }

  pictureframer(skip){
    var self = this;
    if (skip===false){
      this.setState({
        trianglenumber: this.state.nexttrianglenumber
      })
    }
    if (this.state.projectactive===0){
      if (this.state.trianglenumber===0){
        var bgImg = new Image();
        bgImg.onload = ()=>{
          this.setState({
            nexttrianglenumber: 1,
            pictureframe: bgImg.src
          })
        };
        bgImg.src = live0;
      }else if(this.state.trianglenumber===1){
        var bgImg = new Image();
        bgImg.onload = ()=>{
          this.setState({
            nexttrianglenumber: 2,
            pictureframe: bgImg.src
          })
        };
        bgImg.src = live1
      }else if(this.state.trianglenumber===2){
        var bgImg = new Image();
        bgImg.onload = ()=>{
          this.setState({
            nexttrianglenumber: 0,
            pictureframe: bgImg.src
          })
        };
        bgImg.src = live2;
      }
    }
    if (this.state.projectactive===1){
      if (this.state.trianglenumber===0){
        var bgImg = new Image();
        bgImg.onload = ()=>{
          this.setState({
            nexttrianglenumber: 1,
            pictureframe: bgImg.src
          })
        };
        bgImg.src = finance0;
      }else if(this.state.trianglenumber===1){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 2,
          pictureframe: bgImg.src
          })
        };
        bgImg.src = finance1;
      }else if(this.state.trianglenumber===2){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 0,
          pictureframe: bgImg.src
        })
        };
        bgImg.src = finance2;
      }
    }
    if (this.state.projectactive===2){
      if (this.state.trianglenumber===0){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 1,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = tracker0;
      }else if(this.state.trianglenumber===1){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 2,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = tracker1;
      }else if(this.state.trianglenumber===2){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 0,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = tracker2;
      }
    }
    if (this.state.projectactive===3){
      if (this.state.trianglenumber===0){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 1,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = kiwi0;
      }else if(this.state.trianglenumber===1){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 2,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = kiwi1;
      }else if(this.state.trianglenumber===2){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 0,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = kiwi2;
      }
    }
    if (this.state.projectactive===4){
      if (this.state.trianglenumber===0){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 1,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = swapper0;
      }else if(this.state.trianglenumber===1){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 2,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = swapper1;
      }else if(this.state.trianglenumber===2){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 0,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = swapper2;
      }
    }
    if (this.state.projectactive===5){
      if (this.state.trianglenumber===0){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 1,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = port10;
      }else if(this.state.trianglenumber===1){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 2,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = port11;
      }else if(this.state.trianglenumber===2){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 0,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = port12;
      }
    }
    if (this.state.projectactive===6){
      if (this.state.trianglenumber===0){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 1,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = port20;
      }else if(this.state.trianglenumber===1){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 2,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = port21;
      }else if(this.state.trianglenumber===2){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 0,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = port22;
      }
    }
    if (this.state.projectactive===7){
      if (this.state.trianglenumber===0){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 1,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = small0;
      }else if(this.state.trianglenumber===1){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 2,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = small1;
      }else if(this.state.trianglenumber===2){
        var bgImg = new Image();
        bgImg.onload = ()=>{
        this.setState({
          nexttrianglenumber: 0,
          pictureframe: bgImg.src
        })
      };
      bgImg.src = small2;
      }
    }
    return(<div></div>)
  }

  render(){
    return(
      <div style={styles.container} onClick={()=>{console.log('clicked containerdiv');}}>
        <ProjectorHolder onClick={()=>{console.log('clicked ProjectorHolder');}}>

          <div className='projectora'/>
          <div className='projectorb'/>
          <div className='projectorc'/>
          <div className='projectord'/>
          <div className='projectore'/>

          <div className='projectorf'/>
          <div className='projectorg'/>
          <div className='projectorh'/>
          <div className='projectori'/>
          <div className='projectorj'/>

          {renderIf(this.state.projectactive===-1)(
            <div className='ellipseholder'>
              <div className= 'positionrelative'>
                <div className='rotate1 figureupdown1'>
                  <div className='positionrelative'>
                    <div className="blueball1"/>
                  </div>
                </div>
              </div>
            </div>
          )}

          {renderIf(this.state.projectactive===-1)(
            <div className='ellipseholder'>
              <div className= 'rotate2 positionrelative'>
                <div className='figureupdown2'>
                  <div className='positionrelative'>
                    <div className="blueball2"/>
                  </div>
                </div>
              </div>
            </div>
          )}

          {renderIf(this.state.projectactive===-1)(
            <div className='ellipseholder'>
              <div className= 'rotate3 positionrelative'>
                <div className='figureupdown3'>
                  <div className='positionrelative'>
                    <div className="blueball3"/>
                  </div>
                </div>
              </div>
            </div>
          )}

          {renderIf(this.state.projectactive===-1)(
            <div className='ellipseholder'>
              <div className= 'rotate4 positionrelative'>
                <div className='figureupdown4'>
                  <div className='positionrelative'>
                    <div className="blueball4"/>
                  </div>
                </div>
              </div>
            </div>
          )}

          {renderIf(this.state.projectactive===-1)(
            <div className='ellipseholder'>
              <div className= 'rotate5 positionrelative'>
                <div className='figureupdown5'>
                  <div className='positionrelative'>
                    <div className="blueball5"/>
                  </div>
                </div>
              </div>
            </div>
          )}

          {renderIf(this.state.projectactive===-1)(
            <div className='ellipseholder'>
              <PositionRelative>
                <div className='brainholder'>
                  <img style={styles.images} src={require('../../images/braindarkblue.png')} alt='itsalive!'/>
                </div>
              </PositionRelative>
            </div>
          )}

          {renderIf(this.state.projectactive===-1)(
            <div className='circuitparent'>
              <PositionRelative>
                <div className='circuitholder'>
                </div>
              </PositionRelative>
            </div>
          )}

        </ProjectorHolder>

        {renderIf(this.state.projectactive!==-1)(
          <div className='pictureholder' onClick={()=>{console.log('clicked pictureholder');}}>
            <div className='positionrelative' onClick={()=>{console.log('clicked picturerelative');}}>
              <PictureFrame onClick={()=>{console.log('clicked pictureframe');}} background={`url(${this.state.pictureframe})`}/>
              <Triangle1 onClick={()=>{this.triangleclicked(0)}} triangle={this.state.trianglenumber}/>
              <Triangle2 onClick={()=>{this.triangleclicked(1)}} triangle={this.state.trianglenumber}/>
              <Triangle3 onClick={()=>{this.triangleclicked(2)}} triangle={this.state.trianglenumber}/>
            </div>
          </div>
        )}


        <AbsoluteContainer z={5}>
          <GridContentContainer>
            <div style={styles.projectorpoint} ref={ (projectorpoint1) => this.projectorpoint1 = projectorpoint1}/>
            <GridWork1d0>
            </GridWork1d0>
            <GridWork1d1>
            </GridWork1d1>
            <GridWork1d2>
            </GridWork1d2>
            <GridWork2d0>
            </GridWork2d0>
            <GridWork2d1>
            </GridWork2d1>
            <GridWork2d2>
            </GridWork2d2>
            <GridWork3d0>
            </GridWork3d0>
            <GridWork3d1>
            </GridWork3d1>
            <GridWork3d2>
            </GridWork3d2>

            <VelocityComponent animation={{opacity: this.state.fadeIn===true?"1":"0"}} duration={500} delay={200}>
              <GridWork1>
                <WorkFlexColumn style={styles.maxheight100}>
                  <Flex1>
                    <Work1Title className="headers">
                      <p>
                        PROJECTS
                      </p>
                    </Work1Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <WorkFlexColumn>
                      <Flex1>
                        <ProjectItem
                          evenodd='even'
                          activestate={[this.state.projectactive, 0]}
                          onClick={()=>{this.setState({projectactive:0}); this.resetcarousel();}}
                          className='projectitem'>
                          <p>
                            Live Drawing Application
                          </p>
                        </ProjectItem>
                      </Flex1>
                      <Flex1>
                        <ProjectItem
                          evenodd='odd'
                          activestate={[this.state.projectactive, 1]}
                          onClick={()=>{this.setState({projectactive:1}); this.resetcarousel();}}
                          className='projectitem'>
                          <p>
                            Google Finance Makeover
                          </p>
                        </ProjectItem>
                      </Flex1>
                      <Flex1>
                        <ProjectItem
                          evenodd='even'
                          activestate={[this.state.projectactive, 2]}
                          onClick={()=>{this.setState({projectactive:2}); this.resetcarousel();}}
                          className='projectitem'>
                          <p>
                            Personal Job Tracker
                          </p>
                        </ProjectItem>
                      </Flex1>
                      <Flex1>
                        <ProjectItem
                          evenodd='odd'
                          activestate={[this.state.projectactive, 3]}
                          onClick={()=>{this.setState({projectactive:3}); this.resetcarousel();}}
                          className='projectitem'>
                          <p>
                            Hackathon Charity Project
                          </p>
                        </ProjectItem>
                      </Flex1>
                      <Flex1>
                        <ProjectItem
                          evenodd='even'
                          activestate={[this.state.projectactive, 4]}
                          onClick={()=>{this.setState({projectactive:4}); this.resetcarousel();}}
                          className='projectitem'>
                          <p>
                            Python Picture Swapper
                          </p>
                        </ProjectItem>
                      </Flex1>
                      <Flex1>
                        <ProjectItem
                          evenodd='odd'
                          activestate={[this.state.projectactive, 5]}
                          onClick={()=>{this.setState({projectactive:5}); this.resetcarousel();}}
                          className='projectitem'>
                          <p>
                            Portfolio v0.1
                          </p>
                        </ProjectItem>
                      </Flex1>
                      <Flex1>
                        <ProjectItem
                          evenodd='even'
                          activestate={[this.state.projectactive, 6]}
                          onClick={()=>{this.setState({projectactive:6}); this.resetcarousel();}}
                          className='projectitem'>
                          <p>
                            Portfolio v0.2
                          </p>
                        </ProjectItem>
                      </Flex1>
                      <Flex1>
                        <ProjectItem
                          evenodd='odd'
                          activestate={[this.state.projectactive, 7]}
                          onClick={()=>{this.setState({projectactive:7}); this.resetcarousel();}}
                          className='projectitem'>
                          <p>
                            Smaller Projects
                          </p>
                        </ProjectItem>
                      </Flex1>
                    </WorkFlexColumn>
                  </Flex1>
                </WorkFlexColumn>
              </GridWork1>
            </VelocityComponent>

            <GridWork2>
              <PositionRelative>
              <PositionAbsolute events={[-1, this.state.projectactive]}>
              <VelocityComponent animation={{opacity: this.state.fadeIn===true&&this.state.projectactive===-1?"1":"0", pointerEvents: this.state.projectactive===-1?"auto":"none"}} duration={1000} delay={0}>
                <WorkFlexColumn style={styles.introduction} >
                  <Flex1>
                    <Work2Title className="subheaders">
                      <p>
                        My Work
                      </p>
                    </Work2Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <ProjectDescription className="projectdescription">
                      <p>
                        Here is a portfolio of my most recent work. You can click on the links above to view project descriptions and pictures. Projects are broken up, roughly into a few categories.
                      </p>
                      <p>
                        I have one off apps that are my most recent best work. I try and keep a handful of the most recent examples at the top of the list. These pieces are motivated by the desire to demonstrate a skill or solve a specific problem.
                      </p>
                      <p>
                        I have porfolio websites that I&#39;ve iterated on. Since these are themselves public facing websites (like this one!) they are a place I can show off the latest things I&#39;ve learned. This will be the third major revision, and it really shows the improvement along the way.
                      </p>
                      <p>
                        Finally I have the smaller projects section. This is more properly a slush pile of work that is no longer what I consider my best, but are good iterations to both have a view into my own personal development and snippets of code I can go back to. Some of this code is 'deprecated' - meaning that dependencies may have changed and the code is no longer maintained.
                      </p>
                    </ProjectDescription>
                  </Flex1>
                </WorkFlexColumn>
              </VelocityComponent>
              </PositionAbsolute>
              <PositionAbsolute events={[0, this.state.projectactive]}>
              <VelocityComponent animation={{opacity: this.state.projectactive===0?"1":"0", pointerEvents: this.state.projectactive===0?"auto":"none"}} duration={1000} delay={0}>
                <WorkFlexColumn style={styles.maxheight100} >
                  <Flex1>
                    <Work2Title className="subheaders">
                      <p>
                        Live Drawing Application
                      </p>
                    </Work2Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <ProjectDescription className="projectdescription">
                      <p>
                        This is a live drawing application that I made. It allows different users to log in to the website at once and draw together at the same time. The canvas is shared by each browser client and images and brush strokes are transmitted in real time.
                      </p>
                      <p>
                        Motivation
                      </p>
                      <p>
                        I had had difficulties using sockets before in a previous project so I wanted a cool project involving the use of fast socket streaming. An art project sounded fun.
                      </p>
                      <p>
                        Technologies Used
                      </p>
                      <p>
                        The primary technologies that I used were Phoenix, which is a back end framework built on top of Elixir and Erlang, and Vue.js a javascript front end. I decided to use these technologies because Phoenix has wonderful socket support and it&#39;s functional architecture is very fast, while Vue.js is a light weight framework allowing quick development. For deployment I used an application called nanobox which is a &#39;docker lite&#39; clone that posts and packages to AWS. It was incredibly useful as it had good feature support for Phoenix. I also spent a lot of time on learning html5 canvas.
                      </p>
                      <p>
                        Features
                      </p>
                      <ul>
                        <li>Live drawing on streamed sockets</li>
                        <li>Shared timer</li>
                        <li>Color and width picker for brush strokes</li>
                        <li>Emit stickers to canvas</li>
                        <li>Socket voting on final picture</li>
                        <li>Final picture shown to all users</li>
                      </ul>
                      <a className='atagwork' href='http://pennydrop.nanoapp.io'>⚛ See Live Project!</a>
                    </ProjectDescription>
                  </Flex1>
                </WorkFlexColumn>
              </VelocityComponent>
              </PositionAbsolute>
              <PositionAbsolute events={[1, this.state.projectactive]}>
              <VelocityComponent animation={{opacity: this.state.projectactive===1?"1":"0", pointerEvents: this.state.projectactive===1?"auto":"none"}} duration={1000} delay={0}>
                <WorkFlexColumn style={styles.maxheight100} >
                  <Flex1>
                    <Work2Title className="subheaders">
                      <p>
                        Google Finance Makeover
                      </p>
                    </Work2Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <ProjectDescription className="projectdescription">
                      <p>
                        I took Google&#39;s Finance application and remade it using a more pleasing interface. I also wrote a blog post about the process and the tools that I used and published my results. The application allows a user to search for stocks on the left hand side which are populated with both historical and real time stock data (up-to-the-minute prices). On the right hand side the user can search for news articles. The articles are pindropped by time of publication onto the stock charts in a similar way to Google Finance.
                      </p>
                      <p>
                        Motivation
                      </p>
                      <p>
                        I wanted to get more visibility of my work, but I also wanted to remake an older tool into a more modern style. It seems that there&#39;s a lot of older GUI interfaces on the internet that could use more modern interfaces and aesthetics. Along the way I learned a lot and so documenting my process and what I got out of the exercise seemed like it might be useful for others.
                      </p>
                      <p>
                        Technologies Used
                      </p>
                      <p>
                        I used a few different APIs to get data, as well as a charting application called Victory Charts. I used React Motion for drop down menus, as well as React Velocity for other animations. SVG shapes were used for the time flags linking the news articles to the charts.
                      </p>
                      <p>
                        Features
                      </p>
                      <ul>
                        <li>Live Stock Data</li>
                        <li>Search for Stocks and News by API calls</li>
                        <li>News and Stocks Linked by SVG Flags, Auto Scrolling News Items</li>
                        <li>Historical Data</li>
                        <li>Victory Charts Implementation</li>
                        <li>Blog Post, with Code Snippets</li>
                      </ul>
                      <a className='atagwork' href='https://github.com/patientplatypus/professional_portfolio/tree/master/src/components/pages/blogs/blogone'>⚛ Click to See Github Repo</a>
                    </ProjectDescription>
                  </Flex1>
                </WorkFlexColumn>
              </VelocityComponent>
              </PositionAbsolute>
              <PositionAbsolute events={[2, this.state.projectactive]}>
              <VelocityComponent animation={{opacity: this.state.projectactive===2?"1":"0", pointerEvents: this.state.projectactive===2?"auto":"none"}} duration={1000} delay={0}>
                <WorkFlexColumn style={styles.maxheight100} >
                  <Flex1>
                    <Work2Title className="subheaders">
                      <p>
                        Personal Job Tracker
                      </p>
                    </Work2Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <ProjectDescription className="projectdescription">
                      <p>
                        This application was made to make the job search easier and more organized. It allows me to search for jobs by scraping job boards, keep an organized contacts list, a calendar that job items and notes can be added to, and automated email page. Voice recognition used for navigation.
                      </p>
                      <p>
                        Motivation
                      </p>
                      <p>
                        I wanted to build an application that was not only useful, but was something that I could see myself using and would be beneficial for me. I also wanted to build a fully featured app that both felt consistent and had a lot of features that could be used together. So I built a job tracker that organizes my job search and also allows me to send emails, put things on a calendar, scrape web pages, and keep a contact list.
                      </p>
                      <p>
                        Technologies Used
                      </p>
                      <p>
                        Written in react on the front end and node.js on the back end. It imports a   react-calendar component, scrapes web pages using Cheerio, uses a small node library for email delays, utilizes html5 native voice recognition features, uses react-dropzone for email attachments, material-ui for component prettification.
                      </p>
                      <p>
                        Features
                      </p>
                      <ul>
                        <li>Voice Recognition browse between tabs (ie 'go to calendar' goes to calendar page)</li>
                        <li>Website scraping on search allows user to search Meetup for meetups, and linkedin/builtinaustin for jobs. Returns items and allows user to add meetups to calendar page, and jobs to saved jobs. Saved jobs can be sent to email section.</li>
                        <li>Contact list that allows user to add contacts, add email address and search through contacts. Contact can be sent to email page along with notes about the person.</li>
                        <li>Email section allows the user to make templates that will use the job description to prepopulate the message box. Can use dropzone to add attachments to email. Also allows the user to send delayed emails.
                        Calendar section allows user to add notes, displays meetups sent to calendar as well as when an email was sent. Allows user to delete items as well.</li>
                      </ul>
                      <a className='atagwork' href='https://github.com/patientplatypus/platypusTracker'>⚛ Click to See Github Repo</a>
                    </ProjectDescription>
                  </Flex1>
                </WorkFlexColumn>
              </VelocityComponent>
              </PositionAbsolute>
              <PositionAbsolute events={[3, this.state.projectactive]}>
              <VelocityComponent animation={{opacity: this.state.projectactive===3?"1":"0", pointerEvents: this.state.projectactive===3?"auto":"none"}} duration={1000} delay={0}>
                <WorkFlexColumn style={styles.maxheight100} >
                  <Flex1>
                    <Work2Title className="subheaders">
                      <p>
                        Hackathon Charity Project
                      </p>
                    </Work2Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <ProjectDescription className="projectdescription">
                      <p>
                        At the ATXHack4Change hackathon I was on a small team that worked on this project. It&#39;s an IDE for Python that is made to be easy for children to learn how to program. It has an intuitive graphical interface and helper utilities.
                      </p>
                      <p>
                        Motivation
                      </p>
                      <p>
                        I really enjoy going to hackathons to work on cool projects and meet other developers. I chose kiwi compute not based on the idea, but I learned it was an awesome idea, but because I talked with the people on the team and thought they were nice. The project itself is an IDE that allows kids to learn Python in the browser. What makes it different from other Python IDEs is that it is very intuitive to use even for middle schoolers because it has a very nice UI and good explanations.
                      </p>
                      <p>
                        Technologies Used
                      </p>
                      <p>
                        The primary technologies that were used in the project were material-ui design for react as well as an IDE that the project champions had come with. However, my primary contribution was to create the backend in node.js. The features section will list my add-ons.
                      </p>
                      <p>
                        Backend Features
                      </p>
                      <ul>
                        <li>Written in Node.js</li>
                        <li>Uses bcrypt to hash passwords for extra security</li>
                        <li>User account creation and log in</li>
                        <li>Users can save and retrieve code</li>
                        <li>User can pick from drop down of past saved projects</li>
                        <li>Users can name projects when they save</li>
                      </ul>
                      <a className='atagwork' href='https://github.com/patientplatypus/kiwi_compute'>⚛ Click to See Github Repo</a>
                    </ProjectDescription>
                  </Flex1>
                </WorkFlexColumn>
              </VelocityComponent>
              </PositionAbsolute>
              <PositionAbsolute events={[4, this.state.projectactive]}>
              <VelocityComponent animation={{opacity: this.state.projectactive===4?"1":"0", pointerEvents: this.state.projectactive===4?"auto":"none"}} duration={1000} delay={0}>
                <WorkFlexColumn style={styles.maxheight100} >
                  <Flex1>
                    <Work2Title className="subheaders">
                      <p>
                        Python Picture Swapper
                      </p>
                    </Work2Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <ProjectDescription className="projectdescription">
                      <p>
                        I made a crud application with a Python backend that allows users to put pictures in a dashboard and trade with other users using 'platybucks'. Features mySQL database tables as well as currency inflation and purchase user flows.
                      </p>
                      <p>
                        Motivation
                      </p>
                      <p>
                        I wanted to make an application that would allow me to play around with both Python and mySQL. So I made a CRUD (Create Read Update Delete) application that allows a user to sell pictures to other users.
                      </p>
                      <p>
                        Technologies Used:
                      </p>
                      <p>
                        Written in React for the Front End and Python Flask for the backend. It uses a lot of SQL database read/writes as well as lots of flexbox for the grid layout. Uses a particularly good modal popup that I made as a plug and play standalone react component. CSS styling for the bank and 'platybucks money holder'.
                      </p>
                      <p>
                        Features
                      </p>
                      <ul>
                        <li>Users can 'buy' pictures from the internet with 20 'platybucks', a fictional currency.</li>
                        <li>Users can put their picturs up for sale to other users and buy from other users.</li>
                        <li>Platybucks container section for the user (designed in CSS - the 'bank')</li>
                        <li>User dashboard where they can see their pictures for sale.</li>
                        <li>All pictures for sale section that allows a user to see all pictures for sale and buy one.</li>
                        <li>A 'buy from other users' section where the current user can click on others, see their pictures, and buy one they have for sale</li>
                        <li>Consistent color themes with nice modal popups</li>
                        <li>Over time the currency inflates, but only the bottom 20% of users by currency get new platybucks</li>
                      </ul>
                      <a className='atagwork' href='https://github.com/patientplatypus/pythonpictureswapper'>⚛ Click to See Github Repo</a>
                    </ProjectDescription>
                  </Flex1>
                </WorkFlexColumn>
              </VelocityComponent>
              </PositionAbsolute>
              <PositionAbsolute events={[5, this.state.projectactive]}>
              <VelocityComponent animation={{opacity: this.state.projectactive===5?"1":"0", pointerEvents: this.state.projectactive===5?"auto":"none"}} duration={1000} delay={0}>
                <WorkFlexColumn style={styles.maxheight100} >
                  <Flex1>
                    <Work2Title className="subheaders">
                      <p>
                        Portfolio v0.1
                      </p>
                    </Work2Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <ProjectDescription className="projectdescription">
                      <p>
                        An old version of my portfolio (my first), it is a cool web application in it&#39;s own right. It features animations and popups, smooth scrolling and good form design using bootstrap tables.
                      </p>
                      <p>
                        Motivation
                      </p>
                      <p>
                        This was my first portfolio. I wanted it to be personalized to my own tastes, have a consistent color theme and feel that it was 'of one piece', and stand out from other people (which I wanted to accomplish in part with animations). Although it was one of the first things I built, I&#39;m pretty proud of it.
                      </p>
                      <p>
                        Technologies Used
                      </p>
                      <p>
                        Written primarily in jQuery, html, css. It uses the velocity.js animation library to position a lot of the divs on click (such as the about me header and my projects section). I use processing.js to show a pong game, google-map-react along with google maps to show an interactive modal of my travels.
                      </p>
                      <p>
                        Backend Features
                      </p>
                      <ul>
                        <li>Smooth scrolling with navigation bar on Single Page Application (SPA)</li>
                        <li>Animations using velocity.js animation library</li>
                        <li>Skills section featuring API calls, CSS div fun, and database store and retrieval</li>
                        <li>Google maps interactive picture modal</li>
                        <li>Message box that emails my gmail account</li>
                      </ul>
                      <a className='atagwork' href='https://github.com/patientplatypus/portfolio_web'>⚛ Click to See Github Repo</a>
                    </ProjectDescription>
                  </Flex1>
                </WorkFlexColumn>
              </VelocityComponent>
              </PositionAbsolute>
              <PositionAbsolute events={[6, this.state.projectactive]}>
              <VelocityComponent animation={{opacity: this.state.projectactive===6?"1":"0", pointerEvents: this.state.projectactive===6?"auto":"none"}} duration={1000} delay={0}>
                <WorkFlexColumn style={styles.maxheight100} >
                  <Flex1>
                    <Work2Title className="subheaders">
                      <p>
                        Portfolio v0.2
                      </p>
                    </Work2Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <ProjectDescription className="projectdescription">
                      <p>
                        This is my second iteartion of my professional portfolio. It contains links to my portfolio pieces as well as new blog posts and projects that were in active development. It is a more feature rich version of my original portfolio.
                      </p>
                        Motivation
                      <p>
                        My previous blog had personally fun and interesting, but I wanted a cleaner and more professional appearance. I also wanted to start at least one blog post so that I could publish my blog and advertise to a few people online.
                      </p>
                      <p>
                        Features
                      </p>
                      <ul>
                        <li>Overall clean appearance with consistent color palette.</li>
                        <li>SPA (Single Page Application) with top bar navigation.</li>
                        <li>Home Page has links to social media and popup for email.</li>
                        <li>Home Page has animation popin/popout for resume.</li>
                        <li>About Page has "Kodak" picture modal on timer with arrows (arrows animated).</li>
                        <li>Projects Page has slider overlay for each picture/project.</li>
                        <li>Blog page has 2 blogs (one in development); Algorithms Blog (small) and Google Refinance (big).</li>
                        <li>Contact Page emails me directly.</li>
                      </ul>
                      <p>
                        Technologies Used
                      </p>
                      <ul>
                        <li>React w/React Router</li>
                        <li>Flexbox</li>
                        <li>Several Animation Libraries (Velocity, React-Motion, Processing.js)</li>
                      </ul>
                      <a className='atagwork' href='https://github.com/patientplatypus/professional_portfolio'>⚛ Click to See Github Repo</a>
                    </ProjectDescription>
                  </Flex1>
                </WorkFlexColumn>
              </VelocityComponent>
              </PositionAbsolute>
              <PositionAbsolute events={[7, this.state.projectactive]}>
              <VelocityComponent animation={{opacity: this.state.projectactive===7?"1":"0", pointerEvents: this.state.projectactive===7?"auto":"none"}} duration={1000} delay={0}>
                <WorkFlexColumn style={styles.maxheight100} >
                  <Flex1>
                    <Work2Title className="subheaders">
                      <p>
                        Smaller Projects
                      </p>
                    </Work2Title>
                  </Flex1>
                  <Flex1 style={styles.overflowscroller}>
                    <ProjectDescription className="projectdescription">
                      <p>
                        Here is a list of small projects and miscellaneous code that I've written. Some of it is deprecated or buggy so it doesn't work - for these I have not had time to go back and fix them up, but you can check out the code to see my thought process. Others I have also listed as deprecated as they may be in exotic languages and I have not had the time to get the code base back up. I&#39;ve included sections to links for deprecated and working examples.
                      </p>
                      <p>
                        Working Examples
                      </p>
                      <p>
                        Here are links to a few small toys. I&#ve been playing on and off with things like Rust and Go lang for a while, so here is a working project link to a "Towers of Hanoi" puzzle solver in Rust. I also have here tic-tac-toe made in Python 3 - it has an "AI" that will play against you and win if you make an incorrect move. I have a ping pong game that I made in a language called Processing (here it is processing.js as it is ported to work in html canvas). This last is linked to in my first portfolio. Finally, I have a business card (and outdated resume) that I made in html and css for fun.
                      </p>
                      <a className='atagwork' href='https://play.integer32.com/?gist=1cf6b353444e2cab17fbfccd3193d5ef&version=undefined'>⚛ Towers of Hanoi</a>
                      <a className='atagwork' href='https://repl.it/HzbX'>⚛ Tic Tac Toe</a>
                      <a className='atagwork' href='https://github.com/patientplatypus/portfolio_web/blob/master/js/pingpong.pde'>⚛ Ping Pong</a>
                      <a className='atagwork' href='https://github.com/patientplatypus/resume_html'>⚛ Old Resume</a>
                      <a className='atagwork' href='https://github.com/patientplatypus/businesscards'>⚛ Business Cards</a>
                      <p>
                        Deprecated Code
                      </p>
                      <p>
                      I have in my deprecated list two mobile applications. Each of these is working, but is little more than a boilerplate. However, I did learn about strict typing while developing the iOs Swift application and it does run - it even taught me how to use redux in iOs. The React Native application was the first time that I&#39;ve used mobX, another state management library, and I found that to be very useful. The last link is a Sudoku Solver written in Go lang. Given a Sudoku puzzle it will programmatically will solve it. The code may not be runnable, given dependency and environment updating, but it is a nice example to look at.
                      </p>
                      <a className='atagwork' href='https://github.com/patientplatypus/FirstSwiftProj'>⚛ Swift</a>
                      <a className='atagwork' href='https://github.com/patientplatypus/reactnativemobx'>⚛ React Native</a>
                      <a className='atagwork' href='https://github.com/patientplatypus/SudokuSolver'>⚛ Sudoku Solver</a>
                    </ProjectDescription>
                  </Flex1>
                </WorkFlexColumn>
              </VelocityComponent>
              </PositionAbsolute>
              </PositionRelative>
            </GridWork2>

            <GridWork3>
            </GridWork3>

          </GridContentContainer>
        </AbsoluteContainer>
        <AbsoluteContainer z={3}>
          <img style={styles.imagestyle} src={spacepic1} alt=""/>
        </AbsoluteContainer>
        <AbsoluteContainer z={4}>
          <div className='hexgraph'/>
        </AbsoluteContainer>
      </div>
    )
  }
}

export default withRouter(WorkPage)
