-- TASK 2: VERIFY NORMALISATION

-- 1NF:
-- All tables satisfy First Normal Form because every column stores atomic values only.
-- No column contains repeating groups or multiple values in a single field.
-- Example: if a column stored multiple phone numbers like '9876543210,9123456780',
-- it would violate 1NF because one attribute would contain more than one value.

-- 2NF:
-- All tables satisfy Second Normal Form because every non-key attribute
-- is fully dependent on the whole primary key.
-- In the enrollments table, student_id + course_id can be treated as a composite candidate key.
-- The attributes enrollment_date and grade depend on the full combination
-- of student_id and course_id, not on only one part of the key.
-- Therefore, there is no partial dependency.

-- 3NF:
-- All tables satisfy Third Normal Form because there are no transitive dependencies.
-- Non-key attributes depend only on the primary key and not on another non-key attribute.
-- For example, students stores department_id only, not dept_name.
-- If dept_name were stored in students, then dept_name would depend on department_id
-- instead of directly on student_id, which would violate 3NF.

-- 3NF analysis for enrollments:
-- In enrollments, grade and enrollment_date depend directly on the enrollment record
-- (or on the candidate key student_id + course_id) and not on another non-key attribute.
-- Hence, the enrollments table also satisfies 3NF.
