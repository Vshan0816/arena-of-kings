import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { SkillCard } from "./SkillCard";

export const ClassSkills = () => {
    const [skills, setSkills] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/classes/${params.id}`)
            .then(r => r.json())
            .then(data => setSkills(data))
    }, [params.id])
        console.log(skills)

    const skillsCard = skills.skills.map(skill => {
        
    })
    
    
    return (
        <div>
            
        </div>
    )
}
