import React, { Component } from 'react'
import glamorous from 'glamorous';
import renderIf from 'render-if';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Typist from 'react-typist';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import mobxStore from './store/mobxStore';
import createHistory from 'history/createBrowserHistory'
import { Route, Redirect } from 'react-router'

const history = createHistory()

const TVScreen = glamorous.div(
  {
    position: "relative",
    width: '20%',
    height: '40vh',
    margin: '0 1%',
    backgroundColor: 'black',
    borderRadius: '50% / 10%',
    color: 'white',
    textAlign: 'center',
    textIndent: '.1em',
    ":before": {
      content: '',
      position: 'absolute',
      top: '10%',
      bottom: '10%',
      right: '-5%',
      left: '-5%',
      background: 'inherit',
      borderRadius: '5% / 50%',
    }
  }
)


const styles = {
  terminal: {
    backgroundColor: 'black',
    color: 'green',
    height: '100%',
    width: '100%'
  }
}

@observer
class TypeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      initarray: [
        "initializing: awesome",
        "initializing: cat pictures",
        "initializing: doge",
        "initializing: dankmemes",
        "initializing: mikedang",
        "initializing: wombats",
        "initializing: platypi",
        "initializing: normalpi",
        "initializing: yummypiE",
      ],
      initarrayindex: 0
    }
  }

  componentWillReact(){
    console.log('inside componentWillReact in TypeScreen');
    console.log('the routes in mobxStore have changed: ', mobxStore.route);
  }

  componentDidMount(){
    var self = this;
    function loopinit(index){
      setTimeout(()=>{
        self.setState({
          initarrayindex: index
        }, ()=>{
          if (index<self.state.initarray.length){
            index = index + 1
            loopinit(index)
          }
        })
      }, 200)
    }
    loopinit(this.state.initarrayindex+1)
  }

  handlesethistory(newpath){
    console.log('inside handlepushhistory');
    this.props.setHistory(newpath)
  }

  render(){
    return (
        <div style={styles.terminal}>
          <Typist>
            In the beginning was the command line...
          <br/>
          </Typist>
          <div>
            <p>
              {this.state.initarray[this.state.initarrayindex]}
            </p>
          </div>
          <br/>
          <Typist>
            <div>
              <p>
                root>
              </p>
            </div>
            <div onClick={()=>{this.handlesethistory('/home')}}>
              <p>
                Home_Page
              </p>
            </div>
            <div onClick={()=>{this.handlesethistory('/work')}}>
              <p>
                My_Work
              </p>
            </div>
          </Typist>
        </div>
    )
  }
}

export default TypeScreen
