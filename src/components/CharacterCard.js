import React from 'react';

export const CharacterCard = ({character, classes}) => {
    
  const superFind = (skillName) => {
     return   classes
        .find(classs => character.classType === classs.class)
        .skills
        .find(skill => character[skillName] === skill.skillName)
        .icon
        
  }  

  return (
    <div>
        <p>{character.name}</p>
        {character && classes.length > 0
        ?  <div> 
                {character.skill1}
                
                <img src={`../${superFind("skill1")}`} />
           </div>
        :null}
    </div>
  )
};
