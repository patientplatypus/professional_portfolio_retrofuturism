import React, { Component } from 'react'
import glamorous from 'glamorous';
import styled from 'styled-components';
import spacepic1 from '../../images/spacepic1.jpg';
import { withRouter } from 'react-router-dom'
import './home.css';

const GridContentContainer = styled.div`
  display: grid;
  background-color: transparent;
  grid-template-columns: 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw;
  grid-template-rows: 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh;
  grid-gap: 0vw;
`

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
    x: 0,
    y: 0,
    height: '100%',
    width: '100%'
  }
)

const PlanetBox = glamorous.div(
  {
    backgroundColor: 'transparent',
    opacity: '1',
    gridRow: '3/9',
    gridColumn: '14/17',
  }
)

const GreetingsBox = glamorous.div(
  {
    // backgroundColor: '#DD7E39',
    position: 'relative',
    opacity: '1',
    gridRow: '4/10',
    gridColumn: '6/15',
    transform: 'translate(5%,-5%)',
    background: 'linear-gradient(to top right, #DD7E39, transparent)'
  }
)

const ExplanationBox = glamorous.div(
  {
    position: 'relative',
    // opacity: '0.6',
    gridRow: '11/17',
    gridColumn: '3/16',
    transform: 'translate(4.98%,-4.9%)',
    background: 'rgba(221, 126, 57, 0.7)'
  }
)

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

const ProfileBox1 = glamorous.div(
  {
    position: 'relative',
    backgroundColor: 'transparent',
    gridRow: '3/8',
    gridColumn: '3/6',
  }
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
  images:{
    height: '100%',
    width: '100%'
  },
  container: {
    overflow: 'hidden',
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
      for (var y = 1; y <= 18; y++ ){
        var key = "" + x + "-" + y
        matrix.push({"x": x, "y": y, "key": key})
      }
    }
    let gridboxes = matrix.map(onebox=>{
        return(

            <GridBoxN opacity={onebox['y']} x={onebox['x']} y={onebox['y']} key={onebox['key']}/>

        )
      })
    return(gridboxes)
  }

  componentDidMount(){

  }

  render(){
    return (
        <div style={styles.container}>
        <ProjectorHolder>

          <div className='projector1'/>
          <div className='projector2'/>
          <div className='projector3'/>
          <div className='projector4'/>
          <div className='projector5'/>

          <div className='projector6'/>
          <div className='projector7'/>
          <div className='projector8'/>
          <div className='projector9'/>
          <div className='projector10'/>

        </ProjectorHolder>
          <AbsoluteContainer z={5}>
            <GridContentContainer ref={ (homecontainer) => this.homecontainer = homecontainer}>
              <GreetingsBox>
                <div className='greetingsboxinner'>
                  <p>
                    Greetings Earthlings!
                  </p>
                  <p>
                    Welcome to Peter Weyand&#39;s software development portfolio!
                  </p>
                </div>
              </GreetingsBox>
              <ExplanationBox>
                <PositionRelative>
                  <div className='explanationboxinner'>
                    <p>
                      Here is my web development portfolio. I&#39;ve designed this iteration of my portfolio to be as interesting and fun to design as I could, not only for my enjoyment, but for yours too! The theme, as you can tell is "retro futurism", which is sort of how the past thought the future might look like. The navigation bar to the left, the old style terminal, will let you navigate to the different parts of this site. MY_WORK goes to my portfolio of past projects, ABOUT_ME goes to a deep dive into my resume and life experiences, and CONTACT_LASER is...special. It lets you send me a message through a really cool animation that you should definitely try! You can also simply email me directly at pweyand(at)gmail.com.
                      The links section will open links to my github and linkedin in a new window (allow popups if you would like to navigate to a new tab, I don&#39;t have anything nefarious on my site, honest), while RESUME under the downloads section downloads my resume.
                    </p>
                    <p>
                      I really hope you like my site.
                    </p>
                    <p>
                      Dial in your destination on the left to explore!
                    </p>
                  </div>
                </PositionRelative>
              </ExplanationBox>
              <PlanetBox>
                <PositionRelative>
                  <PositionAbsolute>
                    <div className='jupiter'>
                      <div className='jupiterimage'/>
                    </div>
                  </PositionAbsolute>
                </PositionRelative>
              </PlanetBox>
              <ProfileBox1>
                <div className='profilebox1'/>
                <div className='profilebox2'/>
                <div className='profilebox3'/>
              </ProfileBox1>
            </GridContentContainer>
          </AbsoluteContainer>
          <AbsoluteContainer z={3}>
            <img style={styles.imagestyle} src={spacepic1} alt='Jupiter!'/>
          </AbsoluteContainer>
          <AbsoluteContainer z={4}>
            <div className='hexgraph'/>
          </AbsoluteContainer>
        </div>
    )
  }
}

export default withRouter(HomePage)
