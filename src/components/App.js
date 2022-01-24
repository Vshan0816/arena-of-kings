
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from './Navbar'
import {Header} from './Header'
import {CharacterForm} from './CharacterForm'
import {ClassCard} from './ClassCard'
import {Home} from './Home'
import {ClassesContainer} from '../containers/ClassesContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path ="/characters/new">
            <CharacterForm />
          </Route>

          <Route path ="/characters/:id">
            <ClassCard />
          </Route>

          <Route path ="/characters">
            <ClassesContainer />
          </Route>

          <Route path ="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
