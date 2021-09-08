import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Login from './components/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/trivia-react-redux/feedback"
          render={ () => <Feedback /> }
        />
        <Route
          path="/trivia-react-redux/settings"
          render={ (props) => <Settings { ...props } /> }
        />
        <Route
          path="/trivia-react-redux/ranking"
          render={ () => <Ranking /> }
        />
        <Route
          path="/trivia-react-redux/game"
          render={ (props) => <Game { ...props } /> }
        />
        <Route
          exact
          path="/trivia-react-redux/"
          render={ (props) => <Login { ...props } /> }
        />
      </Switch>
    </div>
  );
}
