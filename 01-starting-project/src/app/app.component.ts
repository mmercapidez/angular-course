import { Component, Input } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dumm-data/dummy-users';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    // The exclamation mark at the end indicates that there will never be a case of a user without that ID.
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id : string){
    console.log('Selected user with id ' + id);
    this.selectedUserId = id;

  }

}
