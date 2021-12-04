import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import { GithubState } from './context/gitHub/GithubState';

function App() {
  const [footer] = useState({
    telegram: 'https://t.me/sergunder',
    github: 'https://github.com/NazarovCC',
  });
  return (
    <GithubState>
      <BrowserRouter>
        <div className="container">
          <BreakpointProvider>
            <NavBar />
          </BreakpointProvider>
          <h1>Резюме</h1>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <BreakpointProvider>
              <Route path="/project" exact component={Project}></Route>
            </BreakpointProvider>
          </Switch>
          <Footer telegram={footer.telegram} github={footer.github} />
        </div>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
