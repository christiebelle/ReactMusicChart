import React, {Component} from 'react';

class ChartDisplay extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartsongs: [],
      currentSong: null
    };
  }

  render(){
    return(
      console.log("hello!")
    );
  };

};

export default ChartDisplay;
