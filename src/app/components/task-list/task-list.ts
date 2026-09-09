import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-list',
  imports: [NgFor],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

  tasks: any[];

  showDeletePopup = false;

  selectedTask: any = null;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {
    this.tasks = this.taskService.tasks;
  }

  addTask() {
    this.router.navigate(['/add-task']);
  }

  viewTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.router.navigate(['/view-task', index]);
  }

  editTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.router.navigate(['/edit-task', index]);
  }

  deleteTask(task: any) {
    this.selectedTask = task;
    this.showDeletePopup = true;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  confirmDelete() {
    if (this.selectedTask) {
      const index = this.tasks.indexOf(this.selectedTask);

      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }

    this.selectedTask = null;
    this.showDeletePopup = false;

    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  cancelDelete() {
    this.selectedTask = null;
    this.showDeletePopup = false;

    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

}