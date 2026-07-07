import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

function App() {
  return (
    <>
      <Header siteName="Student Portal" />

      <main>
        <CourseCard
          name="React Fundamentals"
          code="CS301"
          credits="4"
          grade="A"
        />

        <CourseCard
          name="JavaScript ES6"
          code="CS302"
          credits="3"
          grade="A+"
        />

        <CourseCard
          name="Web Development"
          code="CS303"
          credits="4"
          grade="B+"
        />
      </main>

      <Footer />
    </>
  );
}

export default App;