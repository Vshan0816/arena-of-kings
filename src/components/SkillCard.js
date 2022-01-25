export const SkillCard = ({skill}) => {
    return (
        <div style={{border:"solid", width: "17%", height:"25%", margin:"auto"}}>
            <h3>{skill.skillName}</h3>
            <img src={`../${skill.icon}`} alt={skill.skillName}/>
            <p>Cost: {skill.cost}</p>
            <p>Cast Time: {skill.castTime}</p>
            <p>Cooldown: {skill.cooldown}</p>
            <p>Range: {skill.range}</p>
            <p>Description: {skill.description}</p>
        </div>
    )
}
