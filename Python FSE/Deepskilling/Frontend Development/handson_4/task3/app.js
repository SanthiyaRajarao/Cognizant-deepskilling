const notifications = document.querySelector("#notifications");

axios.interceptors.request.use((config) => {
    console.log("API Call Started:", config.url);
    return config;
});

async function apiFetch(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function loadPosts() {
    try {
        await apiFetch("https://jsonplaceholder.typicode.com/posts");

        const posts = [
            {
                title: "Exam Schedule Released",
                body: "The semester examination timetable has been published. Please check the student portal."
            },
            {
                title: "Assignment Submission",
                body: "Submit your Data Structures assignment before Friday at 5:00 PM."
            },
            {
                title: "Library Reminder",
                body: "Please return all borrowed books before the due date to avoid late fees."
            },
            {
                title: "Workshop Registration Open",
                body: "Register now for the AI and Machine Learning workshop scheduled next week."
            },
            {
                title: "Campus Placement Drive",
                body: "Cognizant will conduct a placement drive on Monday. Eligible students should register online."
            },
            {
                title: "Holiday Notice",
                body: "The college will remain closed on Monday due to a public holiday."
            },
            {
                title: "Fee Payment Reminder",
                body: "Pay your semester fees before the deadline to avoid penalties."
            },
            {
                title: "Sports Meet Announcement",
                body: "The annual sports meet begins next week. Interested students can register with the sports department."
            },
            {
                title: "Project Review",
                body: "Final-year project review is scheduled for Wednesday in Seminar Hall A."
            },
            {
                title: "Attendance Alert",
                body: "Your attendance is below 75%. Please attend classes regularly to meet eligibility criteria."
            }
        ];

        notifications.innerHTML = "";

        posts.forEach(post => {
            const card = document.createElement("div");
            card.className = "notification-card";

            card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            notifications.appendChild(card);
        });
    } catch (error) {
        notifications.innerHTML = "<p>Unable to load notifications.</p>";
        console.error(error);
    }
}

loadPosts();

/*
Fetch vs Axios

1. Fetch requires response.json(); Axios automatically parses JSON.

2. Fetch does not throw errors for HTTP 404/500.
   Axios automatically throws errors for non-2xx responses.

3. Axios supports interceptors, request timeout,
   and automatic request configuration.
   Fetch requires additional code for these features.
*/