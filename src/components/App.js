
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from './Navbar'
import {Header} from './Header'
import {CharacterForm} from './CharacterForm'
import {ClassCard} from './ClassCard'
import {ClassList} from './ClassList'
import {Home} from './Home'

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
            <ClassList />
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
