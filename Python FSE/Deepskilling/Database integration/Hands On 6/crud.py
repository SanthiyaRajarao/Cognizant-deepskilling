# -----------------------------
# Task 2 : CRUD Operations via ORM
# -----------------------------

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, Department, Student, Course, Enrollment

# Database connection
engine = create_engine(
    "mysql+mysqlconnector://root:root@localhost:3306/college_db",
    echo=True
)

Session = sessionmaker(bind=engine)
session = Session()

# -----------------------------
# Task 81: INSERT Departments
# -----------------------------
d1 = Department(dept_name="Computer Science", hod_name="Dr. Kumar", budget=800000)
d2 = Department(dept_name="Electronics", hod_name="Dr. Priya", budget=600000)
d3 = Department(dept_name="Mechanical", hod_name="Dr. Raj", budget=500000)

session.add_all([d1, d2, d3])
session.commit()

# -----------------------------
# INSERT Students
# -----------------------------
s1 = Student(first_name="John", last_name="Doe",
             email="john@college.edu",
             enrollment_year=2022,
             department=d1)

s2 = Student(first_name="Alice", last_name="Smith",
             email="alice@college.edu",
             enrollment_year=2023,
             department=d2)

s3 = Student(first_name="Bob", last_name="Lee",
             email="bob@college.edu",
             enrollment_year=2022,
             department=d1)

s4 = Student(first_name="Sara", last_name="Roy",
             email="sara@college.edu",
             enrollment_year=2024,
             department=d3)

s5 = Student(first_name="David", last_name="King",
             email="david@college.edu",
             enrollment_year=2023,
             department=d2)

session.add_all([s1, s2, s3, s4, s5])
session.commit()

# -----------------------------
# Task 82: INSERT Courses
# -----------------------------
c1 = Course(course_name="Database Systems",
            course_code="CS101",
            credits=4,
            department=d1)

c2 = Course(course_name="Python Programming",
            course_code="CS102",
            credits=3,
            department=d1)

c3 = Course(course_name="Digital Electronics",
            course_code="EC101",
            credits=4,
            department=d2)

session.add_all([c1, c2, c3])
session.commit()

# -----------------------------
# INSERT Enrollments
# -----------------------------
e1 = Enrollment(student=s1, course=c1, grade="A")
e2 = Enrollment(student=s2, course=c3, grade="B")
e3 = Enrollment(student=s3, course=c2, grade="A")
e4 = Enrollment(student=s4, course=c1, grade="C")

session.add_all([e1, e2, e3, e4])
session.commit()

# -----------------------------
# Task 83: READ
# -----------------------------
print("\nStudents in Computer Science Department\n")

students = session.query(Student)\
    .join(Department)\
    .filter(Department.dept_name == "Computer Science")\
    .all()

for s in students:
    print(s.first_name, s.last_name)

# -----------------------------
# Task 84: READ
# -----------------------------
print("\nEnrollments\n")

enrollments = session.query(Enrollment).all()

for e in enrollments:
    print(e.student.first_name, "->", e.course.course_name)

# -----------------------------
# Task 85: UPDATE
# -----------------------------
student = session.query(Student)\
    .filter_by(email="john@college.edu")\
    .first()

student.enrollment_year = 2025
session.commit()

print("\nStudent Updated")

# -----------------------------
# Task 86: DELETE
# -----------------------------
enrollment = session.query(Enrollment).first()

session.delete(enrollment)
session.commit()

print("One Enrollment Deleted")

session.close()
