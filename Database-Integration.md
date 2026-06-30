## Database Integration:

**Task 1: Create the Database and Tables**
**Goal:** Practise DDL by creating the full college_db schema with constraints.
**Steps:**
1. Create a new database named college_db.
2. Write CREATE TABLE statements for all five tables listed in the schema section: departments,
students, courses, enrollments, professors.
3. Add NOT NULL, UNIQUE, and PRIMARY KEY constraints where specified in the schema.
4. Define FOREIGN KEY constraints to enforce referential integrity between students -, departments,
courses - departments, enrollments - students, enrollments - courses, professors - departments.
5. Run the CREATE TABLE statements in your SQL client and verify they execute without errors.
**Hint:**
. Create departments first - other tables reference it via FOREIGN KEY.
. In MySQL use AUTO_INCREMENT; in PostgreSQL use SERIAL or IDENTITY.<br>
**Expected Outcome:** All 5 tables created with no errors. DESCRIBE / Id commands show all columns and
constraints.

<img width="1919" height="1077" alt="image" src="https://github.com/user-attachments/assets/553fb9ad-79b4-421a-99e3-0f41ec1de72b" />
<img width="1119" height="1600" alt="task" src="https://github.com/user-attachments/assets/92991b6f-aaf6-48ab-a476-a42ae0da5b80" />


**| Task 2: Verify Normalisation**
<br>
**Goal:** Confirm the schema satisfies 1NF, 2NF, and 3NF - and document why.<br>
**Steps:** <br>
6. For 1NF: Confirm every column holds atomic values. Identify any hypothetical violation if, for example,
we had stored multiple phone numbers in one field.<br>
7. For 2NF: Confirm every non-key column is fully dependent on the entire primary key (especially check
the enrollments table, which has a composite candidate key of student_id + course_id).<br>
8. For 3NF: Confirm there are no transitive dependencies. (Hint: would storing dept_name in the
students table violate 3NF?)<br>
9. Write a short comment using SQL -- comments inside your .sql file documenting your 3NF analysis for
the enrollments table.<br>
Hint:<br>
. A transitive dependency exists when column C depends on column B, which depends on the primary key A,
rather than directly on A.<br>

**Expected Outcome:** Your .sql file contains at least 6 lines of analysis comments explaining 1NF, 2NF, 3NF
compliance.

<img width="1761" height="1011" alt="image" src="https://github.com/user-attachments/assets/b6ce8ecf-d764-4c03-b1a7-c0067f1113d2" />

**| Task 3: Alter and Extend the Schema**
**Goal:** Use ALTER TABLE to safely extend an existing schema without data loss.<br>
**Steps:** <br>
10. Add a column phone_number VARCHAR(15) to the students table.<br>
11. Add a column max_seats INT DEFAULT 60 to the courses table.<br>
12. Add a CHECK constraint to enrollments ensuring grade is one of ('A','B','C','D','F') or NULL.<br>
13. Rename the hod_name column in departments to head_of_dept (PostgreSQL: ALTER COLUMN ...
RENAME TO; MySQL: ALTER TABLE ... CHANGE ... ).<br>
14. Drop the phone_number column you added in step 1 (simulate a schema rollback).<br>
Hint:<br>
. In MySQL 8+, CHECK constraints are enforced. In older versions they are parsed but ignored - always
verify.<br>
. Use INFORMATION_SCHEMA.COLUMNS to confirm changes.<br>
**Expected Outcome:** Each ALTER runs without error. Final schema matches the original plus max_seats and
the renamed head_of_dept column.
<img width="1920" height="5400" alt="Screenshot 2026-06-30 182139-imageonline co-merged" src="https://github.com/user-attachments/assets/1f17e9cd-e756-442c-bbd5-49ec5273ecc0" />
<br>
**Writing SQL Queries - DML, Joins & Aggregations**
<br>
**| Task 1: Insert, Update and Delete Data** <br>
**Goal:** Practise all DML operations ensuring data consistency.<br>
**Steps:** <br>
15. Insert the sample data from the Common Schema section into all five tables (use the provided
INSERT statements).<br>
16. Insert two additional students of your own choosing into the students table.<br>
17. Update the grade of student_id = 5 for course_id = 1 from 'C' to 'B'.<br>
18. Delete enrollments where grade IS NULL (students who never received a grade).<br>
19. Verify row counts using SELECT COUNT(*) after each operation.<br>
**Hint:** <br>
. Run SELECT * FROM enrollments WHERE grade IS NULL before deleting to preview the rows that will be
removed. <br>
**Expected Outcome:** students table has 10 rows. enrollments has only rows with non-NULL grades after the
DELETE.<br>

<img width="1653" height="978" alt="image" src="https://github.com/user-attachments/assets/2d1dfa0a-7767-4853-9f6b-df84b9e4fa2d" />
<img width="1648" height="939" alt="image" src="https://github.com/user-attachments/assets/2ac732ea-02e8-47bb-8917-425d2eb41642" />
<br>

**Task 2: Single-Table Queries and Filtering** <br>
**Goal**: Build confidence with SELECT, WHERE, ORDER BY, and LIKE.<br>
**Steps:** <br>
20. Retrieve all students enrolled in 2022, ordered by last_name alphabetically.<br>
21. Find all courses with more than 3 credits, sorted by credits descending.<br>
22. List all professors whose salary is between 80,000 and 95,000.<br>
23. Find all students whose email ends with '@college.edu' using the LIKE operator.<br>
24. Count the total number of students per enrollment_year.<br>
**Hint:** <br>
. BETWEEN is inclusive on both ends.<br>
. The % wildcard matches any sequence of characters in LIKE patterns.<br>
**Expected Outcome:** Query 5 returns 3 rows - one per distinct enrollment_year in the sample data.
<br>
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ed5b4f9a-e5aa-4d4f-a48d-1df6b8a8267a" />
<br>
**| Task 3: Multi-Table Joins**
**Goal:** Write JOIN queries spanning 2-4 tables to answer real business questions.<br>
**Steps:** <br>
25. List each student's full name (first_name +''+ last_name) alongside the name of their department.
(JOIN students and departments.)<br>
26. Show each enrollment along with the student's name and the course name. (3-table JOIN:
enrollments, students, courses.<br>
27. Find all students who are NOT enrolled in any course using a LEFT JOIN and WHERE ... IS NULL
pattern.<br>
28. Display every course along with the number of students enrolled in it. Courses with zero enrolments
must still appear. (LEFT JOIN courses with enrollments, GROUP BY course.)<br>
29. List each department along with its professors and their salaries. Include departments that have no
professors yet.<br>
**Hint:** <br>
. LEFT JOIN keeps all rows from the left table even if no match exists on the right - essential for 'find
missing relationships' queries.<br>
**Expected Outcome:** Query 3 returns students with no enrollments. Query 4 shows all 5 courses, including
those with 0 students.<br>

<img width="1654" height="689" alt="image" src="https://github.com/user-attachments/assets/c0af63ea-e84f-4edd-9447-a64cd84b8843" />
<img width="1649" height="772" alt="image" src="https://github.com/user-attachments/assets/b2798756-9fba-42c2-a5e9-7c07137f392a" />
<br>

**Task 4: Aggregations and Grouping** <br>
**Goal:** Use aggregate functions to generate summary reports.<br>
**Steps:** <br>
30. Calculate the total number of enrollments per course. Display course_name and enrollment_count.<br>
31. Find the average salary of professors per department. Round to 2 decimal places.<br>
32. Find all departments where the total budget exceeds 600,000.<br>
33. Show the grade distribution for course CS101: count of each grade (A, B, C, D, F).<br>
34. Using HAVING, list departments where more than 2 students are enrolled across all courses in that
department.<br>
**Hint:** <br>
. Use GROUP BY with HAVING (not WHERE) to filter on aggregated results.<br>
. ROUND(AVG(salary), 2) works in both PostgreSQL and MySQL.<br>
**Expected Outcome:** Query 2 returns 4 rows - one per department, with average salary rounded to 2 decimal
places.<br>

<img width="1651" height="574" alt="image" src="https://github.com/user-attachments/assets/0ed074a1-1caa-458e-87a1-ac147ac0c560" />
<br>

**| Task 1: Subqueries** <br>
**Goal**: Use subqueries to answer questions that require multi-step logic.<br>
**Steps:** <br>
35. Find all students who are enrolled in more courses than the average number of enrollments per
student. (Use a non-correlated subquery to calculate the average.)<br>
36. List courses in which all enrolled students have received a grade of 'A'. (Correlated subquery or NOT
EXISTS.)<br>
37. Find the professor with the highest salary in each department using a correlated subquery.<br>
38. Using a subquery in the FROM clause (derived table), calculate the per-department average salary
and then filter to departments where that average exceeds 85,000.<br>
**Hint:** <br>
. A correlated subquery re-executes for every row of the outer query - use it only when a non-correlated
version is not possible, as it can be slow. <br>
. Derived tables in the FROM clause must always have an alias.<br>
**Expected Outcome:** Query 1 should return students enrolled in 3 or more courses based on sample data.<br>

<img width="1521" height="881" alt="image" src="https://github.com/user-attachments/assets/04697fb7-cd5f-4552-911f-07416a984ef8" />

