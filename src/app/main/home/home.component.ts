import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent {

  downloadCV() {
    // try {
    //   // Create temporary link
    //   const a = document.createElement('a');
    //   a.target = '_blank'; // open in new tab
    //   a.href = "../../../assets/Resume.pdf"; // external PDF link
    //   a.download = 'pdf_file.pdf'; // suggested download name

    //   // Trigger download
    //   a.click();
    // } catch (error) {
    //   console.error('Download failed:', error);
    //   alert('❌ Download failed. Please try again.');
    // }

    alert("Whoops! This feature ran away from home 🏃‍♂️. I'll bring it back soon!");
  }

}
