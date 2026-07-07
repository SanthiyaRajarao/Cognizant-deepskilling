function CourseCard(props){

    return(

        <div className="card">

            <h2>{props.name}</h2>

            <p>Code : {props.code}</p>

            <p>Credits : {props.credits}</p>

            <p>Grade : {props.grade}</p>

        </div>

    );

}

export default CourseCard;