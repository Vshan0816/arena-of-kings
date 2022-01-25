
import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    fontweight: "bold",
    verticalAlign: "center"
}

export const Navbar = () => {
    return (
        <div>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact style = {style}
                to ="/">
                Home
            </NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact style = {style}
                to ="/classes">
                Classes
            </NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact style = {style}
                to ="/characters/new">
                New Character
            </NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact style = {style}
                to ="/characters/list">
                Your Characters
            </NavLink>
        </div>
    )
}
