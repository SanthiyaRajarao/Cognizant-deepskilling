import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import courseData from "./data";

function App() {

  const [courses] = useState(courseData);

  const [searchTerm, setSearchTerm] = useState("");

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (id) => {

    if (!enrolledCourses.includes(id)) {

      setEnrolledCourses([...enrolledCourses, id]);

    }

  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <Header
        siteName="Student Portal"
        enrolledCount={enrolledCourses.length}
      />

      <div className="search-box">

        <input
          type="text"
          placeholder="Search Courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      <main className="course-list">

        {filteredCourses.map(course => (

          <CourseCard
            key={course.id}
            {...course}
            onEnroll={handleEnroll}
          />

        ))}

      </main>

      <Footer />

    </>
  );
}

export default App;