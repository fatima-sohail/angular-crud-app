import { Component, EventEmitter, Output, Input } from '@angular/core';
import { IndividualTaskComponent } from "./individual-task/individual-task.component";


@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [IndividualTaskComponent]
})

export class TaskComponent {

  @Input() inputUserName!: string;
  @Input() inputUserId!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get getUserTasks(){
    return this.tasks.filter((task) => task.userId === this.inputUserId);
  }

  OnComplete(id: string){
    this.tasks = this.tasks.filter((task)=> task.id !== id)
  }

}
