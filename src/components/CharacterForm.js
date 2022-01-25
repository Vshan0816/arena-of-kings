import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export const CharacterForm = () => {
    const [type, setType] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Create a Character</h1>
            <label htmlFor="class-select">Select a Class Type:</label>
            <select 
                name="classes"
                id="class-select"
                onChange={e => setType(e.target.value)}>
                <option value="">Please Select a Class</option>
                <option value="assassin">Assassin</option>
                <option value="champion">Champion</option>
                <option value="elder">Elder</option>
                <option value="lich">Lich</option>
                <option value="mystic">Mystic</option>
                <option value="nihilist">Nihilist</option>
                <option value="paladin">Paladin</option>
                <option value="ranger">Ranger</option>
                <option value="scholar">Scholar</option>
                <option value="wizard">Wizard</option>
            </select>
            {console.log(type)}
        </form>
    )
}
