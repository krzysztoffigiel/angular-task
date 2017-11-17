import { Component, OnInit } from '@angular/core';

import { UsersListService } from './users-list.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUsers } from '../models/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  errorMessage: string = 'Delete failure';
  closeResult: string;
  complexForm: FormGroup;
  usersModel: Array<IUsers> = [];
  user: IUsers;
  isChecked: boolean = false;
  activeUser: Array<IUsers> = [];

  constructor(fb: FormBuilder, private usersService: UsersListService, private modalService: NgbModal) { }

  deleteUser(id: number) {
    this.usersService.deleteUser(id)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      )
  }
  
  //updating multiple users
  updateUsers() {
    this.activeUser.forEach(element => {
      this.usersService.updateUsers(element.id, element)
        .subscribe(
        res => {
          console.log("User response after update: ", res);
        },
        error => this.errorMessage = <any>error
        );
    });

  }
  //updating one user
  updateUser(id: number, user: IUsers) {
    this.usersService.updateUsers(id, user)
      .subscribe(
      res => {
        console.log("User response after update: ", res);
      },
      error => this.errorMessage = <any>error
      );
  }

  checkbox(user) {
    //user.selected = (!user.selected) ? false : true;
    if (user.selected) {
      this.activeUser.push(user);
    } else {
      this.activeUser.pop();
    }
    console.log(user.selected);
    console.log(this.activeUser);
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(
      users => {
        this.usersModel = users;
        this.usersModel.forEach(element => {
          element.selected = false;
        });
        console.log("Users model", this.usersModel);
      }
      );
  }

  ngOnInit() {
    this.getUsers();
  }

  title = 'Users data';
}
