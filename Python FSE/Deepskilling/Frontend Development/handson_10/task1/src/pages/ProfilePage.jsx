import { useSelector, useDispatch } from "react-redux";
import { unenroll } from "../store/enrollmentSlice";

function ProfilePage() {
  const dispatch = useDispatch();

  const enrolledCourses = useSelector(
    (state) => state.enrollment.enrolledCourses
  );

  return (
    <div>
      <h2>My Enrolled Courses</h2>

      {enrolledCourses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>

          <p>{course.code}</p>

          <button
            onClick={() =>
              dispatch(unenroll(course.id))
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProfilePage;