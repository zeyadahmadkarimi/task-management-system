import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-add-task',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {

  showRequiredPopup = false;

  showSuccessPopup = false;

  requiredMessage = '';

  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('Pending', Validators.required),
    dueDate: new FormControl('', Validators.required)
  });

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  addTask() {

    if (this.taskForm.controls.taskName.invalid) {
      this.requiredMessage = 'Task Name is required.';
      this.showRequiredPopup = true;
      return;
    }

    if (this.taskForm.controls.description.invalid) {
      this.requiredMessage = 'Description is required.';
      this.showRequiredPopup = true;
      return;
    }

    if (this.taskForm.controls.status.invalid) {
      this.requiredMessage = 'Status is required.';
      this.showRequiredPopup = true;
      return;
    }

    if (this.taskForm.controls.dueDate.invalid) {
      this.requiredMessage = 'Due Date is required.';
      this.showRequiredPopup = true;
      return;
    }

    this.taskService.addTask(this.taskForm.value);

    this.showSuccessPopup = true;
  }

  closeRequiredPopup() {
    this.showRequiredPopup = false;
  }

  closeSuccessPopup() {
    this.showSuccessPopup = false;
    this.router.navigate(['/']);
  }

}