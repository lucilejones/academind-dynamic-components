import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() error = false;

  toggleError(){
    this.error = !this.error;
    console.log(this.error);
  }

  // handleError() {
  //   this.error = null;
  // }
}
