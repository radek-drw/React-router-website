import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Section from './Section';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          {<Header />}
        </header>

        <main>
          <aside>
            {<Navigation />}
          </aside>
          <section>
            {<Section />}
          </section>
        </main>

        <footer>
          {<Footer />}
        </footer>
      </div>
    )
  }
}

export default App;