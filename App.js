import React from 'react';
import './App.css';

import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action' fetchUrl={requests.fecthActionMovies}/>
      <Row title='Comedy' fetchUrl={requests.fecthComdeyMovies}/>
      <Row title='Horror' fetchUrl={requests.fecthHorrorMovies}/>
      <Row title='Romance' fetchUrl={requests.fecthRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fecthDocumentaries}/>
    </div>
  );
}

export default App;
