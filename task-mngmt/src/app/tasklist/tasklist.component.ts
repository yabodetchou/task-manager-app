import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  // Array to store the tasks
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];

  // Property to bind with the input field
  newTask: string = '';

  // Method to add a new task to the list
  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);  // Add the new task to the list
      this.newTask = '';  // Reset the input field
    }
  }

  // Method to delete a task from the list
  deleteTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);  // Remove the task
  }
}
  