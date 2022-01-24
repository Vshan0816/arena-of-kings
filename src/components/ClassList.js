import { ClassCard } from "./ClassCard"

export const ClassList = ({classes}) => {
    const ClassesCard = classes.map(classs => {
        return <ClassCard key={classs.id} classs={classs} />
    })
    return (
        <div>
            {ClassesCard}
        </div>
    )
}
