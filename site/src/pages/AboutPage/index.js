import React, { Component } from 'react'
import glamorous from 'glamorous';
import renderIf from 'render-if';
import styled from 'styled-components';
import spacepic1 from '../../images/spacepic1.jpg';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import { Switch, Route, RedirectWithStatus,  BrowserRouter as Router, withRouter } from 'react-router-dom'
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import mobxStore from '../../store/mobxStore';
import { css } from 'glamor';
import {Motion, spring, StaggeredMotion} from 'react-motion';
import { Redirect } from 'react-router'
import './about.css';


const GridContentContainer = styled.div`
  display: grid;
  background-color: transparent;
  grid-template-columns: 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-template-rows: 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh;
  grid-gap: 0vw;
`

const PositionRelative = glamorous.div(
  {
    position: 'relative',
    height: '100%',
    width: '100%'
  }
)

const PositionAbsolute = glamorous.div(
  {
    position: 'absolute',
    left: '0%',
    top: '100%',
    height: '100%',
    width: '100%'
  },
  ({top})=>({
    top: top
  })
)

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

const FixedContainer = glamorous.div(
  {
    position: 'fixed',
    x: '0',
    y: '0',
    width: '100%',
    height: '100%'
  },
  ({z})=>({
    zIndex: z
  }),
)

const Cutout1 = glamorous.div(
  {
    position: 'absolute',
    display: 'inline-block',
    left: '72%',
    top: '43%',
    width: '10%',
    height: '10%',
    backgroundColor: 'rgb(230,165,0)',
    margin: '0',
    padding: '0',
    clipPath: 'polygon(50% 0, 75% 10%, 100% 0, 100% 100%, 75% 90%, 50% 100%, 25% 90%, 0 100%, 0 0, 25% 10%)'
  },
  ({top})=>({
    top: top
  }),
  ({left})=>({
    left: left
  })
)


const Cutout2 = glamorous.div(
  {
    position: 'absolute',
    display: 'inline-block',
    left: '72%',
    top: '43%',
    width: '10%',
    height: '10%',
    margin: '0',
    padding: '0',
    backgroundColor: 'rgb(230,165,0)',
    clipPath: 'polygon(50% 10%, 75% 0, 100% 10%, 100% 90%, 75% 100%, 50% 90%, 25% 100%, 0 90%, 0 10%, 25% 0)'
  },
  ({top})=>({
    top: top
  }),
  ({left})=>({
    left: left
  })
)



const RealProfile = glamorous.div(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '10%',
    height: '10%',
    background: 'url("../../images/realprofile.jpg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
)


const styles = {
  image: {
    maxHeight: '100%',
    width: '100%'
  },
  images: {
    height: '100%',
    width: '100%'
  },
  images2: {
    height: '50%',
    width: 'auto'
  },
  gridboxtrial: {
    gridRow: '8/9',
    gridColumn: '8/9',
    backgroundColor: 'orange'
  },
  gridboxtrial1: {
    gridRow: '4/5',
    gridColumn: '4/5',
    backgroundColor: 'purple'
  },
  projector:{
    position: 'fixed',
    x: 0,
    y: 0
  },
  pointerEvents:{
    pointerEvents: 'none'
  }
}

const pulse = css.keyframes({
  '0%': { height: .03*window.innerWidth, width: .03*window.innerWidth},
  '100%': { height: .033*window.innerWidth,width: .033*window.innerWidth}
})

const EquilateralTriangle = glamorous.div(
  {
    position: 'absolute',
    width: .03*window.innerWidth,
    height: .03*window.innerWidth,
    clipPath: 'polygon(0 0, 100% 0, 50% 86.603%)',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: 'transparent',
    transformOrigin: `50% 100%`,
  },
  ({transform})=>({
    transform: transform
  }),
  ({size})=>({
    width: size,
    height: size
  }),
  ({color})=>({
    backgroundColor: color
  }),
  ({top})=>({
    top: top
  }),
  ({left})=>({
    left: left
  }),
  ({transformOrigin})=>({
    transformOrigin: transformOrigin
  })
)

const ModalPicture = glamorous.div(
  {
    postion: 'absolute',
    top: '0',
    left: '0',
    height: "100%",
    width: "100%",
  },
  ({url})=>({
    background: url,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  })
)

const EquilateralHexagon = glamorous.div(
  {
    position: 'absolute',
    width: .025*window.innerWidth,
    height: .025*window.innerWidth,
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: 'transparent',
  },
  ({transform})=>({
    transform: transform
  }),
  ({size})=>({
    width: size,
    height: size
  }),
  ({color})=>({
    backgroundColor: color
  }),
  ({top})=>({
    top: top
  }),
  ({left})=>({
    left: left
  })
)


class AboutPage extends Component{
  constructor(props){
    super(props);
    this.state={
      boxcolor: 'transparent',
      extendarm: false,
      animationdone: 0,
      icounter: 0,
      renderbeam: 0,
      triangle0clicked: false,
      triangle1clicked: false,
      triangle2clicked: false,
      triangle3clicked: false,
      triangle4clicked: false,
      triangle5clicked: false,
      jigsaw: 0,
      fadeinrighttextbox: false,
      flyhexagons: true,
      imgmodal: null,
      openPictureModal: false,
    }
  }

  componentDidMount(){
    if (this.state.renderbeam<6){
      setTimeout(()=>{
        this.setState({
          renderbeam: this.state.renderbeam+1
        })
      },500)
    }
  }

  windowopener(url){
    window.open(url);
  }

  triangleclicked(number){
    if (number===0){
      this.setState({
        triangle0clicked: true,
        triangle1clicked: false,
        triangle2clicked: false,
        triangle3clicked: false,
        triangle4clicked: false,
        triangle5clicked: false
      })
    }
    if (number===1){
      this.setState({
        triangle0clicked: false,
        triangle1clicked: true,
        triangle2clicked: false,
        triangle3clicked: false,
        triangle4clicked: false,
        triangle5clicked: false
      })
    }
    if (number===2){
      this.setState({
        triangle0clicked: false,
        triangle1clicked: false,
        triangle2clicked: true,
        triangle3clicked: false,
        triangle4clicked: false,
        triangle5clicked: false
      })
    }
    if (number===3){
      this.setState({
        triangle0clicked: false,
        triangle1clicked: false,
        triangle2clicked: false,
        triangle3clicked: true,
        triangle4clicked: false,
        triangle5clicked: false
      })
    }
    if (number===4){
      this.setState({
        triangle0clicked: false,
        triangle1clicked: false,
        triangle2clicked: false,
        triangle3clicked: false,
        triangle4clicked: true,
        triangle5clicked: false
      })
    }
    if (number===5){
      this.setState({
        triangle0clicked: false,
        triangle1clicked: false,
        triangle2clicked: false,
        triangle3clicked: false,
        triangle4clicked: false,
        triangle5clicked: true
      })
    }
  }

  windowopener(url){
    window.open(url);
  }

  jigsawrest(){
    this.setState({
      fadeinrighttextbox: true
    },()=>{
      setTimeout(()=>{
        this.setState({
          flyhexagons: true
        })
      },1100)
    })
  }

  render(){
    return (
        <div style={styles.container}>
          <AbsoluteContainer style={styles.pointerEvents} z={6}>
            <div className='jet2'/>
            <div className='jet3'/>
            <div className='jet4'/>
            <div className='binary1'>
              <p>
                1
              </p>
            </div>
            <div className='binary2'>
              <p>
                0
              </p>
            </div>
            <div className='binary3'>
              <p>
                1
              </p>
            </div>
            <div className='binary4'>
              <p>
                0
              </p>
            </div>
            <div className='binary5'>
              <p>
                1
              </p>
            </div>
            <div className='binary6'>
              <p>
                0
              </p>
            </div>
            <div className='binary7'>
              <p>
                1
              </p>
            </div>
            <div className='binary8'>
              <p>
                0
              </p>
            </div>
            <div className='binary9'>
              <p>
                1
              </p>
            </div>
            <div className='binary10'>
              <p>
                0
              </p>
            </div>
          </AbsoluteContainer>
          <AbsoluteContainer style={styles.pointerEvents} z={11}>
            <div className='profiletriangle1'/>
          </AbsoluteContainer>
          <AbsoluteContainer style={styles.pointerEvents} z={13}>
            <div className='profilecircle1'/>
          </AbsoluteContainer>
          <AbsoluteContainer style={styles.pointerEvents} z={12}>
            <div className='profiletriangle3'/>
          </AbsoluteContainer>
          <AbsoluteContainer style={styles.pointerEvents} z={22}>
            <div className='realprofile'>
              <img style={styles.images} src={require('../../images/realprofile.jpg')} alt=''/>
            </div>
          </AbsoluteContainer>
          <AbsoluteContainer style={styles.pointerEvents} z={25}>
            <PositionRelative>
              {renderIf(this.state.fadeinrighttextbox===true)(
                <div className='righttextbox'>
                  <div className='centerjustify'>
                    <p>This page is all about me.</p>
                  </div>
                  <div className='rightjustify'>
                    <p>By clicking on the triangles in the hexagon above you can learn about my past work history, which includes more details than my current resume - some of my accomplishments were more specific to other industries. I&#39;ve also included a personal triangle or two to show off my traveling pictures and prove I have more personality than a robot!</p>
                  </div>
                  <div className='leftjustify'>
                    <p>
                      Click on the triangles to explore!
                    </p>
                  </div>
                </div>
              )}
            </PositionRelative>
          </AbsoluteContainer>
          <Motion
            defaultStyle={{ settop: 110}}
            style={{settop: spring(43, {stiffness: 100, damping: 20}) }}
            onRest={()=>{this.jigsawrest()}}
          >
            {style =>
              (
                <AbsoluteContainer style={styles.pointerEvents} z={23}>
                {
                  <PositionRelative>
                    <PositionAbsolute top={`${style.settop}%`}>
                      <PositionRelative>
                        <Cutout1 top={`0%`} left={'65%'}/>
                        <Cutout2 top={`0%`} left={'65%'}/>
                        <Cutout1 top={`0%`} left={'74.95%'}/>
                        <Cutout2 top={`0%`} left={'74.95%'}/>
                        <Cutout1 top={`0%`} left={'84.9%'}/>
                        <Cutout2 top={`0%`} left={'84.9%'}/>
                      </PositionRelative>
                    </PositionAbsolute>
                    <PositionAbsolute top={`${style.settop*52.45/43}%`}>
                      <PositionRelative>
                        <Cutout1 top={`0%`} left={'66.2%'}/>
                        <Cutout2 top={`0%`} left={'66.2%'}/>
                        <Cutout1 top={`0%`} left={'76.15%'}/>
                        <Cutout2 top={`0%`} left={'76.15%'}/>
                        <Cutout1 top={`0%`} left={'86.1%'}/>
                        <Cutout2 top={`0%`} left={'86.1%'}/>
                      </PositionRelative>
                    </PositionAbsolute>
                    <PositionAbsolute top={`${style.settop*61.9/43}%`}>
                      <PositionRelative>
                        <Cutout1 top={`0%`} left={'65%'}/>
                        <Cutout2 top={`0%`} left={'65%'}/>
                        <Cutout1 top={`0%`} left={'74.95%'}/>
                        <Cutout2 top={`0%`} left={'74.95%'}/>
                        <Cutout1 top={`0%`} left={'84.9%'}/>
                        <Cutout2 top={`0%`} left={'84.9%'}/>
                      </PositionRelative>
                    </PositionAbsolute>
                    <PositionAbsolute top={`${style.settop*71.35/43}%`}>
                      <PositionRelative>
                        <Cutout1 top={`0%`} left={'66.2%'}/>
                        <Cutout2 top={`0%`} left={'66.2%'}/>
                        <Cutout1 top={`0%`} left={'76.15%'}/>
                        <Cutout2 top={`0%`} left={'76.15%'}/>
                        <Cutout1 top={`0%`} left={'86.1%'}/>
                        <Cutout2 top={`0%`} left={'86.1%'}/>
                      </PositionRelative>
                    </PositionAbsolute>
                    <PositionAbsolute top={`${style.settop*80.8/43}%`}>
                      <PositionRelative>
                        <Cutout1 top={`0%`} left={'65%'}/>
                        <Cutout2 top={`0%`} left={'65%'}/>
                        <Cutout1 top={`0%`} left={'74.95%'}/>
                        <Cutout2 top={`0%`} left={'74.95%'}/>
                        <Cutout1 top={`0%`} left={'84.9%'}/>
                        <Cutout2 top={`0%`} left={'84.9%'}/>
                      </PositionRelative>
                    </PositionAbsolute>
                  </PositionRelative>
                }
                </AbsoluteContainer>
              )
            }
          </Motion>
          <AbsoluteContainer z={21}>
            <PositionRelative>
              {renderIf(this.state.triangle0clicked===false)(
                <EquilateralTriangle onClick={()=>{this.triangleclicked(0)}} className='triangle0' size={.04*window.innerWidth}  top={.1*window.innerHeight} left={.1*window.innerWidth} transform={`rotate(0deg)`}/>
              )}
              {renderIf(this.state.triangle1clicked===false)(
                <EquilateralTriangle onClick={()=>{this.triangleclicked(1)}} className='triangle1' size={.04*window.innerWidth} top={.1*window.innerHeight} left={.1*window.innerWidth} transform={`rotate(60deg)`}/>
              )}
              {renderIf(this.state.triangle2clicked===false)(
                <EquilateralTriangle onClick={()=>{this.triangleclicked(2)}} className='triangle2' size={.04*window.innerWidth} top={.1*window.innerHeight} left={.1*window.innerWidth} transform={`rotate(120deg)`}/>
              )}
              {renderIf(this.state.triangle3clicked===false)(
                <EquilateralTriangle onClick={()=>{this.triangleclicked(3)}} className='triangle3' size={.04*window.innerWidth} top={.1*window.innerHeight} left={.1*window.innerWidth} transform={`rotate(180deg)`}/>
              )}
              {renderIf(this.state.triangle4clicked===false)(
                <EquilateralTriangle onClick={()=>{this.triangleclicked(4)}} className='triangle4' size={.04*window.innerWidth} top={.1*window.innerHeight} left={.1*window.innerWidth} transform={`rotate(240deg)`}/>
              )}
              {renderIf(this.state.triangle5clicked===false)(
                <EquilateralTriangle onClick={()=>{this.triangleclicked(5)}} className='triangle5' size={.04*window.innerWidth} top={.1*window.innerHeight} left={.1*window.innerWidth} transform={`rotate(300deg)`}/>
              )}

              {renderIf(this.state.triangle0clicked===true)(
                <Motion
                  defaultStyle={{ setrotation: 0, setlocation: 0}}
                  style={{setrotation: spring(120, {stiffness: 60, damping: 20}), setlocation:  spring(100, {stiffness: 60, damping: 20})
                  }}
                >
                  {style =>
                    (
                      <div>
                      {
                        <EquilateralTriangle className='triangle0clicked' size={.04*window.innerWidth}  top={(.12+(style.setlocation/1000))*window.innerHeight} left={(.1+(style.setlocation/10000))*window.innerWidth} transform={`rotate(${style.setrotation}deg)`} transformOrigin={'50% 100%'}/>
                      }
                      </div>
                    )
                  }
                </Motion>
              )}
              {renderIf(this.state.triangle1clicked===true)(
                <Motion
                  defaultStyle={{ setrotation: 60, setlocation: 0, settransform:100}}
                  style={{setrotation: spring(120, {stiffness: 100, damping: 20}), setlocation:  spring(100, {stiffness: 60, damping: 20}), settransform:spring(100, {stiffness:100,damping:10})
                  }}
                >
                  {style =>
                    (
                      <div>
                      {
                        <EquilateralTriangle className='triangle1clicked' size={.04*window.innerWidth} top={(.12+(style.setlocation/1000))*window.innerHeight} left={(.1+(style.setlocation/10000))*window.innerWidth}
                        transformOrigin={`50% 100%`}
                        transform={`rotate(${style.setrotation}deg)`}/>
                      }
                      </div>
                    )
                  }
                </Motion>
              )}
              {renderIf(this.state.triangle2clicked===true)(
                <Motion
                  defaultStyle={{ setrotation: 120, setlocation: 0, settransform:100}}
                  style={{setrotation: spring(120, {stiffness: 100, damping: 20}), setlocation:  spring(100, {stiffness: 60, damping: 20}), settransform:spring(100, {stiffness:100,damping:10})
                  }}
                >
                  {style =>
                    (
                      <div>
                      {
                        <EquilateralTriangle className='triangle2clicked' size={.04*window.innerWidth} top={(.12+(style.setlocation/1000))*window.innerHeight} left={(.1+(style.setlocation/10000))*window.innerWidth}
                        transformOrigin={`50% 100%`}
                        transform={`rotate(${style.setrotation}deg)`}/>
                      }
                      </div>
                    )
                  }
                </Motion>
              )}
              {renderIf(this.state.triangle3clicked===true)(
                <Motion
                  defaultStyle={{ setrotation: 180, setlocation: 0, settransform:100}}
                  style={{setrotation: spring(120, {stiffness: 100, damping: 20}), setlocation:  spring(100, {stiffness: 60, damping: 20}), settransform:spring(100, {stiffness:100,damping:10})
                  }}
                >
                  {style =>
                    (
                      <div>
                      {
                        <EquilateralTriangle className='triangle3clicked' size={.04*window.innerWidth} top={(.12+(style.setlocation/1000))*window.innerHeight} left={(.1+(style.setlocation/10000))*window.innerWidth}
                        transformOrigin={`50% 100%`}
                        transform={`rotate(${style.setrotation}deg)`}/>
                      }
                      </div>
                    )
                  }
                </Motion>
              )}

              {renderIf(this.state.triangle4clicked===true)(
                <Motion
                  defaultStyle={{ setrotation: 240, setlocation: 0, settransform:100}}
                  style={{setrotation: spring(120, {stiffness: 100, damping: 20}), setlocation:  spring(100, {stiffness: 60, damping: 20}), settransform:spring(100, {stiffness:100,damping:10})
                  }}
                >
                  {style =>
                    (
                      <div>
                      {
                        <EquilateralTriangle className='triangle4clicked' size={.04*window.innerWidth} top={(.12+(style.setlocation/1000))*window.innerHeight} left={(.1+(style.setlocation/10000))*window.innerWidth}
                        transformOrigin={`50% 100%`}
                        transform={`rotate(${style.setrotation}deg)`}/>
                      }
                      </div>
                    )
                  }
                </Motion>
              )}

              {renderIf(this.state.triangle5clicked===true)(
                <Motion
                  defaultStyle={{ setrotation: 300, setlocation: 0, settransform:100}}
                  style={{setrotation: spring(120, {stiffness: 100, damping: 20}), setlocation:  spring(100, {stiffness: 60, damping: 20}), settransform:spring(100, {stiffness:100,damping:10})
                }}
                >
                  {style =>
                    (
                      <div>
                      {
                        <EquilateralTriangle className='triangle5clicked highz' size={.04*window.innerWidth} top={(.12+(style.setlocation/1000))*window.innerHeight} left={(.1+(style.setlocation/10000))*window.innerWidth}
                        transformOrigin={`50% 100%`}
                        transform={`rotate(${style.setrotation}deg)`}/>
                      }
                      </div>
                    )
                  }
                </Motion>
              )}
            </PositionRelative>

            {renderIf(this.state.triangle3clicked===true)(
              <div className='picturehexholder'>
                <div className='picturecontainer pictureposition1' onClick={()=>{
                  this.windowopener('http://68.media.tumblr.com/87a054d67ec0533fb006d398bf00d650/tumblr_o87wj9YwfJ1rw1i3co5_1280.jpg')}}/>
                <div className='picturecontainer pictureposition2' onClick={()=>{
                  this.windowopener('http://68.media.tumblr.com/2dda034f85eb5cc4d4d3e4af9d1a0733/tumblr_n3v61lg50Z1rw1i3co1_1280.jpg')}}/>
                <div className='picturecontainer pictureposition3' onClick={()=>{
                  this.windowopener('http://68.media.tumblr.com/5f2faffabcade8b33e7cf9ea198e2a72/tumblr_n3v8fvlXMb1rw1i3co1_1280.jpg')}}/>
                <div className='pictureexplainer pictureposition4'>
                  <p>
                    Rainbow Mountain, Peru
                  </p>
                </div>
                <div className='pictureexplainer pictureposition5'>
                  <p>
                    Emeishan, China
                  </p>
                </div>
              <div className='pictureexplainer pictureposition6'>
                  <p>
                    Everest, Nepal
                  </p>
                </div>
              </div>
            )}
            {renderIf(this.state.triangle5clicked===true)(
              <div className='lefttextbox5 lowz'>
                <PositionRelative>
                  <div className='leftfadeintextbooks'>
                    <h3>
                      Books
                    </h3>
                    <p>
                      Besides analytics, my other great passion in life has been reading. While my favorite book has always been the last one I&#39;ve read, this space is too small to list them all. But here are three that you might not have read, and have given me great pleasure. Click on the links to navigate to free books!
                    </p>
                    <ul>
                      <li>
                        <div className='booktitle' onClick={()=>{this.windowopener('http://www.gutenberg.org/ebooks/145')}}>
                          Middlemarch by George Eliot
                        </div>
                        Perhaps one of the greatest, and in my opinion the greatest, love stories ever. It tells the story of three couples in rural England and how their different personalities dictate their feelings and actions. In most books you have a sense that what is happening is taking place on a stage and the sense of fiction lowers the stakes of any dramatic tension. This book almost feels supra-real, where even the most minor or fleeting movement could make or destroy the world.
                      </li>
                      <li>
                        <div className='booktitle' onClick={()=>{this.windowopener('http://www.gutenberg.org/ebooks/308')}}>
                          Three Men in a Boat by Jerome K. Jerome
                        </div>
                        This is about three clerical workers that go on a holiday boat ride on the Thames in Victorian England. Between humor that is very much like the style in a PG Wodehouse novel, there are life lessons that feel as true today as they were over when they were first written over 100 years ago. Definitely recommend!
                      </li>
                      <li>
                        <div className='booktitle' onClick={()=>{this.windowopener('http://fer3.com/arc/imgx/wind-sand-and-stars.pdf')}}>
                          Wind Sand and Stars by Antoine de Saint-Exupery
                        </div>
                        Written by the French author of The Little Prince, this is an autobiographical account of the author&#39;s experiences delivering the mail by plane at the birth of aeronautics. Every page is filled with danger and excitement, and, even in translation, the poetry of the language is inspiring. By far my favorite adventure novel!
                      </li>
                    </ul>
                  </div>
                </PositionRelative>
              </div>
            )}
          </AbsoluteContainer>

          <AbsoluteContainer style={styles.pointerEvents} z={11}>
            {renderIf(this.state.triangle0clicked===true)(
              <div className='lefttextbox0'>
                <PositionRelative>
                  <div className='leftfadeintext'>
                    <h3>
                      Education - University of Illinois at Champaign-Urbana
                    </h3>
                    <p>
                      While my primary education has alway been through doing, I also have a bachelors degree from my state university. I was very interested in the intersection of the social sciences with hard mathematics, and learning about how large groups of people behave. That&#39;s why I got a triple major in economics, statistics and mathematics. Some of my accomplishments:
                    </p>
                    <ul>
                      <li>
                        Led thesis project in Development Economics on macroeconomic conditions in Sub-Saharan Africa.
                      </li>
                      <li>
                        Programmed stochastic volatility model of stock prices as a final project in Statistical Computing.
                      </li>
                      <li>
                        Experience with Markov Chain Monte Carlo (MCMC) methods through graduate coursework in Statistics.
                      </li>
                      <li>
                        National Science Foundation student fellowship to study game theory. Presented research project at local mathematics conference.
                      </li>
                    </ul>
                  </div>
                </PositionRelative>
              </div>
            )}
            {renderIf(this.state.triangle4clicked===true)(
              <div className='lefttextbox1'>
                <PositionRelative>
                  <div className='leftfadeintext'>
                    <h3>
                      Education - General Assembly
                    </h3>
                    <p>
                      After traveling I decided to settle down in Austin, Texas and learn how to program. While seeing the world was a growing experience I felt unaccomplished and unproductive - I wanted to get back to my roots and start building mathy things again. I joined General Assembly and took a crash course and web development, but my love for analytics goes all the way back to when I used to build computers in high school. Getting into the community of Austin was challenging and General Assembly helped me make new friends here as well. While I am new to non-statistical or econometric development, I&#39;m growing quickly and am currently on the job market. The most important thing you should know about me is that you can hire me! If you or anyone you know has development work in the Austin area, and it looks like I might be a good fit, feel free to contact me, either by the contact page, or by email at pweyand(at)gmail.com
                    </p>
                  </div>
                </PositionRelative>
              </div>
            )}
            {renderIf(this.state.triangle1clicked===true)(
              <div className='lefttextbox2'>
                <PositionRelative>
                  <div className='leftfadeintext'>
                    <h3>
                      Work - The Federal Reserve
                    </h3>
                    <p>
                      Continuing to pursue a passion in researching people I was honored to accept a position at the DC office of the Federal Reserve in the Emerging Market Economies section. I helped resident economists with their research as well as prepared reports that helped guide policy. A few of my duties included the following:
                    </p>
                    <ul>
                      <li>
                        Produce charts and tables vital to reports presented during Pre-FOMC briefings to the Board of Governors.
                      </li>
                      <li>
                        Responsible for creation and maintenance of entire statistical catalog in EME world - all relevant time series databased in Unix environment
                      </li>
                      <li>
                        Pakistan and Vietnam analyst responsibilities include attending briefings at World Bank, covering breaking economic news.
                      </li>
                      <li>
                        Voted on National Advisory Council intergovernmental panel on US international loans in coordination with Treasury.
                      </li>
                    </ul>
                  </div>
                </PositionRelative>
              </div>
            )}
            {renderIf(this.state.triangle2clicked===true)(
              <div className='lefttextbox3'>
                <PositionRelative>
                  <div className='leftfadeintext'>
                    <h3>
                      Work - Capital One
                    </h3>
                    <p>
                      Following my time at the Federal Reserve I wanted to learn more about the corporate world in the financial sector, so I joined Capital One. I learned that corporate finance was a place I would ultimately be happy, but I valued my experience there and what it taught me was important. Here were some of my duties:
                    </p>
                    <ul>
                      <li>
                        Designed and implemented cost/capacity allocations process for Digital Finance ($150M+ budget). Made briefings for line of business stakeholders.
                      </li>
                      <li>
                        Guided multiple business cases through Revenue Allocation Committee for Digital projects in excess of $1M.
                      </li>
                      <li>
                        Collaborated with managers and sr. director on added analysis to incorporate ING acquisition funding into Digital Finance outlooks and allocations.
                      </li>
                      <li>
                        Forecast Digital IT outlook with senior manager for month end, quarterly close, and yearly long term financial plan
                      </li>
                    </ul>
                  </div>
                </PositionRelative>
              </div>
            )}
            {renderIf(this.state.triangle3clicked===true)(
              <div className='lefttextbox4'>
                <PositionRelative>
                  <div className='leftfadeintext'>
                    <h3>
                      World Travel
                    </h3>
                    <p>
                      During my working life I had saved up a bit of money and had used my knowledge of the stock market to work up a small portfolio. I was able to use my knowledge of options trading to finance a couple years traveling the world. I learned a great deal, many things you can&#39;t learn from sitting behind a desk, and had a great deal of fun. I traveled to over 20 countries, learned to scuba dive, climb in high altitudes and survive on my own in the wild. On the right are a few of the mountains that I climbed in Nepal, China, and Peru. Click on the links to see bigger pictures in a new window!
                    </p>
                  </div>
                </PositionRelative>
              </div>
            )}
            {/*PERSONALPLACEHOLDERDEPRECATED*/}
          </AbsoluteContainer>

          <AbsoluteContainer style={styles.pointerEvents} z={10}>
            <div className='hexagon1 hexposition1'/>
            <div className='hexagon1 hexposition2'/>
            <div className='hexagon1 hexposition3'/>
            <div className='hexagon1 hexposition4'/>
            <div className='hexagon1 hexposition5'/>
            <div className='hexagon1 hexposition6'/>
          </AbsoluteContainer>
          <AbsoluteContainer style={styles.pointerEvents} z={5}>
            <GridContentContainer ref={ (homecontainer) => this.homecontainer = homecontainer}>
            </GridContentContainer>
          </AbsoluteContainer>
          <AbsoluteContainer style={styles.pointerEvents} z={4}>
            <div className='hexgraph'/>
          </AbsoluteContainer>
          <AbsoluteContainer style={styles.pointerEvents} z={3}>
            <img style={styles.image} src={spacepic1}/>
          </AbsoluteContainer>
        </div>
    )
  }
}

export default withRouter(AboutPage)
