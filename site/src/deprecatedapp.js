// <Terminal>
//   <Typist
//   avgTypingDelay={35}
//   cursor={{
//     show: true,
//     blink: true,
//     element: '❖',
//     hideWhenDone: true,
//     hideWhenDoneDelay: 100,
//   }}
//   onTypingDone={()=>{this.setState({
//     showNextType: 1
//   })}}
//   >
//     <span className="textshadowset"> INITIALIZING TRAJECTORY
//     <br/>
//     UPLOADING SYSTEMS
//     </span>
//   <br/>
//   </Typist>
//   {renderIf(this.state.showNextType>0)(
//     <div>
//       <br/>
//       <div>
//         <Typist
//         avgTypingDelay={35}
//         startDelay={600}
//         cursor={{
//           element: '❖',
//           hideWhenDone: true,
//           hideWhenDoneDelay: 70,
//         }}
//         onTypingDone={()=>{this.setState({
//           showNextType: 2
//         })}}
//         >
//           <span className="textshadowset">root></span>
//         </Typist>
//       </div>
//       <br/>
//       {renderIf(this.state.showNextType>1)(
//         <SideBarItemHome page={this.state.currentpage} className="handlepagetitles" onClick={()=>{this.redirectfunc('/home')}}>
//           <Typist
//           startDelay={600}
//           avgTypingDelay={35}
//           cursor={{
//             element: '❖',
//             hideWhenDone: true,
//             hideWhenDoneDelay: 70,
//           }}
//           onTypingDone={()=>{this.setState({
//             showNextType: 3
//           })}}
//           >
//             <span className="textshadowset">Home_Page</span>
//           </Typist>
//         </SideBarItemHome>
//       )}
//       <br/>
//       {renderIf(this.state.showNextType>2)(
//         <SideBarItemWork page={this.state.currentpage} className="handlepagetitles" onClick={()=>{this.redirectfunc('/work')}}>
//           <Typist
//           startDelay={600}
//           avgTypingDelay={35}
//           cursor={{
//             element: '❖',
//             hideWhenDone: true,
//             hideWhenDoneDelay: 70,
//           }}
//           onTypingDone={()=>{this.setState({
//             showNextType: 4
//           })}}
//           >
//             <span className="textshadowset">My_Work</span>
//           </Typist>
//         </SideBarItemWork>
//       )}
//       <br/>
//       {renderIf(this.state.showNextType>3)(
//         <SideBarItemAbout page={this.state.currentpage} className="handlepagetitles" onClick={()=>{this.redirectfunc('/about')}}>
//           <Typist
//           startDelay={600}
//           avgTypingDelay={35}
//           cursor={{
//             element: '❖',
//             hideWhenDone: true,
//             hideWhenDoneDelay: 70,
//           }}
//           onTypingDone={()=>{this.setState({
//             showNextType: 5
//           })}}
//           >
//             <span className="textshadowset">About_Me</span>
//           </Typist>
//         </SideBarItemAbout>
//       )}
//       <br/>
//       {renderIf(this.state.showNextType>4)(
//         <SideBarItemContact page={this.state.currentpage} className="handlepagetitles" onClick={()=>{this.redirectfunc('/contact')}}>
//           <Typist
//           startDelay={600}
//           avgTypingDelay={35}
//           cursor={{
//             element: '❖',
//             hideWhenDone: false,
//             hideWhenDoneDelay: 70,
//           }}
//           onTypingDone={()=>{this.setState({
//             showNextType: 6
//           })}}
//           >
//             <span className="textshadowset">Contact_Me</span>
//           </Typist>
//         </SideBarItemContact>
//       )}
//       <br/>
//     </div>
//   )}
//   <br/>
//   {renderIf(this.state.showNextType>5)(
//     <Typist
//     avgTypingDelay={75}
//     cursor={{
//       show: true,
//       blink: true,
//       element: '❖',
//       hideWhenDone: true,
//       hideWhenDoneDelay: 100,
//     }}
//     onTypingDone={()=>{
//       if(this.state.currentpage===""){
//         this.setState({
//           currentpage: '/home'
//         })
//         this.shootingStarField();
//         this.StarFields();
//       }
//     }}
//     >
//       <span className="textshadowset"> POWERING ENGINES ... ... ... ... ... ... ...</span>
//       <br/>
//       <span className="textshadowset"> JUMP! </span>
//     </Typist>
//   )}
// </Terminal>

// StarFields(){
//   var totalObjects = 50;
//   var maxVelocity = 10;
//   var starSize = 1;
//   var twinkleFreq = 50000;
//   var interval = 1000/60; //milliseconds/fps
//   var interval2 = 1000/60;
//   let canvas = this.starcanvas;
//   canvas.height = this.starcontainer.clientHeight;
//   canvas.width  = this.starcontainer.clientWidth;
//   const ctx = canvas.getContext('2d');
//   var stars = [];
//   var now;
//   var opacity;
//   var redshift;
//   var blueshift;
//   var delta;
//   var then = Date.now();
//   var imageData = ctx.createImageData(canvas.width, canvas.height);
//   var clearedImage = ctx.createImageData(canvas.width, canvas.height);
//
//   init();
//   window.requestAnimationFrame(draw)
//
//   function init() {
//     for(var i=0;i<totalObjects;i++){
//       stars.push(new Star());
//     }
//   }
//
//   function draw() {
//     window.requestAnimationFrame(draw);
//     now = Date.now();
//     delta = now - then;
//     if (delta>interval){
//       then = now - (delta % interval);
//       // ctx.clearRect(0,0,canvas.width,canvas.height);
//       ctx.putImageData(clearedImage,0,0)
//        for(var f=0;f<stars.length;f++)
//        {
//          stars[f].UpdateData();
//          stars[f].Draw();
//        }
//        ctx.putImageData(imageData,0,0);
//       //  console.log('after manipulation and imageData is: ', imageData);
//     }
//   }
//
//
//
//   function Star(){
//     this.X = parseInt(0.85*window.innerWidth);
//     this.Y = parseInt(Math.random()*canvas.height);
//     this.Velocity = parseInt(Math.random()*maxVelocity);
//     this.Opacity = (((Math.random()*10)+1)*0.1);
//     // this.Redshift = String(parseInt(Math.random()*10+245));
//     // this.Blueshift = String(parseInt(Math.random()*10+245));
//
//     this.UpdateData = function() {
//       this.X -= this.Velocity;
//       // console.log('value of this.Velocity', this.Velocity);
//       // this.X = parseInt(this.X);
//       if(this.X<0.3*window.innerWidth){
//         this.X = canvas.width+1;
//       }
//     };
//
//     this.Draw = function() {
//
//     //   for (var i=0;i<imageData.data.length;i+=4)
//     //   {
//     //   imageData.data[i+0]=255;
//     //   imageData.data[i+1]=0;
//     //   imageData.data[i+2]=0;
//     //   imageData.data[i+3]=255;
//     //   }
//     // ctx.putImageData(imageData,10,10);
//
//     // var pixels = imageData.data;
//     // var w = imageData.width;
//     // var h = imageData.height;
//     //
//     // var l = w * h;
//     // for (var i = 0; i < l; i++) {
//     //     // get color of pixel
//     //     var r = pixels[i*4]; // Red
//     //     var g = pixels[i*4+1]; // Green
//     //     var b = pixels[i*4+2]; // Blue
//     //     var a = pixels[i*4+3]; // Alpha
//     //
//     //     // get the position of pixel
//     //     var y = parseInt(i / w, 10);
//     //     var x = i - y * w;
//     // }
//
//       // ctx.fillStyle = "rgba(255,255,255," + this.Opacity + ")";
//       if(Math.round((Math.random()*twinkleFreq))!=1){
//         // ctx.fillRect(this.X,this.Y,starSize+2,starSize+2);
//         for(var i=this.Y*imageData.width+this.X; i<this.Y*imageData.width+this.X+(starSize+2); i++){
//           // console.log('inside i for twinkle and i is: ', i);
//           console.log('value of imageData.width is ', imageData.width);
//           console.log('value of this.Y', this.Y);
//           imageData.data[i]=255;
//           imageData.data[i+1]=255;
//           imageData.data[i+2]=255;
//           imageData.data[i+3]=this.Opacity;
//         }
//       }
//       if(Math.round((Math.random()*twinkleFreq))==1){
//         // ctx.fillRect(this.X,this.Y,starSize+4,starSize+4);
//         for(var i=this.Y*imageData.width+this.X; i<this.Y*imageData.width+this.X+(starSize+4); i++){
//           imageData.data[i]=255;
//           imageData.data[i+1]=255;
//           imageData.data[i+2]=255;
//           imageData.data[i+3]=this.Opacity;
//         }
//       }
//     };
//   }
// }


  // colorclickfunk(){
  //   // console.log('inside colorclickfunk');
  //   // console.log('value of mobxStore.colorbox is ', mobxStore.colorbox);
  //   mobxStore.setBoxColor(this.state.colorarray[this.state.colorarrayindex]);
  //   if (this.state.colorstartcycle===false){
  //     this.setState({
  //       colorstartcycle: true
  //     })
  //   }else{
  //     if (this.state.colorarrayindex === 0){
  //       var index = this.state.colorarray.length - 1;
  //       // console.log('value of index when colorarrayindex is 0 is ', index);
  //     }else{
  //       var index = this.state.colorarrayindex - 1;
  //     }
  //     mobxStore.setBoxColorPrev(this.state.colorarray[index]);
  //   }
  //   if (this.state.colorarrayindex<this.state.colorarray.length-1){
  //     this.setState({
  //       colorarrayindex: this.state.colorarrayindex + 1
  //     })
  //   }else{
  //     this.setState({
  //       colorarrayindex: 0
  //     })
  //   }
  // }


//DEPRECATED ABOUT PAGE













//
//
//
// import React, { Component } from 'react'
// import glamorous from 'glamorous';
// import renderIf from 'render-if';
// import styled from 'styled-components';
// // import TypeScreen from './TypeScreen';
// // import Typist from 'react-typist';
// import spacepic1 from '../../images/spacepic1.jpg';
// import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
// import { Switch, Route, RedirectWithStatus,  BrowserRouter as Router, withRouter } from 'react-router-dom'
// import { observable, action } from 'mobx';
// import { observer } from 'mobx-react';
// import mobxStore from '../../store/mobxStore';
// import {Motion, spring, StaggeredMotion} from 'react-motion';
// import { Redirect } from 'react-router'
// import './about.css';
//
//
// const GridContentContainer = styled.div`
//   display: grid;
//   background-color: transparent;
//   grid-template-columns: 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw;
//   grid-template-rows: 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh;
//   grid-gap: 0vw;
// `
//
// const PositionRelative = glamorous.div(
//   {
//     position: 'relative',
//     height: '100%',
//     width: '100%'
//   }
// )
//
// const AbsoluteContainer = glamorous.div(
//   {
//     position: 'absolute',
//     x: '0',
//     y: '0',
//     width: '100%',
//     height: '100%'
//   },
//   ({z})=>({
//     zIndex: z
//   }),
// )
//
//
// const Beamdownleft = glamorous.div(
//   {
//     position: 'absolute',
//     height: '1%',
//     zIndex: 100,
//     width: '0%',
//     backgroundColor: 'purple',
//     top: '10%',
//     left: '15%',
//     transform: 'rotate(120deg)',
//     transformOrigin: '0% 0%',
//   },
//   ({width})=>({
//     width: width
//   }),
//   ({background})=>({
//     background: background
//   }),
//   ({opacity})=>({
//     opacity: opacity
//   })
// )
//
// const BeamBackgrounddownleft = glamorous.div(
//   {
//     position: 'absolute',
//     height: '1%',
//     zIndex: 99,
//     width: '0%',
//     backgroundColor: 'purple',
//     top: '10%',
//     left: '15%',
//     transform: 'rotate(120deg)',
//     transformOrigin: '0% 0%',
//   },
//   ({width})=>({
//     width: width
//   }),
//   ({background})=>({
//     background: background
//   }),
//   ({opacity})=>({
//     opacity: opacity
//   })
// )
//
// const StripeTransformation = glamorous.div(
//   {
//     position: 'absolute',
//     height: '100%',
//     width: '100%',
//     left: '0%',
//     top: '0%',
//   },
//   ({top})=>({
//     top: top
//   }),
//   ({left})=>({
//     left: left
//   })
// )
//
//
// const styles = {
//   imagestyle: {
//     maxHeight: '99.999%',
//     width: '100%'
//   },
//   gridboxtrial: {
//     gridRow: '8/9',
//     gridColumn: '8/9',
//     backgroundColor: 'orange'
//   },
//   gridboxtrial1: {
//     gridRow: '4/5',
//     gridColumn: '4/5',
//     backgroundColor: 'purple'
//   },
//   projector:{
//     position: 'fixed',
//     x: 0,
//     y: 0
//   }
// }
//
// const BeamMeUp = ({stripetop, stripeleft}) => {
//       return(
//         <StripeTransformation top={`${stripetop}`} left={`${stripeleft}`}>
//           <PositionRelative>
//             <Motion
//               defaultStyle={{ setgradient: 0}}
//               style={{setgradient: spring(100, {stiffness: 10, damping: 20})
//               }}
//             >
//               {style =>
//                 (
//                   <div>
//                   {
//                     <div>
//                       <Beamdownleft width={`${3*style.setogradient/100}%`} background={`linear-gradient(90deg, transparent, rgba(200,0,200,${1-style.setgradient/100}) ${style.setgradient}%)`}/>
//                       <BeamBackgrounddownleft width={`${3*style.setgradient/100}%`} background={`linear-gradient(90deg, rgba(0,200,0,${style.setgradient/100}) ${style.setgradient}%, rgba(200,0,200,${style.setgradient/100}))`} />
//                     </div>
//                   }
//                   </div>
//                 )
//               }
//             </Motion>
//           </PositionRelative>
//         </StripeTransformation>
//       )
// }
//
// class AboutPage extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       boxcolor: 'transparent',
//       extendarm: false,
//       animationdone: 0,
//       stripes: [{stripetop: `0%`, stripeleft: `0%`},
//              {stripetop: `2%`, stripeleft: `0%`},
//              {stripetop: `4%`, stripeleft: `0%`},
//              {stripetop: `6%`, stripeleft: `0%`},
//              {stripetop: `8%`, stripeleft: `0%`},
//              {stripetop: `10%`, stripeleft: `0%`},
//              {stripetop: `12%`, stripeleft: `0%`},
//              {stripetop: `14%`, stripeleft: `0%`},
//              {stripetop: `16%`, stripeleft: `0%`},
//              {stripetop: `18%`, stripeleft: `0%`},
//              {stripetop: `20%`, stripeleft: `0%`},
//              {stripetop: `22%`, stripeleft: `0%`},
//              {stripetop: `24%`, stripeleft: `0%`},
//              {stripetop: `26%`, stripeleft: `0%`},
//              {stripetop: `28%`, stripeleft: `0%`},
//              {stripetop: `30%`, stripeleft: `0%`},
//              {stripetop: `32%`, stripeleft: `0%`},
//              {stripetop: `34%`, stripeleft: `0%`},
//              {stripetop: `36%`, stripeleft: `0%`},
//              {stripetop: `38%`, stripeleft: `0%`},
//              {stripetop: `40%`, stripeleft: `0%`},
//              {stripetop: `42%`, stripeleft: `0%`},
//              {stripetop: `44%`, stripeleft: `0%`},
//              {stripetop: `46%`, stripeleft: `0%`},
//              {stripetop: `48%`, stripeleft: `0%`},],
//       maxtopstripe: 0,
//       icounter: 0
//     }
//   }
//
//
//   componentDidMount(){
//     this.addstripes(0);
//   }
//
//   addstripes(icounter){
//     console.log('inside addstripes');
//     console.log('value of this.state.stripes is', this.state.stripes);
//     if (icounter<90){
//       icounter = icounter + 1
//       setTimeout(()=>{
//         this.setState({
//           icounter: icounter
//         });
//         this.addstripes(icounter)
//       },500)
//     }
//   }
//
//   render(){
//     let stripereturn;
//            if(this.state.stripes.length!=0){
//                  stripereturn = this.state.stripes.map((stripe,i) => {
//                    if (i<=this.state.icounter){
//                      return (
//                         <BeamMeUp key={i} stripetop={stripe.stripetop} stripeleft={stripe.stripeleft}/>
//                      );
//                    }
//                  });
//            }
//     return (
//         <div style={styles.container}>
//           <AbsoluteContainer z={6}>
//             <PositionRelative>
//               {stripereturn}
//             </PositionRelative>
//           </AbsoluteContainer>
//           <AbsoluteContainer z={5}>
//             <GridContentContainer ref={ (homecontainer) => this.homecontainer = homecontainer}>
//             </GridContentContainer>
//           </AbsoluteContainer>
//           <AbsoluteContainer z={3}>
//             <img style={styles.imagestyle} src={spacepic1}/>
//           </AbsoluteContainer>
//           <AbsoluteContainer z={4}>
//             <div className='hexgraph'/>
//           </AbsoluteContainer>
//         </div>
//     )
//   }
// }
//
// export default withRouter(AboutPage)






// import React, { Component } from 'react'
// import glamorous from 'glamorous';
// import renderIf from 'render-if';
// import styled from 'styled-components';
// // import TypeScreen from './TypeScreen';
// // import Typist from 'react-typist';
// import spacepic1 from '../../images/spacepic1.jpg';
// import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
// import { Switch, Route, RedirectWithStatus,  BrowserRouter as Router, withRouter } from 'react-router-dom'
// import { observable, action } from 'mobx';
// import { observer } from 'mobx-react';
// import mobxStore from '../../store/mobxStore';
// import {Motion, spring, StaggeredMotion} from 'react-motion';
// import { Redirect } from 'react-router'
// import './about.css';
//
// const GridContentContainer = styled.div`
//   display: grid;
//   background-color: transparent;
//   grid-template-columns: 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw 5vw;
//   grid-template-rows: 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh 5vh;
//   grid-gap: 0vw;
// `
//
// const AbsoluteContainer = glamorous.div(
//   {
//     position: 'absolute',
//     x: '0',
//     y: '0',
//     width: '100%',
//     height: '100%'
//   },
//   ({z})=>({
//     zIndex: z
//   }),
// )
//
// const PositionRelative = glamorous.div(
//   {
//     position: 'relative',
//     height: '100%',
//     width: '100%'
//   }
// )
//
//
//
//
// const Beamdownleft = glamorous.div(
//   {
//     position: 'absolute',
//     height: '1%',
//     zIndex: 100,
//     width: '0%',
//     backgroundColor: 'purple',
//     top: '10%',
//     left: '15%',
//     transform: 'rotate(120deg)',
//     transformOrigin: '0% 0%',
//   },
//   ({width})=>({
//     width: width
//   }),
//   ({background})=>({
//     background: background
//   }),
//   ({opacity})=>({
//     opacity: opacity
//   })
// )
//
// const BeamBackgrounddownleft = glamorous.div(
//   {
//     position: 'absolute',
//     height: '1%',
//     zIndex: 99,
//     width: '0%',
//     backgroundColor: 'purple',
//     top: '10%',
//     left: '15%',
//     transform: 'rotate(120deg)',
//     transformOrigin: '0% 0%',
//   },
//   ({width})=>({
//     width: width
//   }),
//   ({background})=>({
//     background: background
//   }),
//   ({opacity})=>({
//     opacity: opacity
//   })
// )
//
// const StripeTransformation = glamorous.div(
//   {
//     position: 'absolute',
//     height: '100%',
//     width: '100%',
//     left: '0%',
//     top: '0%',
//   },
//   ({top})=>({
//     top: top
//   }),
//   ({left})=>({
//     left: left
//   })
// )
//
//
// const styles = {
//   imagestyle: {
//     maxHeight: '99.999%',
//     width: '100%'
//   },
//   gridboxtrial: {
//     gridRow: '8/9',
//     gridColumn: '8/9',
//     backgroundColor: 'orange'
//   },
//   gridboxtrial1: {
//     gridRow: '4/5',
//     gridColumn: '4/5',
//     backgroundColor: 'purple'
//   },
//   projector:{
//     position: 'fixed',
//     x: 0,
//     y: 0
//   }
// }
//
// const BeamMeUp = ({stripetop, stripeleft, wait}) => {
//   console.log('inside BeamMeUp and wait is ', wait);
//   setTimeout(()=>{
//     return(
//       <StripeTransformation top={`${stripetop}`} left={`${stripeleft}`}>
//         <PositionRelative>
//           <Motion
//             defaultStyle={{ setwidth: 0, setgradient: 0, setopacity: 1, setopacity2: 0, setgradient2: 0 }}
//             style={{ setopacity: spring(0,{stiffness: 100, damping: 15}), setopacity2: spring(1,{stiffness: 100, damping: 20}), setwidth: spring(3, {stiffness: 100, damping: 20}), setgradient: spring(100, {stiffness: 100, damping: 20}),  setgradient2: spring(100, {stiffness: 20, damping: 20}),
//             }}
//             onRest={()=>{}}
//           >
//             {style =>
//               (
//                 <div>
//                 {
//                   <div>
//                     <Beamdownleft width={`${style.setwidth}%`} background={`linear-gradient(90deg, transparent, rgba(200,0,200,${style.setopacity}) ${style.setgradient}%)`}/>
//                     <BeamBackgrounddownleft width={`${style.setwidth}%`} background={`linear-gradient(90deg, rgba(0,200,0,${style.setopacity2}) ${style.setgradient2}%, rgba(200,0,200,${style.setopacity}))`} />
//                   </div>
//                 }
//                 </div>
//               )
//             }
//           </Motion>
//         </PositionRelative>
//       </StripeTransformation>
//     )
//   }, wait)
//   return(<div><div>)
// }
//
// class AboutPage extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       boxcolor: 'transparent',
//       extendarm: false,
//       animationdone: 0,
//       icounter: 0,
//       stripes: [
//         {stripetop: `0%`, stripeleft: `0%`},
//         {stripetop: `2%`, stripeleft: `0%`},
//         {stripetop: `4%`, stripeleft: `0%`},
//         {stripetop: `6%`, stripeleft: `0%`},
//         {stripetop: `8%`, stripeleft: `0%`},
//         {stripetop: `10%`, stripeleft: `0%`},
//         {stripetop: `12%`, stripeleft: `0%`},
//         {stripetop: `14%`, stripeleft: `0%`},
//         {stripetop: `16%`, stripeleft: `0%`},
//         {stripetop: `18%`, stripeleft: `0%`},
//         {stripetop: `20%`, stripeleft: `0%`},
//         {stripetop: `22%`, stripeleft: `0%`},
//         {stripetop: `24%`, stripeleft: `0%`},
//         {stripetop: `26%`, stripeleft: `0%`},
//         {stripetop: `28%`, stripeleft: `0%`},
//         {stripetop: `30%`, stripeleft: `0%`},
//         {stripetop: `32%`, stripeleft: `0%`},
//         {stripetop: `34%`, stripeleft: `0%`},
//         {stripetop: `36%`, stripeleft: `0%`},
//         {stripetop: `38%`, stripeleft: `0%`},
//         {stripetop: `40%`, stripeleft: `0%`},
//         {stripetop: `42%`, stripeleft: `0%`},
//         {stripetop: `44%`, stripeleft: `0%`},
//         {stripetop: `46%`, stripeleft: `0%`},
//         {stripetop: `48%`, stripeleft: `0%`},
//       ],
//       maxtopstripe: 0,
//       // timeThen: 0
//     }
//   }
//
//
//   componentDidMount(){
//     // this.addstripes(0);
//     // this.icounter();
//     // this.setState({
//     //   timeThen: Date.now()
//     // })
//   }
//
//   icounter(){
//     if (this.state.icounter<100){
//       this.setState({
//         icounter: this.state.icounter+1
//       }, ()=>{
//         setTimeout(()=>{
//           this.icounter();
//         },500)
//       })
//     }
//   }
//
//   addstripes(maxtopstripe){
//     console.log('inside addstripes');
//     console.log('value of maxtopstripe is ', maxtopstripe);
//     console.log('value of this.state.stripes is', this.state.stripes);
//     if (maxtopstripe<90){
//       maxtopstripe = maxtopstripe + 2
//       var stripearray = this.state.stripes;
//       stripearray.push({stripetop: `${maxtopstripe}%`, stripeleft:'0%'})
//       this.setState({
//         stripes: stripearray
//       }, ()=>{
//         setTimeout(()=>{
//           {this.addstripes(maxtopstripe)}
//         },500)
//       });
//     }
//   }
//
//   // stripesreturn(){
//   //   console.log('inside stripesreturn');
//   //   let stripereturn;
//   //   if(this.state.stripes.length!=0){
//   //         stripereturn = this.state.stripes.map((stripe,i) => {
//   //           // console.log('inside stripes and value i is ', i)
//   //             return (
//   //                <BeamMeUp key={i} stripetop={stripe.stripetop} stripeleft={stripe.stripeleft} wait={500*i}/>
//   //             );
//   //           },500)
//   //         });
//   //   }
//   //   return stripereturn;
//   // }
//
//   render(){
//     let stripereturn;
//     if(this.state.stripes.length!=0){
//       stripereturn = this.state.stripes.map((stripe,i) => {
//           return (
//             <BeamMeUp key={i} stripetop={stripe.stripetop} stripeleft={stripe.stripeleft} wait={500*i}/>
//           );
//         })
//     }
//
//     return (
//         <div style={styles.container}>
//           <AbsoluteContainer z={6}>
//             <PositionRelative>
//               {stripereturn}
//             </PositionRelative>
//           </AbsoluteContainer>
//           <AbsoluteContainer z={5}>
//             <GridContentContainer ref={ (homecontainer) => this.homecontainer = homecontainer}>
//             </GridContentContainer>
//           </AbsoluteContainer>
//           <AbsoluteContainer z={3}>
//             <img style={styles.imagestyle} src={spacepic1}/>
//           </AbsoluteContainer>
//           <AbsoluteContainer z={4}>
//             <div className='hexgraph'/>
//           </AbsoluteContainer>
//         </div>
//     )
//   }
// }
//
// export default withRouter(AboutPage)


// {renderIf(this.state.animationdone>0)(
//  <Motion
//    defaultStyle={{ setopacity: 1 }}
//    style={{ setopacity: spring(0, {stiffness: 150, damping: 20}) }}
//    onRest={()=>{this.setState({animationdone: 2}); console.log('completed second animation and value of animationdone is', this.state.animationdone);}}
//  >
//    {style =>
//      (
//        <div>
//          {
//            <Beam1 width={`10%`} background={`linear-gradient(90deg, transparent, purple 100%)`} opacity={`${style.setopacity}`}/>
//          }
//        </div>
//      )
//    }
//  </Motion>
// )}

// <AbsoluteContainer z={6}>
//   <PositionRelative>
//     <VelocityComponent animation={{ width:this.state.extendarm===false?'0%':'10%'}} duration={1000} complete={()=>{this.setState({animationdone: 1}); console.log('completed first animation and value of animationdone is ', this.state.animationdone);}}>
//       <Arm1>
//         <PositionRelative>
//         <Ball1/>
//         </PositionRelative>
//       </Arm1>
//     </VelocityComponent>
//     {renderIf(this.state.animationdone>0)(
//       <Motion
//         defaultStyle={{ set: 10 }}
//         style={{ set: spring(-220, {stiffness: 100, damping: 25})}}
//         onRest={()=>{this.setState({animationdone: 2}); console.log('completed second animation and value of animationdone is', this.state.animationdone);}}
//       >
//         {style =>
//           (
//             <div>
//               {
//                 <Arm2 transform={`rotate(${style.set}deg)`} />
//               }
//             </div>
//           )
//         }
//       </Motion>
//     )}
//
//     {renderIf(this.state.animationdone>1)(
//       <Motion
//         defaultStyle={{ setwidth: 0, setclip: 0 }}
//         style={{ setwidth: spring(10, {stiffness: 10, damping: 25}), setclip: spring(50, {stiffness: 10, damping: 25})}}
//         onRest={()=>{this.setState({animationdone: 3}); console.log('completed second animation and value of animationdone is', this.state.animationdone);}}
//       >
//         {style =>
//           (
//             <div>
//               {
//                 <Fan1 width={`${style.setwidth}%`} clip={`polygon(50% 0%, ${50-style.setclip}% 100%, ${50+style.setclip}% 100%)`} />
//               }
//             </div>
//           )
//         }
//       </Motion>
//     )}
//
//   </PositionRelative>
// </AbsoluteContainer>


// const Arm1 = glamorous.div(
//   {
//     position: 'fixed',
//     height: '2%',
//     zIndex: 100,
//     width: '0%',
//     backgroundColor: 'silver',
//     transformOrigin: '0% 0%',
//     transform: 'rotate(24deg)',
//     top: '75%',
//     left: '18.5%',
//   }
// )
//
// const Arm2 = glamorous.div(
//   {
//     position: 'fixed',
//     height: '2%',
//     zIndex: 90,
//     width: '10%',
//     backgroundColor: 'silver',
//     top: '82.3%',
//     left: '17.5%',
//   },
//   ({transform})=>({
//     transform: transform,
//     transformOrigin: '100% 60%',
//   })
// )
//
// const Balldeprecated = glamorous.div(
//   {
//     position: 'fixed',
//     // height: '4%',
//     // width: '2%',
//     width: '2%',
//     height: '4%',
//     left: '18%',
//     top: '74.5%',
//     backgroundColor: 'purple',
//     zIndex: 999,
//     // left: '50%',
//     // top: '50%',
//     borderRadius: '60%'
//   }
// )
//
// const Ball1 = glamorous.div(
//   {
//     position: 'fixed',
//     width: .02*window.innerWidth,
//     height: .02*window.innerWidth,
//     left: '90%',
//     top: '-30%',
//     backgroundColor: 'purple',
//     zIndex: 200,
//     borderRadius: '60%'
//   }
// )
//
// const Fan1 = glamorous.div(
//   {
//     position: 'fixed',
//     height: '10%',
//     zIndex: 100,
//     width: '0%',
//     backgroundColor: 'purple',
//     top: '50%',
//     left: '50%',
//     transform: 'rotate(200deg)',
//     transformOrigin: '0% 0%',
//   },
//   ({clip})=>({
//     clipPath: clip
//   }),
//   ({width})=>({
//     width: width
//   })
// )
