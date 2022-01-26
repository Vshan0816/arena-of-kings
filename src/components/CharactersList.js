import { useEffect, useState} from 'react';
import { CharacterCard } from './CharacterCard';

export const CharactersList = ({classes}) => {
  const [characters, setCharacters] = useState([])
  const fetchData = () => {
    fetch("http://localhost:3001/characters")
    .then(response => response.json())
    .then(data => setCharacters(data))
    .catch(error => alert(error))
  }

  useEffect(() => {
    fetchData()
  }, []) 


  const CharactersCard = characters.map(character => {
    // console.log(character)
    return <CharacterCard 
      key={character.id} 
      character={character}
      classes={classes}/>
  })

  return (
    <div>
      <h2>Here are Your Characters</h2>
      <div style ={{display: "flex", flexWrap: "wrap"}}> 
        {CharactersCard}
      </div>
    </div>
  )
};

