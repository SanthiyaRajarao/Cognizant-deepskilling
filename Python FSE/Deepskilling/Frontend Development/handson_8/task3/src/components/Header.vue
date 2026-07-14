<script setup>

import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()

</script>

<template>

<header>

<h1>Student Portal</h1>

<nav>

<RouterLink to="/">Home</RouterLink>

<RouterLink to="/courses">Courses</RouterLink>

<RouterLink to="/profile">Profile</RouterLink>

</nav>

<div>

Enrolled : {{ store.enrolledCourses.length }}

</div>

</header>

</template>

<style scoped>

header{

display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
background:#2c3e50;
color:white;

}

nav a{

color:white;
margin-left:20px;
text-decoration:none;

}

</style>