import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  showMe:boolean = false;
  numberOfClicks: number = 0;
  listOfClicks: any = [];
  //listOfClicks: Date[] = [];

  ngOnInit(): void{}

   clickCount() {
    this.numberOfClicks++;
    this.listOfClicks.push(this.numberOfClicks);
    //this.listOfClicks.push(new Date());
        }

  
    
  
  constructor() {}      
}


