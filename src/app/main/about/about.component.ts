import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone:false
})
export class AboutComponent implements OnInit {
  yearsExperience: number = 1; 
  displayExperience: string = '1'; 
  startDate: Date = new Date(2024, 11, 15);

  ngOnInit(): void {
    const today = new Date();

    const yearsDiff = today.getFullYear() - this.startDate.getFullYear();
    const monthsDiff = today.getMonth() - this.startDate.getMonth();
    let totalYears = yearsDiff + (monthsDiff >= 0 ? 0 : -1);

    // If less than 1, show 1 without +
    if (totalYears < 1) {
      this.displayExperience = '1';
    } else {
      this.displayExperience = `${totalYears}+`;
    }
  }
}
