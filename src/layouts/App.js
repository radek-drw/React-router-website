import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Section from './Section';

import '../styles/App.css';

const App = () => {
  return (
    <div className="app">
      <header>{<Header />}</header>

      <main>
        <aside>{<Navigation />}</aside>
        <section>{<Section />}</section>
      </main>

      <footer>{<Footer />}</footer>
    </div>
  )
}

export default App;