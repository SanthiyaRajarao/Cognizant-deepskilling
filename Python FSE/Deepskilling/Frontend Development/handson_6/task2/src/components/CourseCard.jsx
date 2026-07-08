import { Link, useNavigate } from "react-router-dom";

function CourseCard({ course }) {

  const navigate = useNavigate();

  function handleEnroll() {

    alert(course.name + " Enrolled Successfully");

    navigate("/profile");

  }

  return (

    <div className="card">

      <h2>{course.name}</h2>

      <p>Code: {course.code}</p>

      <p>Credits: {course.credits}</p>

      <p>Grade: {course.grade}</p>

      <Link to={`/courses/${course.id}`}>
        View Details
      </Link>

      <br /><br />

      <button onClick={handleEnroll}>
        Enroll
      </button>

    </div>

  );
}

export default CourseCard;