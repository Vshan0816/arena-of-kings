import {useState, useEffect} from 'react'
import { ClassList } from '../components/ClassList'

export const ClassContainer = () => {
    
    const [classes, setClasses] = useState([])
    const fetchData = () => {
        fetch("http://localhost:3001/classes")
        .then(response => response.json())
        .then(data => setClasses(data))
        .catch(error => alert(error))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <ClassList />
        </div>
    )
}
   