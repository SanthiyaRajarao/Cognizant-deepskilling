<script setup>

import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const courses = ref([
{id:1,name:'Vue Fundamentals',code:'CS401'},
{id:2,name:'JavaScript ES6',code:'CS402'},
{id:3,name:'HTML & CSS',code:'CS403'},
{id:4,name:'Database Systems',code:'CS404'},
{id:5,name:'Operating Systems',code:'CS405'}
])

</script>

<template>

<div class="container">

<h2>Available Courses</h2>

<div class="cards">

<div
class="card"
v-for="course in courses"
:key="course.id"
>

<h3>{{course.name}}</h3>

<p>{{course.code}}</p>

<RouterLink :to="'/courses/'+course.id">

<button>View Details</button>

</RouterLink>

</div>

</div>

</div>

</template>

<style scoped>

.container{

text-align:center;

}

.cards{

display:flex;
justify-content:center;
gap:20px;
flex-wrap:wrap;

}

.card{

width:220px;
padding:20px;
background:white;
box-shadow:0 0 10px gray;
border-radius:10px;

}

button{

padding:10px 20px;
background:#2c3e50;
color:white;
border:none;
cursor:pointer;

}

</style>