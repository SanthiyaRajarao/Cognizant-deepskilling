import apiClient from "./apiClient";

export const getAllCourses = async () => {
  await apiClient.get("/posts?_limit=5");

  return [
    {
      id: 1,
      name: "React Fundamentals",
      code: "CS301",
      credits: 4,
    },
    {
      id: 2,
      name: "JavaScript ES6",
      code: "CS302",
      credits: 3,
    },
    {
      id: 3,
      name: "HTML & CSS",
      code: "CS303",
      credits: 3,
    },
    {
      id: 4,
      name: "Database Systems",
      code: "CS304",
      credits: 4,
    },
    {
      id: 5,
      name: "Operating Systems",
      code: "CS305",
      credits: 3,
    },
  ];
};