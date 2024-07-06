import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-individual-task',
  standalone: true,
  imports: [],
  templateUrl: './individual-task.component.html',
  styleUrl: './individual-task.component.css'
})


export class IndividualTaskComponent {
  @Input() inputTask!: Task;

  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.inputTask.id);
  }

}

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}