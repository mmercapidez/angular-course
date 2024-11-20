import { Component, Input } from '@angular/core';

import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "../dumm-data/dummy-tasks";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //userName? === userName : string | undefined
  @Input({required:true}) selectedUserId!:string;
  @Input({required:true}) userName!:string;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId == this.selectedUserId);
  }
}
