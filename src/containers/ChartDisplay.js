import React, {Component} from 'react';
import SongList from '../components/SongList'

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
    console.log(this.chartsongs);
  }

  render(){
    return(
      <div>
        <h1>The UK Top 20 Chart</h1>
        <SongList chartsongs={this.state.chartsongs}/>
      </div>
    );
  };

};

export default ChartDisplay;
