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

**Advanced SQL - Subqueries, Views & Transactions** <br>

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

<br>

**| Task 2: Creating and Using Views** <br>
**Goal:** Create reusable views that simplify complex queries.<br>
**Steps:** <br>
39. Create a view vw_student_enrollment_summary showing each student's full name, department,
number of courses enrolled in, and GPA (average grade converted: A=4, B=3, C=2, D=1, F=0).<br>
40. Create a view vw_course_stats showing course_name, course_code, total_enrollments, and avg_gpa
for each course.<br>
41. Query vw_student_enrollment_summary to find students with GPA above 3.0.<br>
42. Attempt to UPDATE a row through vw_student_enrollment_summary and note what happens.
Research and document in your comments why multi-table views are generally not updatable.<br>
43. DROP both views and recreate vw_student_enrollment_summary as a view WITH CHECK OPTION
(use a single-table subset view for this step).<br>
**Hint:** <br>
. CASE WHEN grade='A' THEN 4 WHEN grade='B' THEN 3 ... END converts letter grades to GPA points. <br>
. WITH CHECK OPTION prevents INSERT/UPDATE through the view if the row would not be visible through
the view's WHERE clause.<br>
**Expected Outcome:** SELECT * FROM vw_course_stats returns 5 rows - one per course in the sample data.<br>

<img width="1525" height="873" alt="image" src="https://github.com/user-attachments/assets/d4655d61-8289-4845-91c5-43585d44801e" />

<br>

**| Task 3: Stored Procedures and Transactions** <br>
**Goal:** Encapsulate business logic in procedures and use transactions to maintain integrity.<br>
**Steps:** <br>
44. Write a stored procedure sp_enroll_student (MySQL) or function fn_enroll_student (PostgreSQL) that
accepts student_id, course_id, and enrollment_date, checks for duplicate enrollment, and inserts the
record.<br>
45. Write a procedure sp_transfer_student that moves a student from one department to another. Wrap
the UPDATE and a log-insert into a new table department_transfer_log inside a single transaction.
ROLLBACK if either statement fails.<br>
46. Test the transaction by manually introducing an error (e.g., invalid foreign key) and verify that the first
UPDATE is also rolled back.<br>
47. Use SAVEPOINT to create a mid-transaction checkpoint: insert two enrollment records; set a
SAVEPOINT after the first; deliberately fail the second; ROLLBACK TO SAVEPOINT and verify only
the first record was saved.<br>
**Hint:** <br>
. In MySQL use DELIMITER $$ ... DELIMITER ; to define stored procedures in a .sql file.<br>
. In PostgreSQL use CREATE OR REPLACE FUNCTION ... LANGUAGE plpgsql.<br>
**Expected Outcome:** sp_enroll_student raises a descriptive error on duplicate enrollment. The SAVEPOINT
test shows the first insert persisting after partial rollback. <br>

<img width="1485" height="197" alt="image" src="https://github.com/user-attachments/assets/bf914895-bcaf-447c-aeb6-512497d385c5" />

<br>


****Query Optimisation** - Indexes, EXPLAIN & the N+1 Problem**
<br>
**| Task 1:** Baseline Performance - No Indexes <br>
**Goal:** Establish a baseline before any optimisation.<br>
**Steps:** <br>
48. Run EXPLAIN (PostgreSQL) or EXPLAIN FORMAT=JSON (MySQL) on the following query and save
the output as a comment in your .sql file: SELECT s.first_name, s.last_name, c.course_name FROM
enrollments e JOIN students s ON s.student_id = e.student_id JOIN courses c ON c.course_id =
e.course_id WHERE s.enrollment_year = 2022; <br>
49. Identify whether the query plan shows a Sequential Scan (Postgres) or Full Table Scan (MySQL) on
any table. <br>
50. Note the estimated cost (PostgreSQL) or rows examined (MySQL) in your comments.<br>
**Hint:** <br>
. EXPLAIN does not execute the query - it only shows the plan. EXPLAIN ANALYZE (PostgreSQL) actually
runs it and shows real timings. <br>
. A Seq Scan is not always bad for small tables - it becomes a problem as data grows.<br>
**Expected Outcome:** Your comment block contains the EXPLAIN output and identifies at least one table scan.<br>
<img width="1662" height="883" alt="image" src="https://github.com/user-attachments/assets/51410b1f-a668-4ca5-ae09-303e7683f5fb" />

