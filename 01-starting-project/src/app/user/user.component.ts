//Input: decorator, input: input function
import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';

// Type aproch
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }
// Interface aproach
interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input({ required: true }) user!: User;

  //customize the generic type of the EventEmitter data 
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    console.log('clicked!');
    this.select.emit(this.user.id);
  }
}
