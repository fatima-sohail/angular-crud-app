import { Component, Input } from '@angular/core';
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
//want to configure 
export class UserComponent{
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(){
        return 'assets/users/' + this.avatar;
  }
  onSelectedUser() {

  }

}