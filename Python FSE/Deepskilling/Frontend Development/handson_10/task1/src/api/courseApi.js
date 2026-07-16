import apiClient from "./apiClient";

// Get all courses
export const getAllCourses = async () => {
  return await apiClient.get("/posts?_limit=5");
};

// Get one course
export const getCourseById = async (id) => {
  return await apiClient.get(`/posts/${id}`);
};

// Enroll a student
export const enrollStudent = async (studentId, courseId) => {
  return await apiClient.post("/posts", {
    studentId,
    courseId,
  });
};