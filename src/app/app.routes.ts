import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { AddTask } from './components/add-task/add-task';
import { EditTask } from './components/edit-task/edit-task';
import { ViewTask } from './components/view-task/view-task';

export const routes: Routes = [

  {
    path: '',
    component: TaskList
  },

  {
    path: 'add-task',
    component: AddTask
  },

  {
    path: 'edit-task/:id',
    component: EditTask
  },

  {
    path: 'view-task/:id',
    component: ViewTask
  }

];