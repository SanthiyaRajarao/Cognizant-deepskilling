-- ===========================
-- Hands-On 4 : Task 3
-- Identify and fix the N + 1 problem
-- ===========================


import mysql.connector

conn = mysql.connector.connect(
    host="LOCALHOST",
    user="root",
    password="root",
    database="college_db"
)

cursor = conn.cursor()

# Query 1
cursor.execute("SELECT * FROM enrollments")
enrollments = cursor.fetchall()

query_count = 1

for enrollment in enrollments:
    student_id = enrollment[1]

    cursor.execute(
        "SELECT first_name, last_name FROM students WHERE student_id=%s",
        (student_id,)
    )

    student = cursor.fetchone()
    print(student)

    query_count += 1

print("Queries Executed =", query_count)

cursor.close()
conn.close()
