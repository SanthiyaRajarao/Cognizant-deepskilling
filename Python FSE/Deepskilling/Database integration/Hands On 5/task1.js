// ==============================================
// HANDS-ON 5
// MongoDB – Document Modelling, CRUD & Aggregation
// Database: college_nosql
// Collection: feedback
// ==============================================

// ----------------------------------------------
// Task 1: Create Database & Collection
// ----------------------------------------------

use("college_nosql");

// Collection will be created automatically on first insert
db.createCollection("feedback");

// ----------------------------------------------
// Insert Sample Documents
// ----------------------------------------------

db.feedback.insertMany([
  {
    "student_id": 1,
    "course_code": "CS101",
    "semester": "2022-ODD",
    "rating": 4,
    "comments": "Excellent teaching",
    "tags": ["challenging", "well-structured"],
    "submitted_at": "2022-11-30T10:15:00Z",
    "attachments": [
      {
        "filename": "notes.pdf",
        "size_kb": 240
      }
    ]
  },
  {
    "student_id": 2,
    "course_code": "CS101",
    "semester": "2022-ODD",
    "rating": 5,
    "comments": "Very informative",
    "tags": ["excellent", "recommended"],
    "submitted_at": "2022-12-01T09:30:00Z",
    "attachments": [
      {
        "filename": "assignment.pdf",
        "size_kb": 180
      }
    ]
  },
  {
    "student_id": 3,
    "course_code": "CS101",
    "semester": "2022-EVEN",
    "rating": 3,
    "comments": "Good",
    "tags": ["average"],
    "submitted_at": "2023-01-10T12:00:00Z",
    "attachments": [
      {
        "filename": "lab.pdf",
        "size_kb": 120
      }
    ]
  },
  {
    "student_id": 4,
    "course_code": "CS102",
    "semester": "2022-ODD",
    "rating": 5,
    "comments": "Excellent",
    "tags": ["good-examples"],
    "submitted_at": "2022-12-05T11:00:00Z",
    "attachments": [
      {
        "filename": "slides.pdf",
        "size_kb": 350
      }
    ]
  },
  {
    "student_id": 5,
    "course_code": "CS102",
    "semester": "2023-EVEN",
    "rating": 2,
    "comments": "Needs improvement",
    "tags": ["slow"],
    "submitted_at": "2023-04-20T10:30:00Z",
    "attachments": [
      {
        "filename": "feedback.docx",
        "size_kb": 80
      }
    ]
  },
  {
    "student_id": 6,
    "course_code": "ME101",
    "semester": "2023-ODD",
    "rating": 4,
    "comments": "Good faculty",
    "tags": ["mechanical"],
    "submitted_at": "2023-05-12T14:30:00Z",
    "attachments": [
      {
        "filename": "diagram.png",
        "size_kb": 410
      }
    ]
  },
  {
    "student_id": 7,
    "course_code": "EC101",
    "semester": "2023-ODD",
    "rating": 3,
    "comments": "Average",
    "tags": ["electronics"],
    "submitted_at": "2023-06-18T09:20:00Z",
    "attachments": [
      {
        "filename": "circuit.pdf",
        "size_kb": 210
      }
    ]
  },
  {
    "student_id": 8,
    "course_code": "CS101",
    "semester": "2023-ODD",
    "rating": 5,
    "comments": "Excellent course",
    "tags": ["favorite"],
    "submitted_at": "2023-07-01T08:30:00Z",
    "attachments": [
      {
        "filename": "project.zip",
        "size_kb": 600
      }
    ]
  },
  {
    "student_id": 9,
    "course_code": "CS103",
    "semester": "2023-ODD",
    "rating": 4,
    "comments": "Nice examples",
    "tags": ["oop"],
    "submitted_at": "2023-07-20T16:30:00Z",
    "attachments": [
      {
        "filename": "code.zip",
        "size_kb": 450
      }
    ]
  },
  // Document without attachments
  {
    "student_id": 10,
    "course_code": "CS103",
    "semester": "2023-EVEN",
    "rating": 5,
    "comments": "Highly recommended",
    "tags": ["excellent", "coding"],
    "submitted_at": "2023-08-15T09:45:00Z"
  }
]);



// Verify Count
db.feedback.countDocuments();
