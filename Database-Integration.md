## Database Integration:

Task 1: Create the Database and Tables
Goal: Practise DDL by creating the full college_db schema with constraints.
Steps:
1. Create a new database named college_db.
2. Write CREATE TABLE statements for all five tables listed in the schema section: departments,
students, courses, enrollments, professors.
3. Add NOT NULL, UNIQUE, and PRIMARY KEY constraints where specified in the schema.
4. Define FOREIGN KEY constraints to enforce referential integrity between students -, departments,
courses - departments, enrollments - students, enrollments - courses, professors - departments.
5. Run the CREATE TABLE statements in your SQL client and verify they execute without errors.
Hint:
. Create departments first - other tables reference it via FOREIGN KEY.
. In MySQL use AUTO_INCREMENT; in PostgreSQL use SERIAL or IDENTITY.<br>
Expected Outcome: All 5 tables created with no errors. DESCRIBE / Id commands show all columns and
constraints.

<img width="1919" height="1077" alt="image" src="https://github.com/user-attachments/assets/553fb9ad-79b4-421a-99e3-0f41ec1de72b" />
<img width="1119" height="1600" alt="task" src="https://github.com/user-attachments/assets/92991b6f-aaf6-48ab-a476-a42ae0da5b80" />


| Task 2: Verify Normalisation
<br>
Goal: Confirm the schema satisfies 1NF, 2NF, and 3NF - and document why.<br>
Steps:<br>
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

Expected Outcome: Your .sql file contains at least 6 lines of analysis comments explaining 1NF, 2NF, 3NF
compliance.

<img width="1761" height="1011" alt="image" src="https://github.com/user-attachments/assets/b6ce8ecf-d764-4c03-b1a7-c0067f1113d2" />

