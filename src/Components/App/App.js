import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: '1',
          artist: '10',
          album: '100',
          id: '1'
        },
        {
          name: '2',
          artist: '20',
          album: '200',
          id: '2'
        },
        {
          name: '3',
          artist: '30',
          album: '300',
          id: 'x3'
        }
      ],
      playListName: 'My Playlist',
      playListTracks: [
        {
          name: 'x1',
          artist: 'x10',
          album: 'x100',
          id: 'x1'
        },
        {
          name: 'x2',
          artist: 'x20',
          album: 'x200',
          id: 'x2'
        },
        {
          name: 'x3',
          artist: 'x30',
          album: 'x300',
          id: 'x3'
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.changePlaylistName = this.changePlaylistName.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playListTracks;
    tracks.includes(track) ? console.log('Error: No se puede incluir la canción porque ya hay una canción con mimso nombre, artista, album y id') : tracks.unshift(track);
    this.setState({playListTracks : tracks});
  }
  removeTrack(track) {
    let tracks = this.state.playListTracks;
    let playlist = tracks.filter(set => set !== track);
    this.setState({playListTracks : playlist});
  }
  changePlaylistName(event) {
    this.setState({playListName: event.target.value});
  }
  render () {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playListName} playListTracks={this.state.playListTracks} onChangeName={this.changePlaylistName} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
