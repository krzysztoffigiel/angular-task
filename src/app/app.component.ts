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

  constructor(fb: FormBuilder, private usersService: UsersListService, private modalService: NgbModal) { }

  deleteUser(id: number) {
    this.usersService.deleteUser(id)
      .subscribe(
      result => console.log(result),
      error => this.errorMessage = <any>error
      )
  }

  updateUser(id: number, user: IUsers) {
    this.usersService.updateUsers(id, user)
      .subscribe(
      res => {
        console.log("User response after update: ", res);
      },
      error => this.errorMessage = <any>error
      )
  }

  changeValue() {
    this.isChecked = !this.isChecked;
  }

  abc() {
    console.log(this.isChecked);
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(
      users => {
        this.usersModel = users;
        console.log("Users model", this.usersModel);
      }
      );
  }

  ngOnInit() {
    this.getUsers();
  }

  title = 'app';
}
