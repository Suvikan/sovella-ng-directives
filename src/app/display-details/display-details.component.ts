import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  show = false;
  buttonClicked = false;
  count: number = 0; 
  
   clickCount(): void{
        this.count++
        }
}


