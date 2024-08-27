//Input: decorator, input: input function
import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();
  // output is an EventEmitterRef<T>; it has exactly the same purpose as @Output = new EventEmitter()
  // output is not a signal, but it's used with them
  select = output<string>();

  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  onSelectUser() {
    console.log('clicked!');
    this.select.emit(this.id);

  }
}
