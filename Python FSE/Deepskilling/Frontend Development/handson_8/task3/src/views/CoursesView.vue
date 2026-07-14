<script setup>
import { ref } from 'vue'
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()

const courses = ref([
{
id:1,
name:'Vue Fundamentals',
code:'CS401',
credits:4,
grade:'A'
},
{
id:2,
name:'JavaScript ES6',
code:'CS402',
credits:3,
grade:'A'
},
{
id:3,
name:'HTML & CSS',
code:'CS403',
credits:3,
grade:'A'
},
{
id:4,
name:'Database Systems',
code:'CS404',
credits:4,
grade:'A'
},
{
id:5,
name:'Operating Systems',
code:'CS405',
credits:3,
grade:'A'
}
])
</script>

<template>

<div class="course-container">

<h2>Available Courses</h2>

<input
class="search-box"
type="text"
placeholder="Search Courses"
/>

<div class="cards">

<div
class="card"
v-for="course in courses"
:key="course.id"
>

<h3>{{ course.name }}</h3>

<p><strong>Code:</strong> {{ course.code }}</p>

<p><strong>Credits:</strong> {{ course.credits }}</p>

<p><strong>Grade:</strong> {{ course.grade }}</p>

<button @click="store.enroll(course)">
Enroll
</button>

</div>

</div>

</div>

</template>

<style scoped>

.course-container{
max-width:1200px;
margin:40px auto;
text-align:center;
}

h2{
margin-bottom:20px;
color:#2c3e50;
}

.search-box{
width:320px;
padding:10px;
margin:0 auto 30px;
display:block;
border:1px solid #ccc;
border-radius:6px;
font-size:16px;
}

.cards{
display:flex;
justify-content:center;
gap:25px;
flex-wrap:wrap;
}

.card{
width:220px;
padding:20px;
background:white;
border-radius:12px;
box-shadow:0 4px 10px rgba(0,0,0,0.2);
text-align:center;
}

.card h3{
color:#2c3e50;
margin-bottom:10px;
}

.card p{
margin:8px 0;
}

button{
margin-top:15px;
padding:10px 20px;
background:#2c3e50;
color:white;
border:none;
border-radius:6px;
cursor:pointer;
transition:0.3s;
}

button:hover{
background:#1b2838;
}

</style>