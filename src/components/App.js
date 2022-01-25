
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from './Navbar'
import {Header} from './Header'
import {CharacterForm} from './CharacterForm'
import {Home} from './Home'
import {ClassesContainer} from '../containers/ClassesContainer'
import {SkillsContainer} from '../containers/SkillsContainer'
import {YourCharacters} from './YourCharacters'

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
          <Route path ="/characters/list">
            <YourCharacters />
          
          </Route>
          <Route path ="/classes/:id">
            <SkillsContainer />
          </Route>


          <Route path ="/classes">
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
