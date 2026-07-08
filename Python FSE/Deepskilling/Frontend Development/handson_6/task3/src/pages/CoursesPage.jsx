import { useDispatch } from "react-redux";
import { enroll } from "../redux/enrollmentSlice";

import courses from "../data";
import CourseCard from "../components/CourseCard";

function CoursesPage() {

  const dispatch = useDispatch();

  return (

    <div className="course-list">

      {courses.map(course => (

        <CourseCard
          key={course.id}
          {...course}
          onEnroll={() => dispatch(enroll(course))}
        />

      ))}

    </div>

  );

}

export default CoursesPage;