import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hirdetesek from './components/Hirdetesek';
import Hirdetes from './components/Hirdetes';
import Rolam from './components/Rolam';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path={"/"}>
                <Hirdetesek/>
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
