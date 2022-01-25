import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export const CharacterForm = ({classes}) => {
    const [type, setType] = useState("")
    const [filteredSkills, setFilteredSkills] = useState(classes)
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    // const skillMap = classes.map(classs=>{ 
    //     return classs.skills.map(skill=>{
              
    //     })
    // })

    const handleSelect = (selectValue) => {
        console.log(selectValue)
        const filteredClasses = classes.filter(classs=> classs.class===selectValue)
        setFilteredSkills(filteredClasses)
        console.log(filteredClasses)
        

    }
    console.log(filteredSkills)
    return (
        <form onSubmit={handleSubmit}>
            <h1>Create a Character</h1>
            <label htmlFor="class-select">Select a Class Type:</label>
            <select 
                name="classes"
                id="class-select"
                onChange={e => {
                    handleSelect(e.target.value)}}>
                <option value="">Please Select a Class</option>
                <option value="Assassin">Assassin</option>
                <option value="Champion">Champion</option>
                <option value="Elder">Elder</option>
                <option value="Lich">Lich</option>
                <option value="Mystic">Mystic</option>
                <option value="Nihilist">Nihilist</option>
                <option value="Paladin">Paladin</option>
                <option value="Ranger">Ranger</option>
                <option value="Scholar">Scholar</option>
                <option value="Wizard">Wizard</option>
            </select>
            {}
        
            
        </form>
    )
}
