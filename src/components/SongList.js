import React, {Component} from 'react';
import Song from './Song';

class SongList extends Component{
  render(){
    const songList = this.props.chartsongs.map(entry => {
      return(
        <entry title={entry[im:name].label} key={song.id}>
        </entry>
      );
    });
    return <div className="songlist">{songList}</div>
  }
}

export default SongList;
