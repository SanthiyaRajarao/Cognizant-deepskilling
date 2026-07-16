import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { enroll, unenroll } from "../store/enrollmentSlice";

function CoursesPage() {
  const dispatch = useDispatch();

  const enrolledCourses = useSelector(
    (state) => state.enrollment.enrolledCourses
  );

  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      code: "CS301",
      credits: 4,
    },
    {
      id: 2,
      name: "JavaScript",
      code: "CS302",
      credits: 3,
    },
    {
      id: 3,
      name: "HTML & CSS",
      code: "CS303",
      credits: 3,
    },
    {
      id: 4,
      name: "Database Systems",
      code: "CS304",
      credits: 4,
    },
    {
      id: 5,
      name: "Operating Systems",
      code: "CS305",
      credits: 3,
    },
  ];

  const handleEnroll = (course) => {
    const alreadyEnrolled = enrolledCourses.find(
      (c) => c.id === course.id
    );

    if (!alreadyEnrolled) {
      dispatch(enroll(course));
    }
  };

  return (
    <div className="courses-page">

      {/* Available Courses */}

      <h2>Available Courses</h2>

      <div className="course-list">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <h3>{course.name}</h3>

            <p>
              <strong>Code:</strong> {course.code}
            </p>

            <p>
              <strong>Credits:</strong> {course.credits}
            </p>

            <button onClick={() => handleEnroll(course)}>
              Enroll
            </button>
          </div>
        ))}
      </div>

      {/* Enrolled Courses */}

      <h2>My Enrolled Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled.</p>
      ) : (
        <div className="course-list">
          {enrolledCourses.map((course) => (
            <div className="card" key={course.id}>
              <h3>{course.name}</h3>

              <p>
                <strong>Code:</strong> {course.code}
              </p>

              <p>
                <strong>Credits:</strong> {course.credits}
              </p>

              <button
                className="remove-btn"
                onClick={() => dispatch(unenroll(course.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CoursesPage;