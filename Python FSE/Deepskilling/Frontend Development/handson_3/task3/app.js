import { courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");
const totalCredits = document.querySelector("#total-credits");
const searchInput = document.querySelector("#search-courses");
const sortButton = document.querySelector("#sort-btn");
const selectedCourse = document.querySelector("#selected-course");

let displayedCourses = [...courses];

function renderCourses(courseArray){

    courseGrid.innerHTML = "";

    courseArray.forEach((course)=>{

        const article = document.createElement("article");

        article.className = "course-card";

        article.dataset.id = course.id;

        article.innerHTML = `
            <h3>${course.name}</h3>
            <p>Course Code: ${course.code}</p>
            <p>Credits: ${course.credits}</p>
        `;

        courseGrid.appendChild(article);

    });

    const total = courseArray.reduce(
        (sum,course)=>sum + course.credits,
        0
    );

    totalCredits.textContent = `Total Credits: ${total}`;

}

renderCourses(displayedCourses);

searchInput.addEventListener("input",()=>{

    const text = searchInput.value.toLowerCase();

    displayedCourses = courses.filter(course =>
        course.name.toLowerCase().includes(text)
    );

    renderCourses(displayedCourses);

});

sortButton.addEventListener("click",()=>{

    displayedCourses.sort((a,b)=>b.credits-a.credits);

    renderCourses(displayedCourses);

});

courseGrid.addEventListener("click",(event)=>{

    const card = event.target.closest(".course-card");

    if(!card) return;

    const id = Number(card.dataset.id);

    const course = courses.find(c=>c.id===id);

    selectedCourse.textContent =
        `Selected Course: ${course.name} | Grade: ${course.grade}`;

});