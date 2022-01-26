
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from './Navbar'
import {Header} from './Header'
import {CharacterForm} from './CharacterForm'
import {Home} from './Home'
import {ClassesContainer} from '../containers/ClassesContainer'
import {SkillsContainer} from '../containers/SkillsContainer'
import {CharactersList} from './CharactersList'
import {useState, useEffect} from 'react'

function App() {
  const [classes, setClasses] = useState([])
    const fetchData = () => {
        fetch("http://localhost:3001/classes")
        .then(response => response.json())
        .then(data => setClasses(data))
        .catch(error => alert(error))
    }

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path ="/characters/new">
            <CharacterForm classes={classes}/>
          
          </Route>
          <Route path ="/characters/list">
            <CharactersList classes={classes}/>
          
          </Route>
          <Route path ="/classes/:id">
            <SkillsContainer />
          </Route>


          <Route path ="/classes">
            <ClassesContainer classes={classes}/>
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
