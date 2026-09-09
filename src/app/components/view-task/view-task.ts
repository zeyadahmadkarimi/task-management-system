import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-view-task',
  imports: [],
  templateUrl: './view-task.html',
  styleUrl: './view-task.css'
})
export class ViewTask implements AfterViewInit {

  taskId: string | null = null;

  task: any;

  taskNumber = 0;

  showDescriptionScroll = false;

  @ViewChild('descriptionBox')
  descriptionBox!: ElementRef<HTMLDivElement>;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {
    this.taskId = this.route.snapshot.paramMap.get('id');

    const index = Number(this.taskId);

    this.task = this.taskService.tasks[index];

    this.taskNumber = index + 1;
  }

  ngAfterViewInit() {
    this.checkDescriptionScroll();
  }

  checkDescriptionScroll() {

    const element = this.descriptionBox.nativeElement;

    this.showDescriptionScroll =
      element.scrollHeight > element.clientHeight &&
      element.scrollTop + element.clientHeight < element.scrollHeight - 1;
  }

  onDescriptionScroll() {
    this.checkDescriptionScroll();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  editTask() {
    this.router.navigate(
      ['/edit-task', this.taskId],
      {
        queryParams: {
          from: 'view'
        }
      }
    );
  }

}