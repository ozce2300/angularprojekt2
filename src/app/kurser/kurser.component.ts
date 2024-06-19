import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { Courses } from '../models/courses';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';



@Component({
  selector: 'app-kurser',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule
    
  ],
  templateUrl: './kurser.component.html',
  styleUrls: ['./kurser.component.css']
})
export class KurserComponent{
  displayedColumns: string[] = ['courseName', 'courseCode', 'points', 'subject', 'subjectCode', 'syllabus', 'addCourse'];
  dataSource = new MatTableDataSource<Courses>([]);
  subjects: string[] = [];
  allCourses: Courses[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(courses => {
      this.allCourses = courses;
      this.dataSource.data = courses;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.subjects = [...new Set(courses.map(course => course.subject))];
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSubjectChange(subject: string) {
    if (subject) {
      this.dataSource.data = this.allCourses.filter(course => course.subject === subject);
    } else {
      this.dataSource.data = this.allCourses;
    }

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addCourseToLocalStorage(course: Courses) {
    let storedCourses = JSON.parse(localStorage.getItem('storedCourses') || '[]');
    const isCourseAlreadyStored = storedCourses.some((storedCourse: Courses) => storedCourse.courseCode === course.courseCode);
    if (!isCourseAlreadyStored) {
      storedCourses.push(course);
      localStorage.setItem('storedCourses', JSON.stringify(storedCourses));
    }
  }

  isCourseStored(course: Courses): boolean {
    let storedCourses = JSON.parse(localStorage.getItem('storedCourses') || '[]');
    return storedCourses.some((storedCourse: Courses) => storedCourse.courseCode === course.courseCode);
  }
}
