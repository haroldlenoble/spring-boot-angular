import { Component, NgModule, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as axios from 'axios';
import {Router} from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

@Injectable()
export class UsersComponent implements OnInit {

  headers = ['id', 'Firstname', 'LastName', 'Email', 'Phone', 'Country', 'Update', 'Delete'];
  users: User[];

  constructor(private http: HttpClient, private router: Router) { }

  getUsers() {
    return axios.default.get('http://localhost:8080/users').then(data => {
      this.users = data.data._embedded.users;
      console.log(this.users);
    });
  }
  deleteUser(id) {
    if (confirm('Are you sure')) {
      return this.http.delete('http://localhost:8080/users/' + id).subscribe(() => this.getUsers());
    } else {
      return null;
    }
  }
  initUser(id) {
    this.router.navigate(['/user/' + id]).then(r => '/');
  }

  ngOnInit() {
    this.getUsers();
  }

}
