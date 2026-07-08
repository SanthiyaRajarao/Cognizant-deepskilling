import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";

function ProfilePage() {
  const { enrolledCourses, removeCourse } =
    useContext(EnrollmentContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Enrolled Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled.</p>
      ) : (
        enrolledCourses.map((course) => (
          <div className="card" key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.code}</p>

            <button onClick={() => removeCourse(course.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProfilePage;