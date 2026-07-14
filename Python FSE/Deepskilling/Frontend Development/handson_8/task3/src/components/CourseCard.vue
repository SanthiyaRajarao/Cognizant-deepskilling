<script setup>

defineProps({
    name:String,
    code:String,
    credits:Number,
    grade:String
})

</script>

<template>

<div class="card">

<h2>{{ name }}</h2>

<p><b>Code:</b> {{ code }}</p>

<p><b>Credits:</b> {{ credits }}</p>

<p><b>Grade:</b> {{ grade }}</p>

<button>Enroll</button>

</div>

</template>

<style scoped>

.card{

width:250px;
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 0 10px rgba(0,0,0,.2);
text-align:center;

}

button{

margin-top:15px;
padding:10px 20px;
background:#2c3e50;
color:white;
border:none;
border-radius:5px;

}

</style>