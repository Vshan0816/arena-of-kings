import React from 'react';

export const CharacterCard = ({character, classes}) => {
  const findClassImage = () => {
    return  classes
            .find(classs => character.classType === classs.class)
            .classLogo
  } 
  const findSkillImage = (skillName) => {
     return classes
            .find(classs => character.classType === classs.class)
            .skills
            .find(skill => character[skillName] === skill.skillName)
            .icon
        
  }  

  return (
    <div style={{border:"solid", width: "17 %", height:"25%", margin:"auto"}}>
        <p>{character.name}</p>
        {character && classes.length > 0
        ? <div>
                <p>Class: {character.classType}</p>
                <img src={`../${findClassImage()}`} alt={character.classType} />
              <div>
                {character.skill1}<br/>
                <img src={`../${findSkillImage("skill1")}`} alt={character.skill1} />
              </div>
              <div>
                {character.skill2}<br/>
                <img src={`../${findSkillImage("skill2")}`} alt={character.skill2} />
              </div> 
              <div>
                {character.skill3}<br/>
                <img src={`../${findSkillImage("skill3")}`} alt={character.skill3} />
              </div>
              <div>
                {character.skill4}<br/>
                <img src={`../${findSkillImage("skill4")}`} alt={character.skill4} />
              </div>
              <div>
                {character.skill5}<br/>
                <img src={`../${findSkillImage("skill5")}`} alt={character.skill5} />
              </div>
              <div>
                {character.skill6}<br/>
                <img src={`../${findSkillImage("skill6")}`} alt={character.skill6} />
              </div>
              <div>
                {character.skill7}<br/>
                <img src={`../${findSkillImage("skill7")}`} alt={character.skill7} />
              </div>
              <div>
                {character.skill8}<br/>
                <img src={`../${findSkillImage("skill8")}`} alt={character.skill8} />
              </div>
           </div>
        :null}
    </div>
  )
};
