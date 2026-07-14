<script setup>

import { ref, computed } from "vue";
import CourseCard from "../components/CourseCard.vue";

const searchTerm = ref("");

const courses = ref([
{
id:1,
name:"Vue.js Fundamentals",
code:"CS401",
credits:4,
grade:"A"
},
{
id:2,
name:"JavaScript ES6",
code:"CS402",
credits:3,
grade:"A"
},
{
id:3,
name:"HTML & CSS",
code:"CS403",
credits:3,
grade:"A"
},
{
id:4,
name:"React Basics",
code:"CS404",
credits:4,
grade:"A"
},
{
id:5,
name:"Database Systems",
code:"CS405",
credits:3,
grade:"A"
}
]);

const filteredCourses = computed(() =>
courses.value.filter(course =>
course.name.toLowerCase().includes(searchTerm.value.toLowerCase())
)
);

</script>

<template>

<h2>Available Courses</h2>

<input
type="text"
v-model="searchTerm"
placeholder="Search Courses"
/>

<div class="course-list">

<CourseCard

v-for="course in filteredCourses"

:key="course.id"

:name="course.name"

:code="course.code"

:credits="course.credits"

:grade="course.grade"

/>

</div>

</template>

<style scoped>

h2{

text-align:center;
margin-top:30px;

}

input{

display:block;
margin:20px auto;
padding:10px;
width:300px;

}

.course-list{

display:flex;
justify-content:center;
gap:20px;
flex-wrap:wrap;

}

</style>