/*Importa a React (la librería) del módulo react*/
/*la almacena en la variable React*/
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//SearchBar es una variable creada aquí, que contiene el código
//definido por defecto en el archivo seach_bar.js
//si yo definiera por defecto una variable llamada perro, ese sería el valor

/*this name does'nt have to be like this; a var with the appi key*/
/*esta API_KEY te permite hacer peticiones a youtube*/
const API_KEY = 'AIzaSyDiwRFvqwTGqW3mVZaneZiD3JOgFfApzVE';

/*Create a new component. This component should produce some html*/
class App extends Component {
  constructor (props){
    super(props);

    this.state={
      videos:[],
      selectedVideo:null
    };
    this.videoSearch('surfboards');
/*acá tenías el código que está dentro de videoSearch, pero lo
organizaste mejor, en ese método aparte XD*/
    }

    videoSearch(term){
      YTSearch({key:API_KEY, term:term},
        (videos) => {
          this.setState({
            videos:videos,
            selectedVideo:videos[0]
          });
        });
    }

  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300)

  return (//paréntesis para agrupar todo el código (no es obligatorio)
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
          );
        }
}

/*Take this component´s generated HTML and put it on the page*/
ReactDOM.render(<App />, document.querySelector('.container'));
