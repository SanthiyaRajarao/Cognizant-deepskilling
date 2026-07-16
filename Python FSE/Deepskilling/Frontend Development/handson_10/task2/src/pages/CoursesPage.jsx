import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  enroll,
  unenroll,
  fetchAllCourses,
  selectCourses,
  selectCoursesLoading,
  selectCoursesError,
} from "../store/enrollmentSlice";

function CoursesPage() {
  const dispatch = useDispatch();

  const courses = useSelector(selectCourses);

  const loading = useSelector(selectCoursesLoading);

  const error = useSelector(selectCoursesError);

  const enrolledCourses = useSelector(
    (state) => state.enrollment.enrolledCourses
  );

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, [dispatch]);

  if (loading)
    return <h2 style={{ textAlign: "center" }}>Loading Courses...</h2>;

  if (error)
    return (
      <h2 style={{ color: "red", textAlign: "center" }}>
        {error}
      </h2>
    );

  return (
    <div className="courses-page">
      <h2>Available Courses</h2>

      <div className="course-list">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <h3>{course.name}</h3>

            <p>
              <strong>Course Code:</strong> {course.code}
            </p>

            <p>
              <strong>Credits:</strong> {course.credits}
            </p>

            <button
              onClick={() => dispatch(enroll(course))}
            >
              Enroll
            </button>
          </div>
        ))}
      </div>

      <h2>My Enrolled Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No courses enrolled.
        </p>
      ) : (
        <div className="course-list">
          {enrolledCourses.map((course) => (
            <div className="card" key={course.id}>
              <h3>{course.name}</h3>

              <p>
                <strong>Course Code:</strong> {course.code}
              </p>

              <p>
                <strong>Credits:</strong> {course.credits}
              </p>

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch(unenroll(course.id))
                }
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