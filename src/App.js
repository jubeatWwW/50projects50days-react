import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './modules/home/home';
import ExpandingCards from './modules/expanding-cards/expanding-cards';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects/expanding-cards">Expanding Cards</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/projects/expanding-cards">
          <ExpandingCards />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
