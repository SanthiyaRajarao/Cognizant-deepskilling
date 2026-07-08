import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";
import data from "../data";

function CoursesPage() {
  const { enrollCourse } = useContext(EnrollmentContext);

  return (
    <div className="course-list">
      {data.map((course) => (
        <div className="card" key={course.id}>
          <h2>{course.name}</h2>
          <p>Code: {course.code}</p>
          <p>Credits: {course.credits}</p>
          <p>Grade: {course.grade}</p>

          <button onClick={() => enrollCourse(course)}>
            Enroll
          </button>
        </div>
      ))}
    </div>
  );
}

export default CoursesPage;