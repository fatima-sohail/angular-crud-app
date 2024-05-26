import { Component } from '@angular/core';
import { HeaderComponent } from './header.component'; //short form of header.comp.ts
import { UserComponent } from './user/user.component';



@Component({
  selector: 'app-root', //selector reveals whether its parent or child comp, in this case its parent comp
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second-angular-app';
}
