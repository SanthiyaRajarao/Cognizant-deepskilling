# Cognizant-deepskilling

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
