import React, {Component} from 'react';
import Song from './Song';

class SongList extends Component{
  
  render(){
    const songList = this.props.chartsongs.map(entry => {
      return(
        <entry className="entry">{entry["im:name"].label}
        </entry>
      );
    });
    return <div className="songList">{songList}</div>
  }
}

export default SongList;
