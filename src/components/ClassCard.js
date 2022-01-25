
export const ClassCard = ({classs}) => {
    return (
        <div style={{border:"solid", width: "17%", height:"300px", margin:"auto"}}>
            <h3>{classs.class}</h3>
            <img src={classs.classLogo} alt={classs.class}/>
            <h4>See More</h4>
            
        </div>
    )
}
