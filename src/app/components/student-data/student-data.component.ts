import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/data.model';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss'],
})
export class StudentMarksTableComponent implements OnInit {
  students: any[] = [];
  originalData: any[] = [];
  sortColumn: string = '';
  sortDirection: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Student[]>('./assets/data.json').subscribe((data) => {
      this.students = data;
      this.originalData = [...data];
    });
  }
  onSort(column: string): void {
    if (column === this.sortColumn) {
      // Reverse the sort direction if the same column is clicked again
      this.sortDirection *= -1;
    } else {
      // Sort by the clicked column in ascending order
      this.sortColumn = column;
      this.sortDirection = 1;
    }
    // Sort the data based on the sortColumn and sortDirection
    this.students.sort((a, b) => {
      if (a[column] < b[column]) return -1 * this.sortDirection;
      if (a[column] > b[column]) return 1 * this.sortDirection;
      return 0;
    });
  }

  onReset(): void {
    // Reset the data to the original data
    this.students = [...this.originalData];
    this.sortColumn = '';
    this.sortDirection = 1;
  }

  getKeys(obj: {}) {
    return Object.keys(obj);
  }
}
