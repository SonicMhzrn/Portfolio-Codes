import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: false,
})
export class MainComponent implements OnInit {
  yearsExperience: number = 0;
  startDate: Date = new Date(2023, 11, 15); 
  ngOnInit(): void {
    const today = new Date();

    // Calculate difference in months
    const yearsDiff = today.getFullYear() - this.startDate.getFullYear();
    const monthsDiff = today.getMonth() - this.startDate.getMonth();
    const totalYears = yearsDiff + (monthsDiff >= 0 ? 0 : -1); // subtract 1 if current month < start month

    this.yearsExperience = totalYears;
  }
}

