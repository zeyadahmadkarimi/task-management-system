import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-edit-task',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css'
})
export class EditTask {

  taskId: string | null = null;

  from: string | null = null;

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
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {
    this.taskId = this.route.snapshot.paramMap.get('id');

    this.from = this.route.snapshot.queryParamMap.get('from');

    const task = this.taskService.tasks[Number(this.taskId)];

    if (task) {
      this.taskForm.patchValue(task);
    }
  }

  updateTask() {

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

    const index = Number(this.taskId);

    this.taskService.updateTask(
      index,
      this.taskForm.value
    );

    this.showSuccessPopup = true;
  }

  openDatePicker(input: HTMLInputElement) {
    input.showPicker();
  }

  preventDateTyping(event: KeyboardEvent) {
    event.preventDefault();
  }

  closeRequiredPopup() {
    this.showRequiredPopup = false;
  }

  closeSuccessPopup() {
    this.showSuccessPopup = false;
    this.router.navigate(['/']);
  }

  cancel() {

    if (this.from === 'view') {

      this.router.navigate([
        '/view-task',
        this.taskId
      ]);

    } else {

      this.router.navigate(['/']);

    }

  }

}