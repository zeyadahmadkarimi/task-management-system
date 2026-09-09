import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    {
      taskName: 'Learn Angular',
      description: 'Learn Angular Components',
      status: 'Pending',
      dueDate: '2026-09-10'
    },
    {
      taskName: 'Practice TypeScript',
      description: 'Practice TypeScript concepts',
      status: 'In Progress',
      dueDate: '2026-09-12'
    },
    {
      taskName: 'Build API',
      description: 'Create REST endpoints using Node.js',
      status: 'Pending',
      dueDate: '2026-09-15'
    },
    {
      taskName: 'Database Setup',
      description: 'Configure PostgreSQL and Prisma',
      status: 'Completed',
      dueDate: '2026-09-05'
    },
    {
      taskName: 'Unit Testing',
      description: 'Write tests using Jasmine and Karma',
      status: 'Pending',
      dueDate: '2026-09-18'
    },
    {
      taskName: 'State Management',
      description: 'Implement NgRx for global state',
      status: 'In Progress',
      dueDate: '2026-09-20'
    },
    {
      taskName: 'Routing Setup',
      description: 'Configure lazy loading for routes',
      status: 'Pending',
      dueDate: '2026-09-22'
    },
    {
      taskName: 'Form Validation',
      description: 'Implement reactive forms with custom validators',
      status: 'Completed',
      dueDate: '2026-09-02'
    },
    {
      taskName: 'HTTP Interceptors',
      description: 'Setup global error handling and tokens',
      status: 'Pending',
      dueDate: '2026-09-25'
    },
    {
      taskName: 'CSS Styling',
      description: 'Design dashboard with Tailwind CSS',
      status: 'In Progress',
      dueDate: '2026-09-14'
    },
    {
      taskName: 'Dockerize App',
      description: 'Create Dockerfile and docker-compose',
      status: 'Pending',
      dueDate: '2026-09-28'
    },
    {
      taskName: 'CI/CD Pipeline',
      description: 'Setup GitHub Actions for automated build',
      status: 'Pending',
      dueDate: '2026-09-30'
    },
    {
      taskName: 'Code Review',
      description: 'Review pull requests from team members',
      status: 'Completed',
      dueDate: '2026-09-01'
    },
    {
      taskName: 'Authentication',
      description: 'Implement JWT based login flow',
      status: 'In Progress',
      dueDate: '2026-09-16'
    },
    {
      taskName: 'Performance Optimization',
      description: 'Audit bundle size and lazy load modules',
      status: 'Pending',
      dueDate: '2026-10-02'
    },
    {
      taskName: 'Documentation',
      description: 'Write README and API documentation',
      status: 'Pending',
      dueDate: '2026-10-05'
    },
    {
      taskName: 'Bug Fixing',
      description: 'Resolve reported layout issues on mobile',
      status: 'Completed',
      dueDate: '2026-09-04'
    },
    {
      taskName: 'Deployment',
      description: 'Deploy application to AWS EC2',
      status: 'Pending',
      dueDate: '2026-10-08'
    },
    {
      taskName: 'Analytics Integration',
      description: 'Add Google Analytics tracking',
      status: 'Pending',
      dueDate: '2026-10-10'
    },
    {
      taskName: 'Security Audit',
      description: 'Check for dependency vulnerabilities',
      status: 'In Progress',
      dueDate: '2026-10-12'
    }
  ];

  addTask(task: any) {
    this.tasks.push(task);
  }

  updateTask(index: number, updatedTask: any) {
    this.tasks[index] = updatedTask;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}