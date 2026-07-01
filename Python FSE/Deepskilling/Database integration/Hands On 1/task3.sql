-- TASK 3 : ALTER TABLE AND EXTEND SCHEMA

ALTER TABLE students
ADD phone_number VARCHAR(15);

DESCRIBE students;

ALTER TABLE courses
ADD max_seats INT DEFAULT 60;

DESC courses;

ALTER TABLE enrollments
ADD CONSTRAINT chk_grade
CHECK (grade IN ('A','B','C','D','F') OR grade IS NULL);

DESC enrollments;

ALTER TABLE departments
RENAME COLUMN hod_name TO head_of_dept;

DESC departments;

ALTER TABLE students
DROP COLUMN phone_number;

DESC students;
