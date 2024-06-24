import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LaddakurserService } from '../Services/laddakurser.service';
import { Courses } from '../models/courses';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-laddakurser',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './laddakurser.component.html',
  styleUrls: ['./laddakurser.component.css']
})
export class LaddakurserComponent {
  storedCourses: Courses[] = [];
  displayedColumns: string[] = ['courseName', 'courseCode', 'points', 'subject', 'subjectCode', 'syllabus', 'removeCourse'];
  dataSource = new MatTableDataSource<Courses>([]); 
  totalPoints: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private laddakurserService: LaddakurserService) {}

  ngAfterViewInit() {
    this.loadStoredCourses();
  }

  loadStoredCourses() {
    this.storedCourses = this.laddakurserService.getStoredCourses();
    this.dataSource = new MatTableDataSource<Courses>(this.storedCourses);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.calculateTotalPoints();

  }

  removeCourse(courseCode: string) {
    this.laddakurserService.removeCourse(courseCode);
    this.loadStoredCourses(); 
  }

  calculateTotalPoints() {
    this.totalPoints = this.storedCourses.reduce((acc, course) => acc + course.points, 0);
  }
}
