import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { User } from '../shared/models/user';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, UserListComponent, UserDetailsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  selectedUser?: User;

  captureEvent(event: any) {
    console.log("captured event");
    console.log(event);
    this.selectedUser = event;
  }

  clearUser() {
    this.selectedUser = undefined;
  }

}
