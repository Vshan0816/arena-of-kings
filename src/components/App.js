
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from './Navbar'
import {Header} from './Header'
import {CharacterForm} from './CharacterForm'
import {ClassCard} from './ClassCard'
import {Home} from './Home'
import {CharactersContainer} from '../containers/CharactersContainer'

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
            <CharactersContainer />
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
