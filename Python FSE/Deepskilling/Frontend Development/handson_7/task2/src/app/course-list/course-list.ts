import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../course-card/course-card';
import { CourseService } from '../course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: any[] = [];

  loading = false;

  searchTerm = "";

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {

    this.loading = true;

    this.courseService.getCourses().subscribe({

      next: (data: any) => {

  const courseNames = [
    "Angular Fundamentals",
    "TypeScript Essentials",
    "HTML & CSS",
    "JavaScript ES6",
    "Database Systems"
  ];

  const credits = [4, 3, 3, 4, 3];

  this.courses = data.map((item: any, index: number) => ({
    id: item.id,
    name: courseNames[index],
    code: `CS40${index + 1}`,
    credits: credits[index],
    grade: "A"
  }));

  this.loading = false;

},

      error: () => {

        this.loading = false;

      }

    });

  }

  get filteredCourses() {

    return this.courses.filter(course =>

      course.name.toLowerCase().includes(this.searchTerm.toLowerCase())

    );

  }

}