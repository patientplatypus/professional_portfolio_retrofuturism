import React, { Component } from 'react'
import glamorous from 'glamorous';
import renderIf from 'render-if';
import styled from 'styled-components';
// import TypeScreen from './TypeScreen';
// import Typist from 'react-typist';
import spacepic1 from '../../images/spacepic1.jpg';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import { Switch, Route, RedirectWithStatus,  BrowserRouter as Router, withRouter } from 'react-router-dom';
import {Motion, spring, StaggeredMotion} from 'react-motion';
import { Redirect } from 'react-router'
import { css } from 'glamor';
import './contact.css';
import axios from 'axios';

const GridContentContainer = styled.div`
  display: grid;
  background-color: transparent;
  grid-template-columns: 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-template-rows: 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh;
  grid-gap: 0vw;
`

const RelativeContainer = styled.div`
  position: relative;
  width: 85vw;
  height: 100vh;
`

const PositionRelative = glamorous.div(
  {
    position: 'relative',
    height: '100%',
    width: '100%',
  }
)


const GridBoxtrial = glamorous.div(
  {
    backgroundColor: 'red',
    color: 'transparent',
    padding: '20px',
    fontSize: '150%',
    gridRowStart: '8',
    gridColumnStart: '8',
    // gridColumnEnd:'7',
    // width: `${.50*10}vw`,
    width: '5vw'
    // height: `${.20*10}vh`
  }
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

const Projector = glamorous.div(
  {
    position: 'fixed',
  },
  ({x})=>({
    x: x
  }),
  ({y})=>({
    y: y
  }),
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

const opacitygenerator = css.keyframes({
  '0%': { opacity: ' .2' },
  '25%': { opacity: ' 1' },
  '75%': { opacity: '1' },
  '100%': { opacity: '.2' }
})

const noopacity = css.keyframes({
  '0%': { opacity: ' 0' },
  '100%': { opacity: '0' }
})


const TeleporterChanger = glamorous.div(
  {
    position: "absolute",
    top: '21.5%',
    left: '9.25%',
    width: '25.65%',
    height: '5px',
    MozBoxShadow: '0 0 20px 10px rgba(0,0,200,1)',
    WebkitBoxShadow: '0 0 20px 10px rgba(0,0,200,1)',
    boxShadow: '0 0 20px 10px rgba(0,0,200,1)',
    backgroundColor: 'blue',
  },
  ({opacity})=>({
    opacity: opacity===true?1:0,
  })
)

const lightupwire = css.keyframes({
  '0%': {backgroundColor: 'rgba(0,0,0,1)'},
  '100%': {backgroundColor: 'rgba(240,100,0,1)'}
})

const glowwire = css.keyframes({
  '0%': {
    MozBoxShadow: '0 0 0px 0px rgba(250,250,0,1)',
    WebkitBoxShadow: '0 0 0px 0px rgba(250,250,0,1)',
    boxShadow: '0 0 0px 0px rgba(250,250,0,1)'
  },
  '100%': {
    MozBoxShadow: '0 0 20px 10px rgba(250,250,0,1)',
    WebkitBoxShadow: '0 0 20px 10px rgba(250,250,0,1)',
    boxShadow: '0 0 20px 10px rgba(250,250,0,1)'
  }
})

const Powertubewire10 = glamorous.div(
  {
    position: 'absolute',
    width: '100%',
    height: '3.1%',
    top: '48.5%',
    left: '0%',
    backgroundColor: 'black',
    opacity: 1,
    zIndex: 2,
  }
)

const Powertubewire11 = glamorous.div(
  {
    position: 'absolute',
    width: '100%',
    height: '4.1%',
    top: '48.5%',
    left: '0%',
    backgroundColor: 'black',
    opacity: 1,
    zIndex: 2,
    animation: `${lightupwire} 2s linear`,
    animationFillMode: 'forwards',
  }
)

const Powertubewire12 = glamorous.div(
  {
    position: 'absolute',
    width: '100%',
    height: '4.1%',
    top: '48.5%',
    left: '0%',
    backgroundColor: 'transparent',
    opacity: 1,
    zIndex: 2,
    animation: `${glowwire} 3s linear`,
    animationFillMode: 'forwards',
    animationDelay: '2s'
  }
)

const Powertubewire20 = glamorous.div(
  {
    position: 'absolute',
    width: '100%',
    height: '4.1%',
    top: '50%',
    left: '0%',
    backgroundColor: 'black',
    opacity: 1,
    zIndex: 2,
  }
)

const Powertubewire21 = glamorous.div(
  {
    position: 'absolute',
    width: '100%',
    height: '4.1%',
    top: '50%',
    left: '0%',
    backgroundColor: 'black',
    opacity: 1,
    zIndex: 2,
    animation: `${lightupwire} 2s linear`,
    animationFillMode: 'forwards',
  }
)

const Powertubewire22 = glamorous.div(
  {
    position: 'absolute',
    width: '100%',
    height: '4.1%',
    top: '50%',
    left: '0%',
    backgroundColor: 'transparent',
    opacity: 1,
    zIndex: 2,
    animation: `${glowwire} 3s linear`,
    animationFillMode: 'forwards',
    animationDelay: '2s'
  }
)

const Targetbox = glamorous.div(
  {
    display: 'block',
    position: 'absolute',
    left: '50%',
    top: '50%',
    backgroundColor: 'transparent',
    height: '20%',
    width: '20%',
    borderWidth: '1%',
    borderColor: 'rgba(200,100,0,1)',
    borderStyle: 'solid',
    zIndex:9
  },
  ({transform1})=>({
    transform: transform1,
  }),
  ({transform2})=>({
    WebkitTransform: transform2,
  }),
  ({transform3})=>({
    MozTransform: transform3,
  }),
  ({top})=>({
    top: top
  }),
  ({left})=>({
    left: left
  }),
  ({height})=>({
    height: height
  }),
  ({width})=>({
    width: width
  })
)

const TargetedShip = glamorous.div(
  {
    position: 'absolute',
    top: '18%',
    left: '83.5%',
    width: '4%',
    height: '6%',
    backgroundColor: 'rgba(200,100,0,1)',
    clipPath: 'polygon(0 0, 100% 67%, 51% 57%, 56% 100%)'
  },
  ({color})=>({
    backgroundColor: color
  })
)

const TargetingCanon1 = glamorous.div(
  {
    position: 'absolute',
    top: '80%',
    left: '20.5%',
    width: '10%',
    height: '15%',
    borderTopRightRadius: '50%',
    borderTopLeftRadius: '50%',
    backgroundColor: 'rgba(200,100,0,1)',
    transform: 'scale(.5,.5)'
  }
)

const TargetingCanon2 = glamorous.div(
  {
    position: 'absolute',
    top: '75%',
    left: '23.5%',
    width: '10%',
    height: '15%',
    borderTopRightRadius: '50%',
    borderTopLeftRadius: '50%',
    backgroundColor: 'rgba(200,100,0,1)',
    transform: 'scale(-.5,-.5)',
    clipPath: 'polygon(25% 30%, 100% 0%, 75% 70%, 0% 100%)'
  }
)

const TeleporterChanger2 = glamorous.div(
  {
    position: "absolute",
    top: '21.5%',
    left: '9.25%',
    width: '25.65%',
    height: '12px',
    MozBoxShadow: '0 0 20px 5px rgba(200,0,0,1)',
    WebkitBoxShadow: '0 0 20px 5px rgba(200,0,0,1)',
    boxShadow: '0 0 20px 5px rgba(200,0,0,1)',
    backgroundColor: 'red',
  },
  ({opacity})=>({
    opacity: opacity===true?1:0,
  })
)



const styles = {
  imagestyle: {
    maxHeight: '99.999%',
    width: '100%'
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
  pointerEvents: {
    pointerEvents: 'none'
  },
}

class ContactPage extends Component{
  constructor(props){
    super(props);
    this.state={
      boxcolor: 'transparent',
      message: 'Click Here to Enter Message! Please include your contact details so I can get back to you.',
      sendingmessage: false,
      message1sent: false,
      message2sent: false,
      teleportbuttonpressed: false,
      powerstation1: false,
      powerstation2: false,
      powerstation3: false,
      powerstation4: false,
      powerstation5: false,
      powerstation6: false,
      powerstation7: false,
      powerstation8: false,
      targetingcomputer1: false,
      targetingcomputer2: false,
      targetingcomputer3: false,
      targetingcomputer4: false,
      targetingcomputer5: false,
      targetingcomputer6: false,
      targetingcomputer7: false,
      targetingcomputer8: false,
      targetingcomputer9: false,
      targetingcomputer10: false,
      laserfire1: false,
      laserfire2: false,
      laserfire3: false,
      laserfire4: false,
      targetinginfo: 'booting targeting computer\n',
      targetinginfoside: 'powering LAZERBRO2000\n',
      messagenumber: '0',
      analyzercount: 0,
      messagestatus: 'AWAITING MESSAGE'
    }
  }


  componentDidMount(){
  }

  teleportmessage(){
    console.log('teleporter button pushed inside teleportmessage');
    axios.post('https://formspree.io/pweyand@gmail.com', {
      data: {message: this.state.message},
      dataType: "json"
    })
    .then((response)=>{
      console.log(response);
      this.setState({
        messagestatus: 'SENDING MESSAGE',
        sendingmessage: true,
        teleportbuttonpressed: true,
        message1sent: false,
        messagenumber: '1'
      });
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  velocitycallback(){
    console.log('inside velocitycallback');
    if(this.state.teleportbuttonpressed){
      this.setState({sendingmessage: false, message1sent: true})
    }
  }

  velocitycallback2(){
    console.log('inside velocitycallback');
    if(this.state.sendingmessage===false && this.state.message1sent===true){
      this.setState({message1sent: false, message2sent: true})
    }
  }

  sanitycheck(){
    console.log('inside sanitycheck and sendingmessage is ', this.state.sendingmessage);
    console.log('inside sanitycheck and message1sent is ', this.state.message1sent);
    return(<div/>)
  }


  render(){
    return (
        <div style={styles.container}>
          <AbsoluteContainer z={6} style={styles.pointerEvents}>
            <div className='teleportconsole'>
              <PositionRelative>
                <div className='teleportername1'>
                  TRANSBOBULATOR 10,000
                </div>
                <div className='lightheaders lightheaderposition1'>
                  POWER
                </div>
                <div className='lightheaders lightheaderposition2'>
                  TARGETING
                </div>
                <div className='lightheaders lightheaderposition3'>
                  LAZER
                </div>
                {renderIf(this.state.sendingmessage===false)(
                  <div className='consolelight consolelightredoff consolelightposition1'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition1'>
                        TRANSMISSION
                      </div>
                    </PositionRelative>
                  </div>
                )}
                {renderIf(this.state.message1sent===true || this.state.sendingmessage===true || this.state.message2sent===true)(
                  <div className='consolelight consolelightredon consolelightposition1'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition1'>
                        TRANSMISSION
                      </div>
                    </PositionRelative>
                  </div>
                )}

                {renderIf(this.state.powerstation1===false)(
                  <div className='consolelight consolelightorangeoff consolelightposition2'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition2'>
                        POWERING BANKS
                      </div>
                    </PositionRelative>
                  </div>
                )}
                {renderIf(this.state.powerstation1===true)(
                  <div className='consolelight consolelightorangeon consolelightposition2'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition2'>
                        POWERING BANKS
                      </div>
                    </PositionRelative>
                  </div>
                )}

                {renderIf(this.state.powerstation8===false)(
                  <div className='consolelight consolelightgreenoff consolelightposition3'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition3'>
                        BANKS POWERED
                      </div>
                    </PositionRelative>
                  </div>
                )}
                {renderIf(this.state.powerstation8===true)(
                  <div className='consolelight consolelightgreenon consolelightposition3'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition3'>
                        BANKS POWERED
                      </div>
                    </PositionRelative>
                  </div>
                )}

                {renderIf(this.state.targetingcomputer2===false)(
                  <div className='consolelight consolelightredoff consolelightposition4'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition4'>
                        BOOTING COMPUTER
                      </div>
                    </PositionRelative>
                  </div>
                )}
                {renderIf(this.state.targetingcomputer2===true)(
                  <div className='consolelight consolelightredon consolelightposition4'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition4'>
                        BOOTING COMPUTER
                      </div>
                    </PositionRelative>
                  </div>
                )}

                {renderIf(this.state.targetingcomputer6===false)(
                  <div className='consolelight consolelightorangeoff consolelightposition5'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition4'>
                        TARGET LOCK
                      </div>
                    </PositionRelative>
                  </div>
                )}
                {renderIf(this.state.targetingcomputer6===true)(
                  <div className='consolelight consolelightorangeon consolelightposition5'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition5'>
                        TARGET LOCK
                      </div>
                    </PositionRelative>
                  </div>
                )}

                {renderIf(this.state.targetingcomputer7===false)(
                  <div className='consolelight consolelightgreenoff consolelightposition6'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition5'>
                        CHARGING LAZER
                      </div>
                    </PositionRelative>
                  </div>
                )}
                {renderIf(this.state.targetingcomputer7===true)(
                  <div className='consolelight consolelightgreenon consolelightposition6'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition6'>
                        CHARGING LAZER
                      </div>
                    </PositionRelative>
                  </div>
                )}

                {renderIf(this.state.laserfire1===false)(
                  <div className='consolelight consolelightredoff consolelightposition7'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition7'>
                        FIRING!
                      </div>
                    </PositionRelative>
                  </div>
                )}
                {renderIf(this.state.laserfire1===true)(
                  <div className='consolelight consolelightredon consolelightposition7'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition7'>
                        FIRING!
                      </div>
                    </PositionRelative>
                  </div>
                )}

                {renderIf(this.state.laserfire2===false)(
                  <div className='consolelight consolelightorangeoff consolelightposition8'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition8'>
                        POWERING BANKS
                      </div>
                    </PositionRelative>
                  </div>
                )}
                {renderIf(this.state.laserfire2===true)(
                  <div className='consolelight consolelightorangeon consolelightposition8'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition8'>
                        POWERING BANKS
                      </div>
                    </PositionRelative>
                  </div>
                )}

                {renderIf(this.state.laserfire3===false)(
                  <div className='consolelight consolelightgreenoff consolelightposition9'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition9'>
                        COOL DOWN
                      </div>
                    </PositionRelative>
                  </div>
                )}
                {renderIf(this.state.laserfire3===true)(
                  <div className='consolelight consolelightgreenon consolelightposition9'>
                    <PositionRelative>
                      <div className='lightsub lightsubposition9'>
                        COOL DOWN
                      </div>
                    </PositionRelative>
                  </div>
                )}

                <div className='messagestatus'>
                  {this.state.messagestatus}
                </div>

              </PositionRelative>
            </div>
          </AbsoluteContainer>
          <AbsoluteContainer z={8}>
            <div className='teleporterbutton' onClick={()=>{this.teleportmessage()}}>
              <p>
                Beam Message!
              </p>
            </div>
            {renderIf(this.state.sendingmessage===false && this.state.message1sent===false && this.state.message2sent===false)(
              <div className='messagefield'>
                <PositionRelative>
                  <div className='paddingcontainer'>
                    <PositionRelative>
                      <textarea
                        className='inputmessage'
                        type="text"
                        onClick={()=>{
                          this.setState({message: ''});
                          console.log('clicked insided input box');
                        }}
                        value={this.state.message}
                        onChange={(e)=>(this.setState({message: e.target.value}))}/>
                    </PositionRelative>
                  </div>
                </PositionRelative>
              </div>
            )}
            {renderIf(this.state.sendingmessage===true && this.state.message1sent===false)(
              <div className='messagefield'>
                <PositionRelative>
                  <div className='paddingcontainer'>
                    <PositionRelative>
                      <div className='inputmessage2'>
                          {this.state.message}
                      </div>
                      <div className='inputmessage3'>
                          {this.state.message}
                      </div>
                    </PositionRelative>
                  </div>
                </PositionRelative>
              </div>
            )}
            {renderIf(this.state.sendingmessage===false && this.state.message1sent===true)(
              <div className='messagefield2'>
                <PositionRelative>
                  <div className='inputmessage4'>
                      {this.state.message}
                  </div>
                </PositionRelative>
              </div>
            )}
          </AbsoluteContainer>
          <AbsoluteContainer z={9} style={styles.pointerEvents}>
            <div className='teleporterside1'>
              <PositionRelative>
                <div className='portertitle1'>
                  ANALYZER
                </div>
                <div className='porterbar1'>
                  <PositionRelative>
                    <div className='powerbar'>
                      <PositionRelative>
                        <VelocityComponent animation={{width: this.state.sendingmessage===true?"0%":this.state.message1sent===true?'0%':this.state.message2sent===true?'0%':"100%"}} duration={5000} delay={0}>
                          <div className='hidepower'/>
                        </VelocityComponent>
                      </PositionRelative>
                    </div>
                  </PositionRelative>
                </div>
                <div className='portertitle3'>
                  DISINTIGRATOR
                </div>
                <div className='porterbar2'>
                  <PositionRelative>
                    <div className='powerbar'>
                      <PositionRelative>
                        <VelocityComponent animation={{width: this.state.message1sent===true?'0%':this.state.message2sent===true?'0%':"100%"}} duration={5000} delay={0}
                        complete={()=>{
                          if (this.state.message1sent===true){
                            this.setState({powerstation1: true})
                            setTimeout(()=>{
                              this.setState({powerstation2: true})
                            }, 500)
                            setTimeout(()=>{
                              this.setState({powerstation3: true})
                            }, 1000)
                            setTimeout(()=>{
                              this.setState({powerstation4: true})
                            }, 1500)
                            setTimeout(()=>{
                              this.setState({powerstation5: true})
                            }, 2000)
                            setTimeout(()=>{
                              this.setState({powerstation6: true})
                            }, 2500)
                            setTimeout(()=>{
                              this.setState({powerstation7: true})
                            }, 3000)
                            setTimeout(()=>{
                              this.setState({powerstation8: true})
                            }, 3500)
                            setTimeout(()=>{
                              this.setState({targetingcomputer1: true})
                            }, 4000)
                            setTimeout(()=>{
                              this.setState({
                                targetingcomputer2: true,
                                targetinginfo: 'booting targeting computer \n initializing targetbox\n',
                                targetinginfoside: 'powering LAZERBRO2000 \n spaceship sighted!\n'
                              })
                            }, 4500)
                            setTimeout(()=>{
                              this.setState({
                                targetingcomputer3: true,
                                targetinginfo: 'booting targeting computer \n initializing targetbox \n grid array vectorized\n',
                                targetinginfoside: 'powering LAZERBRO2000 \n spaceship sighted! \n dialing in trajectory\n'
                              })
                            }, 7500)
                            setTimeout(()=>{
                              this.setState({
                                targetingcomputer4: true,
                                targetinginfo: 'booting targeting computer \n initializing targetbox \n grid array vectorized \n grids synced\n',
                                targetinginfoside: 'powering LAZERBRO2000 \n spaceship sighted! \n dialing in trajectory \n 10101010010101010100101010100101\n'
                              })
                            }, 11100)
                            setTimeout(()=>{
                              this.setState({
                                targetingcomputer5: true,
                                targetinginfo: 'booting targeting computer \n initializing targetbox \n grid array vectorized \n grids synced \n targeting matrices activated\n',
                                targetinginfoside: 'powering LAZERBRO2000 \n spaceship sighted! \n dialing in trajectory \n 10101010010101010100101010100101 \n searching ... searching ...\n'
                              })
                            }, 11300)
                            setTimeout(()=>{
                              this.setState({
                                targetingcomputer6: true,
                                targetinginfo: 'booting targeting computer \n initializing targetbox \n grid array vectorized \n grids synced \n targeting matrices activated \n TARGET LOCK!\n',
                                targetinginfoside: 'powering LAZERBRO2000 \n spaceship sighted! \n dialing in trajectory \n 10101010010101010100101010100101 \n searching ... searching ... \n TARGET LOCK!\n'
                              })
                            }, 13800)
                            setTimeout(()=>{
                              this.setState({
                                targetingcomputer7: true,
                                laserfire1: true,
                                targetinginfo: 'booting targeting computer \n initializing targetbox \n grid array vectorized \n grids synced \n targeting matrices activated \n TARGET LOCK!\n Charging Lazers',
                                targetinginfoside: 'powering LAZERBRO2000 \n spaceship sighted! \n dialing in trajectory \n 10101010010101010100101010100101 \n searching ... searching ... \n TARGET LOCK!\n all power to forward array!'
                              })
                            }, 14000)
                            setTimeout(()=>{
                              this.setState({
                                targetingcomputer8: true,
                                laserfire2: true,
                                targetinginfo: 'booting targeting computer \n initializing targetbox \n grid array vectorized \n grids synced \n targeting matrices activated \n TARGET LOCK!\n Charging Lazers\nFIRE!!!',
                                targetinginfoside: 'powering LAZERBRO2000 \n spaceship sighted! \n dialing in trajectory \n 10101010010101010100101010100101 \n searching ... searching ... \n TARGET LOCK!\n all power to forward array!\nFIRE!!!'
                              })
                            }, 19000)
                            setTimeout(()=>{
                              this.setState({
                                targetingcomputer9: true,
                                laserfire3: true,
                                messagestatus: "MESSAGE SENT",
                                targetinginfo: 'booting targeting computer \n initializing targetbox \n grid array vectorized \n grids synced \n targeting matrices activated \n TARGET LOCK!\n Charging Lazers\nFIRE!!!\n message recieved!',
                                targetinginfoside: 'powering LAZERBRO2000 \n spaceship sighted! \n dialing in trajectory \n 10101010010101010100101010100101 \n searching ... searching ... \n TARGET LOCK!\n all power to forward array!\nFIRE!!!\n ship struck!'
                              })
                            }, 21000)
                            setTimeout(()=>{
                              this.setState({
                                boxcolor: 'transparent',
                                message: 'MESSAGE SENT :D! Click here to send another!',
                                sendingmessage: false,
                                message1sent: false,
                                message2sent: false,
                                teleportbuttonpressed: false,
                                powerstation1: false,
                                powerstation2: false,
                                powerstation3: false,
                                powerstation4: false,
                                powerstation5: false,
                                powerstation6: false,
                                powerstation7: false,
                                powerstation8: false,
                                targetingcomputer1: false,
                                targetingcomputer2: false,
                                targetingcomputer3: false,
                                targetingcomputer4: false,
                                targetingcomputer5: false,
                                targetingcomputer6: false,
                                targetingcomputer7: false,
                                targetingcomputer8: false,
                                targetingcomputer9: false,
                                targetingcomputer10: false,
                                laserfire1: false,
                                laserfire2: false,
                                laserfire3: false,
                                laserfire4: false,
                                targetinginfo: 'booting targeting computer\n',
                                targetinginfoside: 'powering LAZERBRO2000\n',
                                messagenumber: '0',
                                analyzercount: 0,
                                messagestatus: 'AWAITING NEW MESSAGE :D'
                              })
                            }, 23500)
                          }
                        }}>
                          <div className='hidepower'/>
                        </VelocityComponent>
                      </PositionRelative>
                    </div>
                  </PositionRelative>
                </div>
              </PositionRelative>
            </div>
            <VelocityComponent animation={{top: this.state.sendingmessage===true?"60.5%":"19%"}} duration={5000} delay={0} complete={()=>{this.velocitycallback()}}>
              <TeleporterChanger opacity={this.state.sendingmessage}/>
            </VelocityComponent>
            <VelocityComponent animation={{top: this.state.message1sent===true?"19%":"60.5%"}} duration={5000} delay={0} complete={()=>{this.velocitycallback2()}}>
              <TeleporterChanger2 opacity={this.state.message1sent}/>
            </VelocityComponent>
          </AbsoluteContainer>
          <AbsoluteContainer z={10} style={styles.pointerEvents}>
            <div className='teleporterbase1'/>
            <div className='teleporterbase2'/>
          </AbsoluteContainer>
          <AbsoluteContainer z={11} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={12} style={styles.pointerEvents}>
            <svg width='100%' height='85%'>
              <svg x='0%' y='18%' viewBox='10 0 400 400'>
                <svg viewBox="0 0 1200 900">
                  <svg x='18.95%' y='69.2%'>
                    <path  d="M64,137 C96,243 201,144 238,185" strokeWidth="10" stroke="#E6AF2E" fill="transparent"/>
                  </svg>
                  <svg x='33.3%' y='74.3%'>
                    <path  d="M64,137 C111,197 349,86 60,26" strokeWidth="10" stroke="#E6AF2E" fill="transparent"/>
                  </svg>
                  <svg x="5%" y="55%" viewBox="0 0 1200 900">
                    <path d="M35,153 C78,341 198,68 232,268"  strokeWidth="10" stroke="#E6AF2E" fill="transparent"/>
                  </svg>
                </svg>
              </svg>
            </svg>
          </AbsoluteContainer>
          <AbsoluteContainer z={13} style={styles.pointerEvents}>
            <div className='glasstube'/>
          </AbsoluteContainer>
          <AbsoluteContainer z={14} style={styles.pointerEvents}>
            <div className='hoop1'/>
            <div className='hoop1 transformhoop1'/>
            <div className='hoop1 transformhoop2'/>
            <div className='hoop1 transformhoop3'/>
            <div className='hoop1 transformhoop4'/>
            <div className='hoop1 transformhoop5'/>

            <div className='hoop2transformhoop01'/>
            <div className='hoop2transformhoop11'/>

          </AbsoluteContainer>
          <AbsoluteContainer z={15} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={16} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={17} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={18} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={19} style={styles.pointerEvents}>
            <AbsoluteContainer z={1} style={styles.pointerEvents}>
              <div className='gunbody'>
                <PositionRelative>
                  {renderIf(this.state.laserfire1===false || this.state.laserfire3===true)(
                    <div>
                      <div className='gunbarrellongfaint1'/>
                      <div className='gunbarrellongfaint2'/>
                      <div className='ellipsesmall ellipseposition1 highz'/>
                      <div className='ellipsesmall ellipseposition2 highz'/>
                      <div className='ellipsesmall ellipseposition3 highz'/>
                      <div className='gunbarrelshort highz'/>
                      <div className='ellipselarge ellipseposition4 highz'/>
                      <div className='ellipselarge ellipseposition5 highz'/>
                      <div className='ellipselarge ellipseposition6 highz'/>
                    </div>
                  )}
                  {renderIf(this.state.laserfire1===true && this.state.laserfire3===false)(
                    <div>
                      {renderIf(this.state.laserfire2===false)(
                        <div>
                          <div className='gunbarrellongfaint1'/>
                          <div className='gunbarrellongfaint2'/>
                        </div>
                      )}
                      {renderIf(this.state.laserfire2===true)(
                        <div>
                          <div className='gunbarrellongfaint1'/>
                          <div className='gunfire'/>
                          <div className='gunbarrellongfaint2'/>
                        </div>
                      )}
                      <div className='ellipsesmall ellipseposition1 glowdisks6 highz'/>
                      <div className='ellipsesmall ellipseposition2 glowdisks5 highz'/>
                      <div className='ellipsesmall ellipseposition3 glowdisks4 highz'/>
                      <div className='gunbarrelshort highz'/>
                      <div className='ellipselarge ellipseposition4 glowdisks1 highz'/>
                      <div className='ellipselarge ellipseposition5 glowdisks3 highz'/>
                      <div className='ellipselarge ellipseposition6 glowdisks2 highz'/>
                    </div>
                  )}
                </PositionRelative>
              </div>
            </AbsoluteContainer>
          </AbsoluteContainer>
          <AbsoluteContainer z={21} style={styles.pointerEvents}>
            {renderIf(this.state.powerstation8===false)(
              <div className='powercircle spinneroffoverlay'>
                <PositionRelative>
                  <div className='powerspinneroff'/>
                </PositionRelative>
              </div>
            )}
            {renderIf(this.state.powerstation8===true)(
              <div className='powercircle animatespin'>
                <PositionRelative>
                  <div className='powerspinneron'/>
                </PositionRelative>
              </div>
            )}
          </AbsoluteContainer>
          <AbsoluteContainer z={20} style={styles.pointerEvents}>
            <div className='powerbankstitle'/>
              <PositionRelative>
                <div className='powertitle'>
                  <p>
                    Power Banks
                  </p>
                </div>
              </PositionRelative>
            <div className='powerbanks'>
              <PositionRelative>
                <div className='powertube1'>
                  <PositionRelative>
                    <div className='powerendcapright'/>
                    <div className='powerendcapleft'/>
                    {renderIf(this.state.powerstation1===false)(
                      <Powertubewire10/>
                    )}
                    {renderIf(this.state.powerstation1===true)(
                      <Powertubewire11/>
                    )}
                    {renderIf(this.state.powerstation1===true)(
                      <Powertubewire12/>
                    )}
                  </PositionRelative>
                </div>
                <div className='powertube2'>
                  <PositionRelative>
                    <div className='powerendcapright'/>
                    <div className='powerendcapleft'/>
                    {renderIf(this.state.powerstation2===false)(
                      <Powertubewire20/>
                    )}
                    {renderIf(this.state.powerstation2===true)(
                      <Powertubewire21/>
                    )}
                    {renderIf(this.state.powerstation2===true)(
                      <Powertubewire22/>
                    )}
                  </PositionRelative>
                </div>
                <div className='powertube3'>
                  <PositionRelative>
                    <div className='powerendcapright'/>
                    <div className='powerendcapleft'/>
                    {renderIf(this.state.powerstation3===false)(
                      <Powertubewire10/>
                    )}
                    {renderIf(this.state.powerstation3===true)(
                      <Powertubewire11/>
                    )}
                    {renderIf(this.state.powerstation3===true)(
                      <Powertubewire12/>
                    )}
                  </PositionRelative>
                </div>
                <div className='powerbox1'>
                  <PositionRelative>
                    {renderIf(this.state.powerstation4===true)(
                      <div className='powerboxinner2'/>
                    )}
                  </PositionRelative>
                </div>
                <div className='powerbox2'>
                  <PositionRelative>
                    {renderIf(this.state.powerstation5===true)(
                      <div className='powerboxinner'/>
                    )}
                  </PositionRelative>
                </div>
                <div className='powerbox3'>
                  <PositionRelative>
                    {renderIf(this.state.powerstation6===true)(
                      <div className='powerboxinner2'/>
                    )}
                  </PositionRelative>
                </div>
                <div className='powerbox4'>
                  <PositionRelative>
                    {renderIf(this.state.powerstation7===true)(
                      <div className='powerboxinner'/>
                    )}
                  </PositionRelative>
                </div>
                <div className='powerbox5'>
                  <PositionRelative>
                    {renderIf(this.state.powerstation8===true)(
                      <div className='powerboxinner2'/>
                    )}
                  </PositionRelative>
                </div>
              </PositionRelative>
            </div>
          </AbsoluteContainer>
          <AbsoluteContainer z={21} style={styles.pointerEvents}>
            <div className='targetingcomputer'>
              <PositionRelative>
                <div className='targetingscreen'>
                  <PositionRelative>
                    <VelocityComponent animation={{opacity: this.state.targetingcomputer1===false?1:0}} duration={500} delay={0}>
                      <div className='targetingscreenoff'/>
                    </VelocityComponent>
                    {renderIf(this.state.targetingcomputer1===true)(
                      <div>
                        <div className='targetingscreenon'>
                          {renderIf(this.state.targetingcomputer1===true)(
                            <div>
                              {renderIf(this.state.targetingcomputer9===false)(
                                <TargetedShip/>
                              )}
                              {renderIf(this.state.targetingcomputer9===true)(
                                <TargetedShip color={`rgba(200,0,0,1)`}/>
                              )}
                              <TargetingCanon1/>
                              <TargetingCanon2/>
                              <div className='targetingmessageparent targetingmessagepositionmain'>
                                <PositionRelative>
                                  <div className='targetingmessagechild'>
                                    {this.state.targetinginfo}
                                  </div>
                                </PositionRelative>
                              </div>
                              <div className='targetingmessageparent targetingmessagepositionside'>
                                <PositionRelative>
                                  <div className='targetingmessagechild'>
                                    {this.state.targetinginfoside}
                                  </div>
                                </PositionRelative>
                              </div>
                            </div>
                          )}
                          {renderIf(this.state.targetingcomputer2===true)(
                            <div>
                              <div className='targetbox2 targetanimation2 highz'>
                                <PositionRelative>
                                  {renderIf(this.state.targetingcomputer3===true)(
                                    <div>
                                      <div className='gridline gridlineposition1 highz'/>
                                      <div className='gridline gridlineposition2 highz'/>
                                      <div className='gridline gridlineposition3 highz'/>
                                      <div className='gridline gridlineposition4 highz'/>
                                      <div className='gridline gridlineposition5 highz'/>
                                      <div className='gridline gridlineposition6 highz'/>
                                      <div className='gridline gridlineposition7 highz'/>
                                      <div className='gridline gridlineposition8 highz'/>
                                    </div>
                                  )}
                                  {renderIf(this.state.targetingcomputer5===true)(
                                    <div>
                                      <div className='highlightedtargetbox1'/>
                                      <div className='highlightedtargetbox2'/>
                                      <div className='highlightedtargetbox3'/>
                                    </div>
                                  )}
                                  {renderIf(this.state.targetingcomputer6===true)(
                                    <div>
                                      <div className='highlightedtargetboxfinal'/>
                                    </div>
                                  )}
                                </PositionRelative>
                              </div>
                              <div className='targetbox1 targetanimation2'/>
                            </div>
                          )}
                          {renderIf(this.state.targetingcomputer4===true)(
                            <div>
                              <div className='sideclip1'/>
                              <div className='sideclip2'/>
                              <div className='sideclip3'/>
                            </div>
                          )}
                          {renderIf(this.state.targetingcomputer7===true && this.state.targetingcomputer8===false)(
                            <div>
                              <div className='chargingtargetlaser chargingtargetlaserrotation11'/>
                              <div className='chargingtargetlaser chargingtargetlaserrotation0'/>
                              <div className='chargingtargetlaser chargingtargetlaserrotation1'/>
                              <div className='chargingtargetlaser chargingtargetlaserrotation2'/>
                              <div className='chargingtargetlaser chargingtargetlaserrotation3'/>
                              <div className='chargingtargetlaser chargingtargetlaserrotation4'/>
                              <div className='chargingtargetlaser chargingtargetlaserrotation5'/>
                              <div className='chargingtargetlaser chargingtargetlaserrotation6'/>
                              <div className='chargingtargetlaser chargingtargetlaserrotation7'/>
                            </div>
                          )}
                          {renderIf(this.state.targetingcomputer8===true && this.state.targetingcomputer9 === false)(
                            <div>
                              <div className='laserflare firingtargetlaserrotation11'/>
                              <div className='laserflare firingtargetlaserrotation11'/>
                              <div className='laserflare firingtargetlaserrotation0'/>
                              <div className='laserflare firingtargetlaserrotation1'/>
                              <div className='laserflare firingtargetlaserrotation2'/>
                              <div className='laserflare firingtargetlaserrotation3'/>
                              <div className='laserflare firingtargetlaserrotation4'/>
                              <div className='laserflare firingtargetlaserrotation5'/>
                              <div className='laserflare firingtargetlaserrotation6'/>
                              <div className='laserflare firingtargetlaserrotation7'/>
                              <div className='laserfire'/>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </PositionRelative>
                </div>
              </PositionRelative>
            </div>
          </AbsoluteContainer>
          <AbsoluteContainer z={22} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={23} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={24} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={25} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={26} style={styles.pointerEvents}>
          </AbsoluteContainer>
          <AbsoluteContainer z={27} style={styles.pointerEvents}>
          </AbsoluteContainer>

          <AbsoluteContainer z={5} style={styles.pointerEvents}>
            <GridContentContainer ref={ (homecontainer) => this.homecontainer = homecontainer}>
            </GridContentContainer>
          </AbsoluteContainer>
          <AbsoluteContainer z={3} style={styles.pointerEvents}>
            <img style={styles.imagestyle} src={spacepic1}/>
          </AbsoluteContainer>
          <AbsoluteContainer z={4} style={styles.pointerEvents}>
            <div className='hexgraph'/>
          </AbsoluteContainer>
        </div>
    )
  }
}

export default withRouter(ContactPage)
