<script setup>

import { useRoute,useRouter } from 'vue-router'

const route = useRoute()

const router = useRouter()

const id = route.params.id

function enroll(){

alert("Course Enrolled Successfully")

router.push('/profile')

}

</script>

<template>

<div style="text-align:center;margin-top:60px;">

<h2>Course Details</h2>

<h3>Course ID : {{id}}</h3>

<p>This is the detail page of Course {{id}}</p>

<button @click="enroll">

Enroll

</button>

</div>

</template>

<style scoped>

button{

padding:10px 25px;
background:#2c3e50;
color:white;
border:none;
cursor:pointer;

}

</style>