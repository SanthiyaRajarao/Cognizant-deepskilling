# =====================================================
# TASK 3
# N+1 PROBLEM
# =====================================================

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, joinedload
from models import engine, Enrollment

Session = sessionmaker(bind=engine)
session = Session()

print("Fetching enrollments using joinedload...\n")

enrollments = session.query(Enrollment).options(
    joinedload(Enrollment.student),
    joinedload(Enrollment.course)
).all()

for e in enrollments:
    print(
        f"Student: {e.student.first_name} {e.student.last_name} "
        f"| Course: {e.course.course_name}"
    )

session.close()


engine = create_engine(
    "mysql+mysqlconnector://root:root@localhost/college_db_orm",
    echo=True
)
