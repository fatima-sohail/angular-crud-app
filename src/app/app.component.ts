import { Component } from '@angular/core';
import { HeaderComponent } from './header.component'; //short form of header.comp.ts
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root', //selector reveals whether its parent or child comp, in this case its parent comp
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second-angular-app';
  users = DUMMY_USERS;
  
  //  onUserSelected(id: string){
  //   this.selectedUserId = id;
  //  }

  userName!: string;

  onSelectedUserEventHandler(n: string) {
    this.userName = n;
  }


}
