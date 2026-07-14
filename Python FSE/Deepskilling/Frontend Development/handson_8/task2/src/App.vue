<template>

  <header class="header">

    <h1>Student Portal</h1>

    <nav>

      <RouterLink to="/">Home</RouterLink>

      <RouterLink to="/courses">Courses</RouterLink>

      <RouterLink to="/profile">Profile</RouterLink>

    </nav>

  </header>

  <RouterView />

</template>

<style>

body{
  margin:0;
  font-family:Arial;
}

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
  text-decoration:none;
  margin-left:20px;
  font-weight:bold;
}

.router-link-active{
  color:#00d4ff;
}

</style>