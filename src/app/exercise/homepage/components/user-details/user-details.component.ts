import { Component, Input } from '@angular/core';
import { User } from '../../../shared/models/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
 @Input() user?: User;
}
