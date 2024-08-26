//Input: decorator, input: input function
import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  //Signal(InputSignal) container with type: input<string>
  //InputSignal required: input.required().
  name = input.required<string>();
  avatar = input.required<string>();

  imagePath = computed(() => {
    return '../../assets/users/' + this.avatar();
  });
  
  // get imagePath() {
  //   return '../../assets/users/' + this.avatar;
  // }

  onSelectUser() {
    console.log('clicked!');
  }
}
