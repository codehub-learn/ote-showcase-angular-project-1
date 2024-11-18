import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {
  @Input() array: number[] = []; // []
  @Input() customerName?: string; // undefined
  @Input() customer?: Customer; // undefined
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter;

  constructor() {
    // this.customer = {
    //   id: 15,
    //   fullname: "Ioannis Daniil",
    //   address: {
    //     street: "Athens Av.",
    //     zipCode: "133 22",
    //     number: 5
    //   }
    // }
  }

  doSomething(){
    // if(this.customer){
    //   this.customer.address.number = this.customer.address.number + 1;
    // }
    //this.customer!.address.number = this.customer!.address.number + 1;
    //this.customer?.address.number = this.customer?.address.number + 1 // do not do this
  }

  onClickChildButton() {
    console.log("on click child event");
    this.eventEmitter.emit(5);
  }
}
