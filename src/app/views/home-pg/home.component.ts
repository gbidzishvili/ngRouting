import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  goTo(index: Number) {
    switch (index) {
      case 1:
        this.router.navigate(['/gallery'], {
          queryParams: {},
        });
        break;
      case 2:
        this.router.navigate(['/contact'], {
          queryParams: {
            name: 'giorgi',
            surname: 'bidzishvili',
            age: 21,
          },
          fragment: 'ENG',
        });
        break;
      default:
    }
  }
}
