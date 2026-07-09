import { Component } from '@angular/core';
import { Header } from './header/header';
import { CourseList } from './course-list/course-list';
import { StudentProfile } from './student-profile/student-profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    CourseList,
    StudentProfile
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}