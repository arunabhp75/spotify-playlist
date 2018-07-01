import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let color='red';

let fakeServerData = {
    user: {
        name:"Arunabh",
        playlists:[
           {
            name: "My Favorites",
            songs: [{name:"Song1",duration:1345},{name: "Song2", duration:2345},{name:"Song3",duration:2213}],
            },  
            {
            name: "Rap",
            songs: [{name:"MAD City",duration:1345},{name: "Really?", duration:2345},{name:"Yeah",duration:2213}],
            },  
            {
            name: "Rock",
            songs: [{name:"Song1",duration:1345},{name: "Song2", duration:2345},{name:"Song3",duration:2213}],
            },
            {
            name: "EDM",
            songs: [{name:"Song1",duration:1345},{name: "Song2", duration:2345},{name:"Song3",duration:990}],
            },
    ]  
    }
};

class PlaylistCounter extends Component{
    render(){
        return(
            <div className="aggregate"> 
            <h2> {this.props.playlists && this.props.playlists.length} playlist </h2>
            </div>
        );
    }
}

class HoursCounter extends Component{
    render(){
        let allsongs = this.props.playlists.reduce((songs, playlist)=>{
            return songs.concat(playlist.songs)
        },[])
        let totalDuration=allsongs.reduce((sum, song)=>{
            sum=sum+song.duration
            return sum
            
        },0)
        return(
            <div className="aggregate"> 
            <h2> {Math.round(totalDuration/60)} hours </h2>
            </div>
        );
    }
}

class Filter extends Component{
    render(){
        return(
            <div>
            <img/>
            <input type="text" />
            </div>
        );
    }
}

class Playlist extends Component{
    render(){
        return(
            <div className="playlist">
                <img />
                <h3>{this.props.data.name}</h3>
                <ul>
                {
                this.props.data.songs.map((songs) =>
                <li>{songs.name}</li>
            )
            }
                </ul>
            </div>
        );
    }
}
class App extends Component {
    constructor(){
        super();
        this.state={serverData: {}}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({serverData: fakeServerData});
        },1000);
        
    }
  render() {
    return (
        <div className="App">
        {this.state.serverData.user ?
        <div>
      <h1> {this.state.serverData.user && this.state.serverData.user.name}'s Playlist 
        </h1> 
        
        
        
        <PlaylistCounter playlists={this.state.serverData.user && this.state.serverData.user.playlists}/>
        <HoursCounter playlists={this.state.serverData.user && this.state.serverData.user.playlists}/>
        <Filter/>
        {
        this.state.serverData.user.playlists.map((playlist) => 
        <Playlist data={playlist} />
        
        )}
        </div> : <h1>Loading...</h1>
        }
        </div>
    );
  }
}

export default App;
