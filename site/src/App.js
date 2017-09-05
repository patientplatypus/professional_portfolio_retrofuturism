import React, { Component } from 'react';
import './App.css';
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router'
import HomePage from './pages/HomePage/index'
import ContactPage from './pages/ContactPage/index'
import WorkPage from './pages/WorkPage/index'
import AboutPage from './pages/AboutPage/index'
import glamorous from 'glamorous';
import { css } from 'glamor';
import renderIf from 'render-if';
import styled from 'styled-components';
// import TypeScreen from './TypeScreen';
import './Typist.css';
import './title.css';
import './spaceship.css';
import './stars.css';
import './computer.css';
import resume from './images/PeterTWeyandResumeAug.pdf';
import invaders from './images/invaders.png';
import YouTube from 'react-youtube';


import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const FlexRow = styled.div`
  display: Flex;
  flex-direction: row
`

const Flex1 = styled.div`
  display: Flex;
  Flex: 1;
`

const PositionRelative = glamorous.div(
  {
    position: 'relative',
    height: '100%',
    width: '100%',
  }
)

const AbsoluteContainer = glamorous.div(
  {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
  },
  ({z})=>({
    zIndex: z
  }),
  ({events})=>({
    pointerEvents: events==='none'?'none':'auto'
  }),
  ({size})=>({
    width:size[0],
    height:size[1]
  }),
  ({position})=>({
    left:position[0],
    top:position[1]
  })
)

const GridBigContainer = styled.div`
  display: grid;
  grid-template-columns: 15vw 85vw;
  grid-template-rows: 10vh 90vh;
  grid-gap: 0vw;
  overflow: hidden;
  background-color: #fff;
  color: #444;
`

const TopLeftBox = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-color: red;
`

const OverflowBox = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  position: relative;
  overflow: hidden;
  background-color: black;
`

const ComputerOverlay = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  position: relative;
  background-color: black;
`

const ProjectorOverlay = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  position: relative;
  background-color: transparent;
  pointer-events: none;
`

const WireOverlay = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  position: relative;
  background-color: transparent;
  pointer-events: none;
`

const TitleBox = styled.div`
  color: #fff;
  padding: 5px;
  font-size: 150%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`

const StarContainer = styled.div`
  background-color: transparent;
  grid-column: 2/3;
  grid-row: 1/2;
`

const CordContainer = styled.div`
  background-color: red;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`

const SideBarItemHome = glamorous.div(
  {

  },
  ({page})=>({
    backgroundColor: page==='/home'?'rgba(0,244,60,0.7)':page==='/'?'rgba(0,244,60,0.7)':'transparent'
  })
)

const SideBarItemWork = glamorous.div(
  {

  },
  ({page})=>({
    backgroundColor: page==='/work'?'rgba(0,244,60,0.7)':'transparent'
  })
)

const SideBarItemAbout = glamorous.div(
  {

  },
  ({page})=>({
    backgroundColor: page==='/about'?'rgba(0,244,60,0.7)':'transparent'
  })
)

const SideBarItemContact = glamorous.div(
  {

  },
  ({page})=>({
    backgroundColor: page==='/contact'?'rgba(0,244,60,0.7)':'transparent'
  })
)

const typeglow = css.keyframes({
  '0%': { textShadow: ' -1px -1px 10px rgba(0,256,21,0.23)' },
  '10%': { textShadow: ' -1px -1px 10px rgba(0,220,25,0.24)' },
  '20%': { textShadow: ' -1px -1px 10px rgba(0,256,21,0.23)' },
  '50%': { textShadow: ' -1px -1px 10px rgba(0,230,21,0.25)' },
  '100%': { textShadow: ' -1px -1px 10px rgba(0,240,25,0.24)' }
})

const Terminal = glamorous.div(
  {
    backgroundColor: 'transparent',
    color: 'green',
    postion: 'relative',
    fontSize: '2vh',
    maxWidth: '100%',
    maxHeight: '100%',
    padding: '1vh',
    paddingBottom: '0px',
    marginBottom: '0px',
    animation: `${typeglow} .25s linear infinite alternate`
  }
)

const TerminalContainer = glamorous.div(
  {
    position: 'absolute',
    overflow: 'auto',
    overflowY: 'scroll'
  },
  ({maxHeight})=>({
    maxHeight: maxHeight,
    width: '100%'
  }),
  ({height})=>({
    height: height,
    width: '100%'
  }),
  ({top})=>({
    top: top
  }),
  ({left})=>({
    left: left
  }),
  ({z})=>({
    zIndex: z
  })
)


const terminalglow = css.keyframes({
  '0%': { boxShadow: 'inset -5px 0 130px rgba(0,256,21,0.23), inset 0px -5px 130px rgba(0,256,21,0.23)' },
  '10%': { boxShadow: 'inset -5px 0 115px rgba(0,220,25,0.24), inset 0px -5px 115px rgba(0,220,25,0.24)' },
  '20%': { boxShadow: 'inset -5px 0 130px rgba(0,256,21,0.23), inset 0px -5px 130px rgba(0,256,21,0.23)' },
  '50%': { boxShadow: 'inset -5px 0 120px rgba(0,230,21,0.25), inset 0px -5px 120px rgba(0,230,21,0.25)' },
  '100%': { boxShadow: 'inset -5px 0 115px rgba(0,240,25,0.24), inset 0px -5px 115px rgba(0,240,25,0.24)' }
})

const GridBoxSideBar = glamorous.div(
  {
    position: 'relative',
    backgroundColor: 'black',
    fontSize: "150%",
    gridColumn: '1/2',
    gridRow: '2/3',
    animation: `${terminalglow} .25s linear infinite alternate`
  }
)

const ConnectorLightsHome = glamorous.div(
  {
    position: 'absolute',
    backgroundColor: 'purple',
    borderRadius: '50%'
  },
  ({left})=>({
    left: left
  }),
  ({top})=>({
    top: top
  }),
  ({height})=>({
    height: height
  }),
  ({width})=>({
    width: width
  }),
  ({currentpage})=>({
    background: currentpage==='/home'?`radial-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.15), rgba(255,255,255,0.17), rgba(255,255,255,0.2)),
    linear-gradient(rgba(200,100,0,1), rgba(200,100,0,1))`:currentpage==='/'?`radial-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.15), rgba(255,255,255,0.17), rgba(255,255,255,0.2)),
    linear-gradient(rgba(200,100,0,1), rgba(200,100,0,1))`:`radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.9), rgba(0,0,0,1)),
    linear-gradient(rgba(200,100,0,1), rgba(200,100,0,1))`,
    MozBoxShadow:currentpage==='/home'?`0 0 2px 1px rgba(200,100,0,1)`:currentpage==='/'?`0 0 2px 1px rgba(200,100,0,1)`:``,
    WebkitBoxShadow:currentpage==='/home'?`0 0 2px 1px rgba(200,100,0,1)`:currentpage==='/'?`0 0 2px 1px rgba(200,100,0,1)`:``,
    boxShadow:currentpage==='/home'?`0 0 2px 1px rgba(200,100,0,1)`:currentpage==='/'?`0 0 2px 1px rgba(200,100,0,1)`:``,
  })
)

const ConnectorLightsWork = glamorous.div(
  {
    position: 'absolute',
    backgroundColor: 'purple',
    borderRadius: '50%'
  },
  ({left})=>({
    left: left
  }),
  ({top})=>({
    top: top
  }),
  ({height})=>({
    height: height
  }),
  ({width})=>({
    width: width
  }),
  ({currentpage})=>({
    background: currentpage==='/work'?`radial-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.15), rgba(255,255,255,0.17), rgba(255,255,255,0.2)),
    linear-gradient(rgba(0,0,240,1), rgba(0,0,240,1))`:`radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.9), rgba(0,0,0,1)),
    linear-gradient(rgba(0,0,240,1), rgba(0,0,240,1))`,
    MozBoxShadow:currentpage==='/work'?`0 0 2px 1px rgba(0,0,240,1)`:``,
    WebkitBoxShadow:currentpage==='/work'?`0 0 2px 1px rgba(0,0,240,1)`:``,
    boxShadow:currentpage==='/work'?`0 0 2px 1px rgba(0,0,240,1)`:``,
  })
)

const ConnectorLightsContact = glamorous.div(
  {
    position: 'absolute',
    backgroundColor: 'purple',
    borderRadius: '50%'
  },
  ({left})=>({
    left: left
  }),
  ({top})=>({
    top: top
  }),
  ({height})=>({
    height: height
  }),
  ({width})=>({
    width: width
  }),
  ({currentpage})=>({
    background: currentpage==='/contact'?`radial-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.15), rgba(255,255,255,0.17), rgba(255,255,255,0.2)),
    linear-gradient(rgba(240,0,0,1), rgba(240,0,0,1))`:`radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.9), rgba(0,0,0,1)),
    linear-gradient(rgba(240,0,0,1), rgba(240,0,0,1))`,
    MozBoxShadow:currentpage==='/contact'?`0 0 2px 1px rgba(240,0,0,1)`:``,
    WebkitBoxShadow:currentpage==='/contact'?`0 0 2px 1px rgba(240,0,0,1)`:``,
    boxShadow:currentpage==='/contact'?`0 0 2px 1px rgba(240,0,0,1)`:``,
  })
)

const ConnectorLightsAbout = glamorous.div(
  {
    position: 'absolute',
    backgroundColor: 'purple',
    borderRadius: '50%'
  },
  ({left})=>({
    left: left
  }),
  ({top})=>({
    top: top
  }),
  ({height})=>({
    height: height
  }),
  ({width})=>({
    width: width
  }),
  ({currentpage})=>({
    background: currentpage==='/about'?`radial-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.15), rgba(255,255,255,0.17), rgba(255,255,255,0.2)),
    linear-gradient(rgba(0,150,250,1), rgba(0,150,250,1))`:`radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.9), rgba(0,0,0,1)),
    linear-gradient(rgba(0,150,250,1), rgba(0,150,250,1))`,
    MozBoxShadow:currentpage==='/about'?`0 0 2px 1px rgba(0,150,250,1)`:``,
    WebkitBoxShadow:currentpage==='/about'?`0 0 2px 1px rgba(0,150,250,1)`:``,
    boxShadow:currentpage==='/about'?`0 0 2px 1px rgba(0,150,250,1)`:``,
  })
)


const scanlines = css.keyframes({
  '0%': { backgroundPosition: '0 0' },
  '100%': { backgroundPosition: '0 30px' }
})

const GridBoxSideBarOverlay = glamorous.div(
  {
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,.1)',
    fontSize: "150%",
    gridColumn: '1/2',
    gridRow: '2/3',
    pointerEvents: 'none',
    background: 'repeating-linear-gradient(0deg, rgba(0,256,21,0.1) 0px, rgba(0,256,21,0.1) 2px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 4px)',
    animation: `${scanlines} .5s infinite linear`,

  }
)

const styles = {
  pointerEvents: {
    pointerEvents: 'none'
  },
  starcanvas:{
    height: '100%',
    width: '100%'
  },
  cordcanvas:{
    position:'absolute',
    top: '30%',
    zIndex: 999,
    left: '20%',
    height: '100%',
    width: '100%',
    pointerEvents: 'none'
  },
  images: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  container: {
    position: 'relative',
    height: window.innerHeight,
    width: window.innerWidth,
    zIndex: 2,
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      sethistorytopush: '',
      initarrayindex: 0,
      redirect: '',
      currentpage: '/',
      showNextType: 0,
      platypuskling: ['P', 'A', 'T', 'I', 'E', 'N', 'T', 'P', 'L', 'A', 'T', 'Y', 'P', 'U', 'S'],
      platypusklingindex: 0,
      playtape: false,
      loadyoutube: false,
      songArray:['zJqLH8EA2rM', '0obpScUz_VE', 'mBRnh0tkQtU', 'FF7BXqCNcDE', 'AEN-sdRPuAQ'],
      songArrayName: ['Robert Parker: Crystal City', 'Anachronist: RGB', 'Waveshaper: Station Nova', 'She: Pioneer', 'Tycho: Descent'],
      songArrayIndex: 0,
      player: null,
      lightlocation: '/',
      videoId: 'zJqLH8EA2rM',
    }
  }


  componentDidMount(){
    this.setState({
      lightlocation: history.location.pathname
    })

    setTimeout(()=>{
      this.setState({
        loadyoutube: true
      });
    }, 2000);

    setInterval(()=>{
      if (this.state.platypusklingindex<=14){
        this.setState({
          platypusklingindex: this.state.platypusklingindex + 1
        })
      }else{
        this.setState({
          platypusklingindex: 0
        })
      }
    }, 5000)
    setTimeout(()=>{
      this.shootingStarField();
    },200)
    setTimeout(()=>{
      this.StarFields();
    },400)
  }

  MakeCord(){
    console.log('inside MakeCord');
    let cordcanvas1 = this.cordcanvas1;
    cordcanvas1.width = 2*window.innerWidth;
    cordcanvas1.height = 2*window.innerHeight;
    let cordcanvas2 = this.cordcanvas2;
    cordcanvas2.width = 2*window.innerWidth;
    cordcanvas2.height = 2*window.innerHeight;
    // console.log('window h/w', window.innerHeight, window.innerWidth);
    console.log('value of cordcanvas2', this.cordcanvas2);
    var ctx1 = cordcanvas1.getContext('2d');
    var ctx2 = cordcanvas2.getContext('2d');

    var stripewidth = 30;
    var translation;
    for (var i=0; i<10; i++){

      if (i<1){
        ctx1.translate(2*stripewidth, 2*stripewidth)
      }
      if (i<4){
        ctx1.translate(-10*stripewidth, -10*stripewidth);
        ctx1.rotate(5*Math.PI/180);
        ctx1.translate(10*stripewidth, 10*stripewidth);
        ctx1.translate(-10,-10)
      }
      if (i>=4){
        ctx1.translate(5*stripewidth, 5*stripewidth);
        ctx1.rotate(-5*Math.PI/180);
        ctx1.translate(-5*stripewidth, -5*stripewidth);
        ctx1.translate(4,4)
      }


      ctx1.moveTo(stripewidth+2*i*stripewidth, 0);
      ctx1.lineTo(2*i*stripewidth,40);
      ctx1.lineTo(stripewidth+2*i*stripewidth, 40);
      ctx1.lineTo(2*stripewidth+2*i*stripewidth, 0);
      ctx1.closePath();
      ctx1.fillStyle = 'green';
      ctx1.fill();
    }

    for (var i=0; i<10; i++){

      if (i<1){
        ctx2.translate(2*stripewidth, 2*stripewidth)
      }
      if (i<4){
        ctx2.translate(-10*stripewidth, -10*stripewidth);
        ctx2.rotate(5*Math.PI/180);
        ctx2.translate(10*stripewidth, 10*stripewidth);
        ctx2.translate(-10,-10)
      }
      if (i>=4){
        ctx2.translate(5*stripewidth, 5*stripewidth);
        ctx2.rotate(-5*Math.PI/180);
        ctx2.translate(-5*stripewidth, -5*stripewidth);
        ctx2.translate(4,4)
      }


      ctx2.moveTo(stripewidth+2*i*stripewidth, 0);
      ctx2.lineTo(2*stripewidth+2*i*stripewidth, 40);
      ctx2.lineTo(3*stripewidth+2*i*stripewidth, 40);
      ctx2.lineTo(2*stripewidth+2*i*stripewidth, 0);
      ctx2.closePath();
      ctx2.fillStyle = 'grey';
      ctx2.fill();
    }

  }

  shootingStarField(){
    var interval2 = 1000/100; //milliseconds/fps
    var shootingStarFreq = 200;
    var shootingStarVelocity = 100;
    var shootingStarSize = 5;
    var now;
    var opacity;
    var delta;
    var then = Date.now();
    var pauseShootingStars = false;

    let shootingcanvas = this.shootingstarcanvas
    shootingcanvas.height = this.shootingstarcontainer.clientHeight
    shootingcanvas.width = this.shootingstarcontainer.clientWidth

    const shootingctx = shootingcanvas.getContext('2d');
    var shootingStars = [];
    window.onblur = () => {
        for(var f=0;f<shootingStars.length;f++)
        {
          shootingStars.splice(f,1);
        }
        pauseShootingStars = true;
    }

    window.onfocus = () => {
      for(var f=0;f<shootingStars.length;f++)
      {
        shootingStars.splice(f,1);
      }
      pauseShootingStars = false;
    }

    setInterval(updateShooting.bind(this), 30);
    drawshooting();

    function drawshooting() {
      window.requestAnimationFrame(drawshooting);
      now = Date.now();
      delta = now - then;
      if (delta>interval2){
        then = now - (delta % interval2);
        shootingctx.clearRect(0,0,shootingcanvas.width,shootingcanvas.height);
         for(var f=0;f<shootingStars.length;f++)
         {
           shootingStars[f].Update();
           shootingStars[f].Draw();
         }
      }
    }

    function ShootingStar() {
        this.X = 2000;
        this.Y = Math.random()*shootingcanvas.height;
        this.Length = 200;

      this.Update = function(){
        this.X -= shootingStarVelocity;
      };

      this.Draw = function() {
        for (var i = 0; i < this.Length; i++){
          opacity = (1 - (i*(1/this.Length)));
          shootingctx.fillStyle = "rgba(255,0,255,"+opacity+")";
          shootingctx.fillRect(this.X+i,this.Y,shootingStarSize,shootingStarSize);
        }
      };
    }

    function updateShooting(){
      if(Math.round((Math.random()*shootingStarFreq))===1){
        if (pauseShootingStars===false){
          shootingStars.push(new ShootingStar());
        }
      }
       for(var f=0;f<shootingStars.length;f++)
       {
         if (shootingStars[f].X < -200 || shootingStars.length>5)
         {
           shootingStars.splice(f,1);
         }
       }
    }
  }


  StarFields(){
    var totalObjects = 100;
    var maxVelocity = 0.5;
    var interval = 1000/60; //milliseconds/fps
    var canvas = this.starcanvas;
    canvas.height = this.starcanvas.clientHeight;
    canvas.width  = this.starcanvas.clientWidth;
    const ctx = canvas.getContext('2d');
    var stars = [];
    var previousrandomX = [];
    var now;
    var delta;
    var then = Date.now();
    var imageData = ctx.createImageData(canvas.width, canvas.height);
    var startindex;
    var startindex4;
    var endindex1;
    var endindex14;

    init();
    draw()

    function init() {
      for(var i=0;i<totalObjects;i++){
        stars.push(new Star());
      }
    }

    function draw() {
      window.requestAnimationFrame(draw);
      now = Date.now();
      delta = now - then;
      if (delta>interval){
        then = now - (delta % interval);
         for(var i=0; i<imageData.data.length; i++){
           imageData.data[i]=0;
         }
         for(var f=0;f<stars.length;f++)
         {
           stars[f].UpdateData();
           stars[f].Draw();
         }

         ctx.putImageData(imageData,0,0);
      }
    }

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    function Star(){
      var doloop = false;
      do{
        doloop = false;
        this.X = getRandomInt(0, imageData.width);
        for (var y=0; y<previousrandomX.length; y++){
          if ((previousrandomX[y]>(this.X-10))&&(previousrandomX[y]<(this.X+10))){
            doloop = true;
          }
        }
      }while(doloop);
      previousrandomX.push(this.X)
      this.Y = getRandomInt(0, imageData.height);
      this.StarSize = 3
      this.Velocity = Math.random()*maxVelocity;
      if (this.Velocity===0){
        this.Velocity = 1;
      }
      this.Opacity = (getRandomInt(0,255));
      this.UpdateData = function() {
        this.X -= this.Velocity;
        if(this.X<0){
          this.X = canvas.width+1;
        }
      };

      this.Draw = function() {
        var intX = Math.floor(this.X);
        startindex = this.Y*(imageData.width)+intX;
        startindex4 = 4*startindex;
        endindex1 = this.Y*(imageData.width)+intX+this.StarSize;
        endindex14 = endindex1*4;
          for (var y=0; y<this.StarSize; y++){
            for(var i=startindex4+4*y*((imageData.width)); i<endindex14+4*y*((imageData.width)); i+=4) {
              imageData.data[i]=255;
              imageData.data[i+1]=255;
              imageData.data[i+2]=255;
              imageData.data[i+3]=this.Opacity;
            }
          }
      };
    }
  }


  windowopener(url, href){
    if (url!='false'){
      window.open(url);
    }
    if (href!='false'){
      console.log('inside mail thing');
      var mailstring = 'mailto:pweyand@gmail.com?subject=I%20love%20your%20super%20duper%20awesome%20website&body=Hi!%20We%20should%20talk%20some%20time.';
      console.log('value of mailstring is ', mailstring);
      window.location.href = mailstring;
    }
  }


  redirectfunc(redirectset){
    if(redirectset==='/work'){
      // console.log('value of mobxStore.projectorpoint1', mobxStore.projectorpoint1);
    }
    var self = this;
    this.setState({
      redirect:redirectset,
      currentpage: redirectset
    },()=>{
      setTimeout(()=>{
        self.setState({
          redirect: '',
          lightlocation: this.state.currentpage
        })
      }, 0)
    })
  }

  onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
    this.setState({
      player: event.target,
    });
    this.state.player.playVideo();
  }

  onPlayVideo() {
    console.log('value of this.state.player is ', this.state.player);
    this.setState({
      playtape: true
    })
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
    this.setState({
      playtape: false
    })
  }

  // songArray:['zJqLH8EA2rM', '0obpScUz_VE', 'mBRnh0tkQtU', 'FF7BXqCNcDE', 'AEN-sdRPuAQ'],
  // songArrayName: ['Robert Parker: Crystal City', 'Anachronist: RGB', 'Waveshaper: Station Nova', 'She: Pioneer', 'Tycho: Descent'],
  // songArrayIndex: 0

  onChangeVideo(forwardback) {
    if (forwardback==='forward'){
      console.log('inside if statement 1');
      if (this.state.songArrayIndex===this.state.songArray.length-1){
        this.setState({
          songArrayIndex: 0,
        }, ()=>{
          this.setState({
            videoId: this.state.songArray[this.state.songArrayIndex]
          })
        })
      }else{
        this.setState({
          songArrayIndex: this.state.songArrayIndex + 1
        }, ()=>{
          this.setState({
            videoId: this.state.songArray[this.state.songArrayIndex]
          })
        })
      }
    }else{
      if (this.state.songArrayIndex===0){
        this.setState({
          songArrayIndex: this.state.songArray.length - 1
        }, ()=>{
          this.setState({
            videoId: this.state.songArray[this.state.songArrayIndex]
          })
        })
      }else{
        this.setState({
          songArrayIndex: this.state.songArrayIndex - 1
        }, ()=>{
          this.setState({
            videoId: this.state.songArray[this.state.songArrayIndex]
          })
        })
      }
    }
  }

  render(){

    const opts = {
      height: '0',
      width: '0',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const optsSTOP = {
      height: '0',
      width: '0',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
          <div style={styles.container} ref={ (maincontainer) => this.maincontainer = maincontainer}>
          <GridBigContainer>
            <ComputerOverlay>
              <div className='computerholder'>
                <div className='computerholderrelative'>
                  <div className='computerprojector'/>
                  <div className='computerside1'/>
                  <div className='cordfront1'/>
                  <div className='cordfront2'/>
                  <div className='cordfront3'/>
                  <div className='cordfront4'/>
                  <div className='cordfront5'/>
                  <div className='cordfront6'/>
                  <div className='cordfront7'/>

                  <div className='cordfront8'/>
                  <div className='cordfront9'/>
                  <div className='cordfront10'/>
                  <div className='cordfront11'/>
                  <div className='cordfront12'/>
                  <div className='cordfront13'/>

                  <div className='cordfront14'/>
                  <div className='cordfront15'/>
                  <div className='cordfront16'/>
                  <div className='cordfront15'/>

                  <div className='cordback0'/>
                  <div className='cordback1'/>
                  <div className='cordback2'/>
                  <div className='cordback3'/>
                  <div className='cordback4'/>
                  <div className='cordback5'/>
                  <div className='cordback6'/>
                  <div className='cordback7'/>

                  <div className='cordback8'/>
                  <div className='cordback9'/>
                  <div className='cordback10'/>
                  <div className='cordback11'/>
                  <div className='cordback12'/>
                  <div className='cordback13'/>
                  <div className='cordback14'/>
                  <div className='cordback15'/>
                  <div className='titlecircuit'/>

                  <div style={styles.pointerEvents} className='computertendril1'>
                    <svg width="35%" height="50%" viewBox="0 0 400 500">
                      <path d="M56,38 C394,23 117,174 170,434" strokeWidth="10" stroke="#E6AF2E" fill="transparent"/>
                    </svg>
                  </div>
                  <div style={styles.pointerEvents} className='computertendril1'>
                    <svg width="35%" height="50%" viewBox="0 0 400 500">
                      <path d="M56,38 C300,23 117,174 180,434" strokeWidth="10" stroke="#3AA89D" fill="transparent"/>
                    </svg>
                  </div>
                  <div style={styles.pointerEvents} className='computertendril2'>
                    <svg width="35%" height="50%" viewBox="0 0 400 500">
                      <path d="M56,50 C391,125 133,117 195,434" strokeWidth="9" stroke="#A50104" fill="transparent"/>
                    </svg>
                  </div>
                  <div style={styles.pointerEvents} className='computertendril3'>
                    <svg width="35%" height="50%" viewBox="0 0 400 500">
                      <path d="M54,25 C300,18 119,195 210,434" strokeWidth="8" stroke="#3185FC" fill="transparent"/>
                    </svg>
                  </div>
                  <div style={styles.pointerEvents} className='computertendril3'>
                    <svg width="35%" height="50%" viewBox="0 0 400 500">
                      <path d="M54,15 C300,17 125,210 220,434" strokeWidth="8" stroke="#662C91" fill="transparent"/>
                    </svg>
                  </div>
                  <div className='platypuskling'>
                    <div className='platypusklingrelative'>
                      <div className='platypusklingletter1'>
                        <p>
                          {this.state.platypuskling[this.state.platypusklingindex%14]}
                        </p>
                      </div>
                      <div className='platypusklingletter2'>
                        <p>
                          {this.state.platypuskling[(this.state.platypusklingindex-1)%2]}
                        </p>
                      </div>
                      <div className='platypusklingletter3'>
                        <p>
                          {this.state.platypuskling[(this.state.platypusklingindex-2)%3]}
                        </p>
                      </div>
                      <div className='platypusklingletter4'>
                        <p>
                          {this.state.platypuskling[(this.state.platypusklingindex-3)%7]}
                        </p>
                      </div>
                      <div className='platypusklingletter5'>
                        <p>
                          {this.state.platypuskling[(this.state.platypusklingindex-4)%13]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ComputerOverlay>
            <ProjectorOverlay>
              <div className='sideprojector1'/>
              <div className='sideprojector2'/>
              <div className='sideprojector3'/>
              <div className='sideprojector4'/>
              <div className='sideprojectorbig'/>
              <div className='wireconnector1'>
                <PositionRelative>
                  <ConnectorLightsContact top={'35%'} left={'2.5%'} height={'30%'} width={'20%'} currentpage={this.state.lightlocation}/>
                  <ConnectorLightsAbout top={'35%'} left={'27.5%'} height={'30%'} width={'20%'} currentpage={this.state.lightlocation}/>
                  <ConnectorLightsWork top={'35%'} left={'52.5%'} height={'30%'} width={'20%'} currentpage={this.state.lightlocation}/>
                  <ConnectorLightsHome top={'35%'} left={'77.5%'} height={'30%'} width={'20%'} currentpage={this.state.lightlocation}/>
                </PositionRelative>
              </div>
              <div className='wireconnector2'/>
            </ProjectorOverlay>
            <StarContainer>
              <div className="starcontainer" ref={ (starcontainer) => this.starcontainer = starcontainer}>
                <canvas style={styles.starcanvas} ref={ (starcanvas) => this.starcanvas = starcanvas}/>
              </div>
              <div className="shootingstarcontainer" ref={ (shootingstarcontainer) => this.shootingstarcontainer = shootingstarcontainer}>
                <canvas ref={ (shootingstarcanvas) => this.shootingstarcanvas = shootingstarcanvas}/>
              </div>
            </StarContainer>
            <TitleBox>
              <div className='titlebackground'/>
              <div className='titleholder'>
                <div className='titleholderrelative'>
                  <div className="titledataQ">Q</div>
                  <div className='titleinfectedcircuit'/>
                  <div className="titleslukoniQ">Q</div>
                  <div className="titledata81">8</div>
                  <div className="titleslukoni81">8</div>
                  <div className="titledataZ">Z</div>
                  <div className="titleslukoniZ">Z</div>
                  <div className="titledata82">8</div>
                  <div className="titleslukoni82">8</div>
                  <div className="titledataP">P</div>
                  <div className="titleslukoniP">P</div>
                </div>
              </div>
              <div className='spaceshipholder'>
                <div className='redshipbody'/>
                <div className='redshipsidewindow1'/>
                <div className='redshipwindowshine1'/>
                <div className='redshipsidewindow2'/>
                <div className='redshipwindowshine2'/>
                <div className='redshipwheelwell1'/>
                <div className='redshipwheelwell2'/>
                <div className='redshiprocketsign'/>
                <div className='redshiprocket1'/>
                <div className='redshiprocket2'/>
                <div className='redshiprocketwires1'/>
                <div className='redshiprocketwires2'/>
                <div className='redshiprocketwires3'/>
                <div className='redshiprocketwires4'/>
                <div className='redshiprocketcircles1'/>
                <div className='redshiprocketcircles2'/>
                <div className='redshiprocketcircles3'/>
                <div className='redshiprocket3'/>
                <div className='redshipwheelfire1'/>
                <div className='redshipwheelfire2'/>
                <div className='redshipsiderail1'/>
                <div className='redshipsiderail2'/>
                <div className='redshipsiderail3'/>
                <div className='redshipsiderail4'/>
                <div className='redshipsiderail5'/>
                <div className='redshipsiderail6'/>
                <div className='redshipsiderail7'/>
                <div className='redshipsiderail8'/>
                <div className='redshipsiderail9'/>
                <div className='redshipsiderail10'/>
                <div className='redshipcoil1'>
                  <PositionRelative>
                    <div className='redshipcoilhoop1'/>
                    <div className='redshipcoilhoop2'/>
                    <div className='redshipcoilhoop3'/>
                    <div className='redshipcoilhoop4'/>
                    <div className='redshipcoilhoop5'/>
                  </PositionRelative>
                </div>
                <div className='redshipcoil2'>
                  <PositionRelative>
                    <div className='redshipcoilhoop1'/>
                    <div className='redshipcoilhoop2'/>
                    <div className='redshipcoilhoop3'/>
                    <div className='redshipcoilhoop4'/>
                    <div className='redshipcoilhoop5'/>
                  </PositionRelative>
                </div>
                <div className='redshipcoil3'>
                  <PositionRelative>
                    <div className='redshipcoilhoop1'/>
                    <div className='redshipcoilhoop2'/>
                    <div className='redshipcoilhoop3'/>
                    <div className='redshipcoilhoop4'/>
                    <div className='redshipcoilhoop5'/>
                  </PositionRelative>
                </div>
                <div className='redshipfire1'/>
                <div className='redshipfire2'/>
                <div className='redshipfire3'/>
                <div className='redshipfire4'/>
                <div className='redshipfire5'/>
                <div className='redshipfire6'/>
                <div className='redshiptire1'>
                  <PositionRelative>
                    <div className='tread'>
                      <PositionRelative>
                        <div className='grooveholder1'>
                          <PositionRelative>
                            <div className='groove1'/>
                            <div className='groove2'/>
                            <div className='groove3'/>
                            <div className='groove4'/>
                            <div className='groove5'/>
                            <div className='groove6'/>
                            <div className='groove7'/>
                            <div className='groove8'/>
                          </PositionRelative>
                        </div>
                        <div className='grooveholder2'>
                          <PositionRelative>
                            <div className='groove1'/>
                            <div className='groove2'/>
                            <div className='groove3'/>
                            <div className='groove4'/>
                            <div className='groove5'/>
                            <div className='groove6'/>
                            <div className='groove7'/>
                            <div className='groove8'/>
                          </PositionRelative>
                        </div>
                        <div className='grooveholder3'>
                          <PositionRelative>
                            <div className='groove11'/>
                            <div className='groove21'/>
                            <div className='groove31'/>
                            <div className='groove41'/>
                            <div className='groove51'/>
                            <div className='groove61'/>
                            <div className='groove71'/>
                            <div className='groove81'/>
                          </PositionRelative>
                        </div>
                        <div className='grooveholder4'>
                          <PositionRelative>
                            <div className='groove11'/>
                            <div className='groove21'/>
                            <div className='groove31'/>
                            <div className='groove41'/>
                            <div className='groove51'/>
                            <div className='groove61'/>
                            <div className='groove71'/>
                            <div className='groove81'/>
                          </PositionRelative>
                        </div>
                      </PositionRelative>
                    </div>
                  </PositionRelative>
                </div>
                <div className='redshiptire2'>
                  <PositionRelative>
                    <div className='tread'>
                      <PositionRelative>
                        <div className='grooveholder1'>
                          <PositionRelative>
                            <div className='groove1'/>
                            <div className='groove2'/>
                            <div className='groove3'/>
                            <div className='groove4'/>
                            <div className='groove5'/>
                            <div className='groove6'/>
                            <div className='groove7'/>
                            <div className='groove8'/>
                          </PositionRelative>
                        </div>
                        <div className='grooveholder2'>
                          <PositionRelative>
                            <div className='groove1'/>
                            <div className='groove2'/>
                            <div className='groove3'/>
                            <div className='groove4'/>
                            <div className='groove5'/>
                            <div className='groove6'/>
                            <div className='groove7'/>
                            <div className='groove8'/>
                          </PositionRelative>
                        </div>
                        <div className='grooveholder3'>
                          <PositionRelative>
                            <div className='groove11'/>
                            <div className='groove21'/>
                            <div className='groove31'/>
                            <div className='groove41'/>
                            <div className='groove51'/>
                            <div className='groove61'/>
                            <div className='groove71'/>
                            <div className='groove81'/>
                          </PositionRelative>
                        </div>
                        <div className='grooveholder4'>
                          <PositionRelative>
                            <div className='groove11'/>
                            <div className='groove21'/>
                            <div className='groove31'/>
                            <div className='groove41'/>
                            <div className='groove51'/>
                            <div className='groove61'/>
                            <div className='groove71'/>
                            <div className='groove81'/>
                          </PositionRelative>
                        </div>
                      </PositionRelative>
                    </div>
                  </PositionRelative>
                </div>
              </div>
            </TitleBox>
            <TopLeftBox>
            </TopLeftBox>
            <GridBoxSideBar>
              <Terminal>
                <TerminalContainer top={`0%`} left={`0%`} z={1} maxHeight={'75%'}>
                  <div className='handlenonpagetitles'>
                    <span className="textshadowset">
                      initializing trajectory...
                    </span>
                  </div>
                  <div className='handlenonpagetitles'>
                    <span className='textshadowset'>
                      uploading systems...
                    </span>
                  </div>
                  <div className='handlenonpagetitles'>
                    <span className="textshadowset">❖LOCAL STARSYSTEMS❖</span>
                  </div>
                  <SideBarItemHome page={this.state.lightlocation} className="handlepagetitles" onClick={()=>{this.redirectfunc('/home')}}>
                    &#9;<span className="textshadowset">HOME_PLANET</span>
                  </SideBarItemHome>
                  <SideBarItemWork page={this.state.lightlocation} className="handlepagetitles" onClick={()=>{this.redirectfunc('/work')}}>
                    &#9;<span className="textshadowset">MY_WORK</span>
                  </SideBarItemWork>
                  <SideBarItemAbout page={this.state.lightlocation} className="handlepagetitles" onClick={()=>{this.redirectfunc('/about')}}>
                    &#9;<span className="textshadowset">ABOUT_ME</span>
                  </SideBarItemAbout>
                  <SideBarItemContact page={this.state.lightlocation} className="handlepagetitles" onClick={()=>{this.redirectfunc('/contact')}}>
                    &#9;<span className="textshadowset">CONTACT_LASER</span>
                  </SideBarItemContact>
                  <div className='handlenonpagetitles'>
                    <span className='textshadowset'>
                      ❖PLOT COURSE TO OUTSIDE SYSTEMS❖
                    </span>
                  </div>
                  <div className="handlepagetitles"
                  onClick={()=>{this.windowopener('https://www.linkedin.com/in/peterweyand/', 'false')}}>
                    &#9;<span className='textshadowset'>
                      LINKEDIN_NEBULA
                    </span>
                  </div>
                  <div className="handlepagetitles"
                  onClick={()=>{this.windowopener('https://github.com/patientplatypus', 'false')}}>
                    &#9;<span className='textshadowset'>
                      GITHUB_QUADRANT
                    </span>
                  </div>
                  <div className='handlenonpagetitles'>
                    <span className='textshadowset'>
                      ❖DOWNLOAD DATA❖
                    </span>
                  </div>
                  <div>
                    <span className='textshadowset'>
                      <a className="atagterminal" href={resume} download>RESUME</a>
                    </span>
                  </div>
                </TerminalContainer>
                <TerminalContainer top={`75%`} left={`0%`} height={'25%'} z={2}>
                  <PositionRelative>
                    <div className="casetteoutline boxshadoworange"></div>
                    <div className="casettecircle1 boxshadoworange"></div>
                    <div className="casettecircle2 boxshadoworange"></div>
                    <div className="casettecircle3 boxshadoworange"></div>
                    <div className="casettecircle4 boxshadoworange"></div>
                    <div className='wheel1 boxshadoworange'>
                      <PositionRelative>
                        {renderIf(this.state.playtape===false)(
                          <div className='wheel2'>
                            <PositionRelative>
                                <div className='firstspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='secondspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='thirdspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='fourthspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='fifthspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='sixthspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                            </PositionRelative>
                          </div>
                        )}
                        {renderIf(this.state.playtape===true)(
                          <div className='wheel2 spoketurn'>
                            <PositionRelative>
                                <div className='firstspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='secondspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='thirdspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='fourthspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='fifthspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                                <div className='sixthspokes'>
                                  <PositionRelative>
                                    <div className='spoke boxshadoworange'/>
                                  </PositionRelative>
                                </div>
                            </PositionRelative>
                          </div>
                        )}
                      </PositionRelative>
                    </div>
                    <div className='wheel3 boxshadoworange'>
                      <PositionRelative>
                        {renderIf(this.state.playtape===false)(
                          <div className='wheel4'>
                            <PositionRelative>
                              <div className='firstspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='secondspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='thirdspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='fourthspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='fifthspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='sixthspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                            </PositionRelative>
                          </div>
                        )}
                        {renderIf(this.state.playtape===true)(
                          <div className='wheel4 spoketurn'>
                            <PositionRelative>
                              <div className='firstspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='secondspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='thirdspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='fourthspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='fifthspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                              <div className='sixthspokes'>
                                <PositionRelative>
                                  <div className='spoke boxshadoworange'/>
                                </PositionRelative>
                              </div>
                            </PositionRelative>
                          </div>
                        )}

                      </PositionRelative>
                    </div>
                    <div className='circleoverlay1 boxshadoworange2' />
                    <div className='circleoverlay2 boxshadoworange3' />
                    <div className='casettename'>
                      <p>
                        SPACE JAMS
                      </p>
                    </div>
                    <div className='pyramid1'>
                      <PositionRelative>
                        <div className='casettecircle5'/>
                        <div className='casettecircle6'/>
                        <div className='casettecircle7'/>
                        <div className='casettecircle8'/>
                      </PositionRelative>
                    </div>
                    {renderIf(this.state.playtape===true)(
                      <YouTube
                        videoId={this.state.videoId}
                        opts={opts}
                        onReady={(e)=>this.onReady(e)}
                        onEnd={()=>{
                          if (this.state.songArrayIndex===this.state.songArrayIndex.length-1){
                            this.setState({
                              songArrayIndex: 0
                            })
                          }else{
                            this.setState({
                              songArrayIndex: this.state.songArrayIndex + 1
                            })
                          }
                        }}
                      />
                    )}
                    {renderIf(this.state.playtape===false)(
                      <div>
                        <div className='playbutton' onClick={()=>{this.onPlayVideo()}}>
                           ▶︎
                        </div>
                      </div>
                    )}
                    {renderIf(this.state.playtape===true)(
                      <div>
                        <div className='nowplaying'>
                          <div className='glownowplaying'>
                            <p>
                              Now Playing: {this.state.songArrayName[this.state.songArrayIndex]}
                            </p>
                          </div>
                        </div>
                        <div className='forwardbutton' onClick={()=>{this.onChangeVideo('forward')}}>
                          ▶︎
                        </div>
                        <div/>
                        <div className='pausebutton' onClick={()=>{this.onPauseVideo()}}>
                           🁢🁢
                        </div>
                        <div className='backbutton' onClick={()=>{this.onChangeVideo('backward')}}>
                           ◀︎
                        </div>
                      </div>
                    )}
                  </PositionRelative>
                </TerminalContainer>
              </Terminal>
            </GridBoxSideBar>
            <GridBoxSideBarOverlay/>
            <OverflowBox ref={ (overflowbox) => this.overflowbox = overflowbox}>
              <Router history={history}>
                <div>
                  <Route path="/" component={HomePage} exact />
                  <Route path="/home" component={HomePage} exact />
                  <Route path="/work" component={WorkPage} exact />
                  <Route path="/contact" component={ContactPage} exact />
                  <Route path="/about" component={AboutPage} exact />
                  {renderIf(this.state.redirect !== "")(
                    <Redirect to={this.state.redirect} push/>
                  )}
                </div>
              </Router>
            </OverflowBox>
          </GridBigContainer>
          </div>
    )
  }
}


export default App


// <AbsoluteContainer events='none' size={[`30%`,`30%`]} position={[`50%`,`50%`]} z={900}>
//   <div style={styles.cordcanvas} ref={ (cordcanvascontainer) => this.cordcanvascontainer = cordcanvascontainer}>
//     <canvas  ref={ (cordcanvas) => this.cordcanvas = cordcanvas}/>
//   </div>
// </AbsoluteContainer>
// <AbsoluteContainer z={1} size={[`100%`,`100%`]} position={[`0%`,`0%`]}>
//           </AbsoluteContainer>
