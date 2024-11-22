import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Output() eventEmitter: EventEmitter<User> = new EventEmitter();
  users: User[] = [];

  constructor(private userService: UserService){
      //this.users = userService.getUsers();

      userService.getUsersOnline().subscribe((result: any) => {
        console.log("hello");
        console.log(result);
        console.log(result.data);
        console.log(result.data[0].first_name);
          
        for(let user of result.data){
          this.users.push({
            id: user.id,
            firstname: user.first_name,
            lastname: user.last_name,
            dateOfBirth: "14/5/1992",
            address: "124124 Av. Street"
          })
        }
      });
      console.log("after subscription");
      
      //...
      //...
      //...
      //...
  }

  emitUser(user: User) {
    //console.log("test");
    //console.log(user);
    this.eventEmitter.emit(user);
  }
}
