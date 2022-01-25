import { SkillCard } from "./SkillCard"

export const SkillsList = ({skills, info}) => {
    const SkillsCard = skills.map(skill=> {
        return <SkillCard key={skill.skillName} skill={skill} />
    })
    return (
        <div>
            <h2>{info.class} Skills</h2>
            <div style ={{display: "flex", flexWrap: "wrap"}}> 
                 {SkillsCard}
            </div>
        </div>
    )
}
