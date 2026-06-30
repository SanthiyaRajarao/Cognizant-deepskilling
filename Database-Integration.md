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
