<template>
  <header class="header">
    <h1>Student Portal</h1>

    <nav>
      <a href="#">Home</a>
      <a href="#">Courses</a>
      <a href="#">Profile</a>
    </nav>
  </header>
</template>

<style scoped>
.header{
    background:#2c3e50;
    color:white;
    padding:20px 40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

nav a{
    color:white;
    margin-left:20px;
    text-decoration:none;
    font-weight:bold;
}
</style>