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

  @Input() name?: string;

}
