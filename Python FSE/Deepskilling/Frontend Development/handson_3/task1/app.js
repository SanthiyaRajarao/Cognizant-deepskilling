import { courses } from "./data.js";

courses.forEach(({ name, credits }) => {
    console.log(name, credits);
});

const formattedCourses = courses.map(
    ({ code, name, credits }) => `${code} — ${name} (${credits} credits)`
);

console.log(formattedCourses);

const filteredCourses = courses.filter(
    (course) => course.credits >= 4
);

console.log(filteredCourses);

console.log("Count:", filteredCourses.length);

const totalCredits = courses.reduce(
    (total, course) => total + course.credits,
    0
);

console.log("Total Credits:", totalCredits);

const displayCourses = () => {
    courses.forEach(
        ({ code, name, credits }) =>
            console.log(`${code} - ${name} (${credits} credits)`)
    );
};

displayCourses();