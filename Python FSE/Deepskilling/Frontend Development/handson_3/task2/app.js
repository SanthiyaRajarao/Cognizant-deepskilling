import { courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");

courses.forEach((course) => {

    const article = document.createElement("article");

    article.className = "course-card";

    article.innerHTML = `
        <h3>${course.name}</h3>
        <p>Course Code: ${course.code}</p>
        <p>Credits: ${course.credits}</p>
    `;

    courseGrid.appendChild(article);

});

const totalCredits = courses.reduce(
    (total, course) => total + course.credits,
    0
);

document.querySelector("#total-credits").textContent =
`Total Credits: ${totalCredits}`;