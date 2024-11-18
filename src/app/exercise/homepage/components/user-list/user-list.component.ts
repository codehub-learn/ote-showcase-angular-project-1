import { Component } from '@angular/core';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: User[] = [
    {id: 1, firstname: "Ioannis", lastname: "Daniil", address: "13th Av.", dateOfBirth: "15/5/75"},
    {id: 2, firstname: "Ioanna", lastname: "Geovinch", address: "15th Av.", dateOfBirth: "15/5/86"},
    {id: 3, firstname: "Dimitra", lastname: "Damter", address: "18th Str.", dateOfBirth: "15/5/65"},
  ];
}
