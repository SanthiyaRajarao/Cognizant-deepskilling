-- ===========================
-- Hands-On 3 : Task 1
-- Advanced SQL - Subqueries
-- ===========================

-- 35. Students enrolled in more courses than the average
SELECT s.student_id,
       s.first_name,
       s.last_name
FROM students s
JOIN enrollments e
ON s.student_id = e.student_id
GROUP BY s.student_id, s.first_name, s.last_name
HAVING COUNT(e.course_id) >
(
    SELECT AVG(course_count)
    FROM
    (
        SELECT COUNT(course_id) AS course_count
        FROM enrollments
        GROUP BY student_id
    ) AS avg_enrollments
);

-- 36. Courses where all enrolled students received grade 'A'
SELECT c.course_id,
       c.course_name
FROM courses c
WHERE NOT EXISTS
(
    SELECT *
    FROM enrollments e
    WHERE e.course_id = c.course_id
      AND e.grade <> 'A'
);

-- 37. Highest paid professor in each department
SELECT p.professor_id,
       p.prof_name,
       p.department_id,
       p.salary
FROM professors p
WHERE p.salary =
(
    SELECT MAX(salary)
    FROM professors
    WHERE department_id = p.department_id
);

-- 38. Departments with average salary greater than 85000
SELECT * FROM
(
    SELECT department_id,
           ROUND(AVG(salary), 2) AS avg_salary
    FROM professors
    GROUP BY department_id
) AS dept_avg
WHERE avg_salary > 85000;
