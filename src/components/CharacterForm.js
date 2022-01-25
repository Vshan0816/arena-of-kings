import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export const CharacterForm = ({classes}) => {
    const [classType, setClassType] = useState("")
    const [filteredClass, setFilteredClass] = useState([])
    const [filteredSkillList, setFilteredSkillList] = useState([])
    const [name, setName] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [skill4, setSkill4] = useState("")
    const [skill5, setSkill5] = useState("")
    const [skill6, setSkill6] = useState("")
    const [skill7, setSkill7] = useState("")
    const [skill8, setSkill8] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCharacter = {name, classType, skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8}
        fetch("http://localhost:3001/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCharacter)
        })
    }
    

    const handleSelect = (selectValue) => {
        // console.log(selectValue)
        const filteredClasses = classes.filter(classs=> classs.class===selectValue)
        setFilteredClass(filteredClasses)
        // console.log(filteredClasses)
        const filteredSkills = filteredClasses[0].skills.map( skill => {
            return skill.skillName
        })
        setFilteredSkillList(filteredSkills)
        

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Create a Character</h1>
            <h3>Instructions:</h3>
            <p>After selecting a class type, a list of class skills should appear</p>
            <p>Please fill out the form with the exact names of the skills, including spaces.</p>
            <p>Do not repeat the names of the same skill</p>
            <label htmlFor="name">Name</label>
            <input onChange={e => setName(e.target.value)} type="text" value={name} /><br />< br />
            <label htmlFor="class-select">Select a Class Type:</label>
            <select 
                name="classes"
                id="class-select"
                onChange={e => {
                    handleSelect(e.target.value)
                    setClassType(e.target.value)
                }}>
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
            </select><br />< br />

            {filteredSkillList.map(skillName =>{
                return <p>{`${skillName}`}</p>
            })}
            {/* <label htmlFor="name">Name</label>
            <input onChange={e => setName(e.target.value)} type="text" value={name} /><br />< br /> */}
            <label htmlFor="skill1">Choose First Skill</label>
            <input onChange={e => setSkill1(e.target.value)} type="text" value={skill1} /><br />< br />
            <label htmlFor="skill2">Choose Second Skill</label>
            <input onChange={e => setSkill2(e.target.value)} type="text" value={skill2} /><br />< br />
            <label htmlFor="skill3">Choose Third Skill</label>
            <input onChange={e => setSkill3(e.target.value)} type="text" value={skill3} /><br />< br />
            <label htmlFor="skill4">Choose Fourth Skill</label>
            <input onChange={e => setSkill4(e.target.value)} type="text" value={skill4} /><br />< br />
            <label htmlFor="skill5">Choose Fifth Skill</label>
            <input onChange={e => setSkill5(e.target.value)} type="text" value={skill5} /><br />< br />
            <label htmlFor="skill6">Choose Sixth Skill</label>
            <input onChange={e => setSkill6(e.target.value)} type="text" value={skill6} /><br />< br />
            <label htmlFor="skill7">Choose Seventh Skill</label>
            <input onChange={e => setSkill7(e.target.value)} type="text" value={skill7} /><br />< br />
            <label htmlFor="skill8">Choose Eigth Skill</label>
            <input onChange={e => setSkill8(e.target.value)} type="text" value={skill8} /><br />< br />
            <input type="submit" value="Create" />        
            
        </form>
    )
}
