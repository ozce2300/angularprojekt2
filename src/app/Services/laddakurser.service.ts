import { Injectable } from '@angular/core';
import { Courses } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class LaddakurserService {

  private storageKey = 'storedCourses';

  constructor() { }

  getStoredCourses(): Courses[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  removeCourse(courseCode: string): void {
    let storedCourses = this.getStoredCourses();
    storedCourses = storedCourses.filter(course => course.courseCode !== courseCode);
    localStorage.setItem(this.storageKey, JSON.stringify(storedCourses));
  }
}
