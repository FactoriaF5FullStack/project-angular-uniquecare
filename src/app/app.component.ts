import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uniquecare';
  isOpen: boolean = false;

  toggleNotification() {
    this.isOpen = !this.isOpen;
  }
}
