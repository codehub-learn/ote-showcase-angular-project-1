import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Customer } from './model/customer';
import { HomepageComponent } from "./exercise/homepage/homepage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_project_1';
  arrayWithNumbers: number[] = [1,2,3,4,5,6,7];
  customer: Customer = {
    id: 15, 
    fullname: "Ioannis Daniil", 
    address: {
      street: "Athens Av.", 
      zipCode: "133 22", 
      number: 5
    }
  };

  onChildEvent(eventValue: string){
    console.log(eventValue + 1);
    alert("child button clicked (from parent)")
  }

  onButtonClick() {
    console.log("hello");
    //alert("very important message");
  }
}
