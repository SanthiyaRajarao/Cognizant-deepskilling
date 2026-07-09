import { Component } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector:'app-course-list',
standalone:true,
imports:[
CommonModule,
FormsModule,
CourseCard
],
templateUrl:'./course-list.html',
styleUrl:'./course-list.css'
})

export class CourseList{

searchTerm="";

courses=[

{
name:'Angular Fundamentals',
code:'CS401',
credits:4,
grade:'A'
},

{
name:'TypeScript Essentials',
code:'CS402',
credits:3,
grade:'A'
},

{
name:'HTML & CSS',
code:'CS403',
credits:3,
grade:'A'
},

{
name:'JavaScript ES6',
code:'CS404',
credits:4,
grade:'A'
},

{
name:'Database Systems',
code:'CS405',
credits:3,
grade:'A'
}

];

get filteredCourses(){

return this.courses.filter(course=>

course.name.toLowerCase().includes(this.searchTerm.toLowerCase())

);

}

}