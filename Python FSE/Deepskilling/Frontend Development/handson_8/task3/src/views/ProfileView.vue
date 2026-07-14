<script setup>
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()
</script>

<template>
  <div class="profile-container">

    <h2>My Enrolled Courses</h2>

    <div class="course-grid">

      <div
        class="card"
        v-for="course in store.enrolledCourses"
        :key="course.id"
      >
        <h3>{{ course.name }}</h3>

        <p><strong>{{ course.code }}</strong></p>

        <p>{{ course.credits }} Credits</p>

        <button @click="store.unenroll(course.id)">
          Remove
        </button>

      </div>

    </div>

    <h3 class="credits">
      Total Credits : {{ store.totalCredits }}
    </h3>

  </div>
</template>

<style scoped>

.profile-container{
  max-width:1200px;
  margin:40px auto;
  text-align:center;
}

.course-grid{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:25px;
  margin-top:25px;
}

.card{
  width:230px;
  background:white;
  padding:20px;
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
  background:#2c3e50;
  color:white;
  border:none;
  padding:10px 18px;
  border-radius:6px;
  cursor:pointer;
  transition:0.3s;
}

button:hover{
  background:#1b2838;
}

.credits{
  margin-top:35px;
  color:#2c3e50;
  font-size:24px;
}

</style>