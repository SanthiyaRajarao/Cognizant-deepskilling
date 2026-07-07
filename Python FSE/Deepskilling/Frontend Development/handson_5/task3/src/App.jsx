import { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";

function App() {

    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchCourses() {

            try {

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=5"
                );

                if (!response.ok) {
                    throw new Error("Unable to fetch courses.");
                }

                const data = await response.json();

                const courseData = data.map((post, index) => ({
                    id: post.id,
                    name: post.title,
                    code: `CS10${index + 1}`,
                    credits: 4,
                    grade: "A"
                }));

                setCourses(courseData);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }

        }

        fetchCourses();

    }, []);

    useEffect(() => {

        console.log("Courses updated");

    }, [courses]);

    if (loading) {

        return <h2>Loading...</h2>;

    }

    if (error) {

        return <h2>{error}</h2>;

    }

    return (

        <>

            <Header enrolledCount={0} />

            <Hero />

            <div className="course-grid">

                {courses.map(course => (

                    <CourseCard
                        key={course.id}
                        {...course}
                        onEnroll={() => {}}
                    />

                ))}

            </div>

            <StudentProfile />

            <Footer />

        </>

    );

}

export default App;