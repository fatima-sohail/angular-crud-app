import { Component, EventEmitter, Input, Output } from '@angular/core';


// import { DUMMY_USERS } from '../dummy-users';

//create a helper constant
// const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
// export class UserComponent {
//   selectedUser = DUMMY_USERS[randomIndex];

//   get imagePath(){
//     return 'assets/users/' + this.selectedUser.avatar
//   }

//   // onSelectedUser (){
//   //   console.log("clicked!");
//   // }

//   onSelectedUser(){

//     const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length )
//     this.selectedUser = DUMMY_USERS[randomIndex];

//   }
// }


//don't want to change randomly users either by clicking or refreshing. 
  
export class UserComponent{
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() id!: string;

  @Output() select = new EventEmitter();

  // to detect the error easily if you forget to add an avatar or name in the parent.html
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  get imagePath(){
        return 'assets/users/' + this.avatar;
  }
  onSelectedUser() {
    //emits the event
    this.select.emit(this.id);

  }

}