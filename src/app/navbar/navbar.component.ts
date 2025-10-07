import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone:false
})
export class NavbarComponent {
  isMenuOpen = false;

  @Output() showConstructionEvent = new EventEmitter<void>(); // emit event to MainComponent

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(event: Event, sectionId: string) {
    event.preventDefault();

    if (sectionId === 'unfinished') {
      this.showConstructionEvent.emit(); // triggers display + scroll
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    this.isMenuOpen = false; // close mobile menu
  }
}
