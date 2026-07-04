const notifications = document.querySelector("#notifications");
const loading = document.querySelector("#loading");
const retryBtn = document.querySelector("#retry-btn");

async function apiFetch(url){

    const response = await fetch(url);

    if(!response.ok){

        throw new Error(`HTTP Error : ${response.status}`);

    }

    return await response.json();

}

async function loadPosts(){

    loading.textContent = "Loading...";

    notifications.innerHTML = "";

    retryBtn.style.display = "none";

    try{

        const posts = await apiFetch("https://jsonplaceholder.typicode.com/posts");
        //const posts = await apiFetch("https://jsonplaceholder.typicode.com/nonexistent");
        loading.textContent = "";

        const englishPosts = [
    {
        title: "New Course Available",
        body: "A new course on Full Stack Web Development has been added to the portal."
    },
    {
        title: "Assignment Deadline",
        body: "Submit your JavaScript assignment before Friday at 5:00 PM."
    },
    {
        title: "Exam Schedule Released",
        body: "The semester examination timetable is now available in the student portal."
    },
    {
        title: "Profile Update",
        body: "Please review and update your profile information before the end of this month."
    },
    {
        title: "Workshop Registration",
        body: "Registrations are now open for the AI and Machine Learning workshop."
    }
];

englishPosts.forEach(post => {

    const card = document.createElement("div");

    card.className = "notification-card";

    card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;

    notifications.appendChild(card);

});

    }

    catch(error){

        loading.textContent = "";

        notifications.innerHTML = `
            <p class="error">
                Unable to load notifications.
            </p>
        `;

        retryBtn.style.display = "inline-block";

        console.log(error);

    }

}

retryBtn.addEventListener("click",loadPosts);

loadPosts();