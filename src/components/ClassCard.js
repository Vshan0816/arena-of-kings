import { NavLink } from "react-router-dom"

export const ClassCard = ({classs}) => {
    return (
        <div style={{border:"solid", width: "17%", height:"300px", margin:"auto"}}>
            <h3>{classs.class}</h3>
            <img src={classs.classLogo} alt={classs.class}/>
            <br></br>
            <NavLink to={`/classes/${classs.id}`}>See Skills</NavLink>
            
        </div>
    )
}
