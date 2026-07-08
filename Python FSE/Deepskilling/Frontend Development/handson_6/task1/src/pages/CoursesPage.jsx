import courses from "../data";
import CourseCard from "../components/CourseCard";

function CoursesPage() {

  return (

    <div>

      <h2>Courses</h2>

      <div className="course-list">

        {courses.map(course => (

          <CourseCard
            key={course.id}
            course={course}
          />

        ))}

      </div>

    </div>

  );

}

export default CoursesPage;