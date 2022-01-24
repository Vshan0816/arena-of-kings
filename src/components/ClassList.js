import { ClassCard } from "./ClassCard"

export const ClassList = ({classes}) => {
    const ClassesCard = classes.map(classs => {
        return <ClassCard key={classs.id} classs={classs} />
    })
    return (
        <div>
            <h2>Classes</h2>
            <div style ={{display: "flex", flexWrap: "wrap"}}> 
                {ClassesCard}
            </div>
        </div>
    )
}
