import {useState, useEffect} from 'react'
// import Assassin from 'Images/Assassin/Assassin.png'
import { SkillsList } from '../components/SkillsList'
import { useParams } from "react-router-dom"

export const SkillsContainer = () => {
    
    const [skills, setSkills] = useState([])
    const [info, setInfo] = useState({})
    const params = useParams()


    useEffect(() => {
        fetch(`http://localhost:3001/classes/${params.id}`)
            .then(r => r.json())
            .then(data => {
                setSkills(data.skills)
                setInfo(data)
            })
            .catch(error => console.log(error))
    }, [params.id])
    return (
        <div>
            <SkillsList skills={skills} info={info}/>
        </div>
    )
}