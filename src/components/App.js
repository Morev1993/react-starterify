import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    <header className="container">
      <h1><Link to="/">Prototype {version}</Link></h1>
      <Link to="/about">About</Link>
      <Link to="/poweredby">Powered by</Link>
    </header>
    <section className="container">
      {children || 'Welcome to React Starterify'}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
