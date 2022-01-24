
export const ClassCard = ({classs}) => {
    return (
        <div>
            <h3>{classs.class}</h3>
            <img src={classs.classLogo} alt={classs.class}/>
            
        </div>
    )
}
