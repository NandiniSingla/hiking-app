import React from 'react';
import Header from './components/Header';
import PlacesToVisit from './components/PlacesToVisit';
import Mountaineering from './components/Mountaineering';
import RockClimbing from './components/RockClimbing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PlacesToVisit />
      <Mountaineering />
      <RockClimbing />
      <Footer />
    </div>
  );
}

export default App;
