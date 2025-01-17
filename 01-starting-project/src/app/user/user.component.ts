//Input: decorator, input: input function
import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
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
