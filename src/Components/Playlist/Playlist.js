import React from 'react';
import './Playlist.css';
import Tracklist from '../TrackList/TrackList';

class Playlist extends React.Component {
    render() {
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.props.onChangeName} />
                <Tracklist tracks={this.props.playListTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;