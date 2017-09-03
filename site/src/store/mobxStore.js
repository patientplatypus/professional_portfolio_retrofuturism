import { observable, action, computed, observer } from 'mobx';

class MobxStore {
  @observable colorbox={r: 0, g: 0, b: 0};
  @observable colorboxprev = {r: 0, g: 0, b: 0};
  @observable colorindex = 0
  @observable route = '/home'
  @observable projectorheight = -1
  @observable projectorwidth = -1
  @observable projectorpoint1 = null
  @observable projectorpoint2 = null

  @action setBoxColor = (color) => {
    this.colorbox = color
  }

  @action setBoxColorPrev = (color) => {
    this.colorboxprev = color
  }

  @action setColorIndex = (index) => {
    if (index === 5){
      this.colorindex = 0
    }else{
      this.colorindex = index
    }
  }

  @action setProjectorHeight = (height) => {
    this.projectorheight = height
  }
  @action setProjectorWidth = (width) => {
    this.projectorwidth = width
  }
  @action setRouteTo = (page) => {
    this.route = page
    console.log('inside setRouteTo in mobxStore and it is: ', this.route);
  }
  @action setProjectorPoint1 = (point) => {
    this.projectorpoint1 = point
  }
  @action setProjectorPoint2 = (point) => {
    this.projectorpoint2 = point
  }

}

const mobxStore = new MobxStore()
export default mobxStore
