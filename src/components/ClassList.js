import { ClassCard } from "./ClassCard"

export const ClassList = ({classes}) => {
    const ClassesCard = classes.map(classs => {
        <ClassCard key={classs.id} clas={classs} />
    })
    return (
        <div>
            {ClassesCard}
        </div>
    )
}
