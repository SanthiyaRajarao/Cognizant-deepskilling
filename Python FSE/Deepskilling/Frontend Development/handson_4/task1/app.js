import { courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");
const loading = document.querySelector("#loading");

function fetchUser(id){

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => {
            console.log("User:", user.name);
            return user;
        });

}

fetchUser(1);

async function fetchUserAsync(id){

    try{

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        const user = await response.json();

        console.log("Async User:", user.name);

    }

    catch(error){

        console.log(error);

    }

}

fetchUserAsync(2);

function fetchAllCourses(){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve(courses);

        },1000);

    });

}

async function renderCourses(){

    loading.textContent = "Loading courses...";

    const data = await fetchAllCourses();

    loading.textContent = "";

    courseGrid.innerHTML = "";

    data.forEach(course=>{

        const article = document.createElement("article");

        article.className = "course-card";

        article.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.code}</p>
            <p>${course.credits} Credits</p>
        `;

        courseGrid.appendChild(article);

    });

}

renderCourses();

Promise.all([

    fetchUser(1),
    fetchUser(2)

]).then(users=>{

    console.log("Both Users Loaded");

    users.forEach(user=>console.log(user.name));

});