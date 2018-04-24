import React, {Component} from 'react';

class ChartDisplay extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartsongs: [],
      currentSong: null
    };
  };

  componentDidMount(){
  fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({chartsongs: json}));
  }

  render(){
    return(
      console.log("hello!")
    );
  };

};

export default ChartDisplay;
