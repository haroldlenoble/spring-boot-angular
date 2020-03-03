import { Component, NgModule, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: number;
  public country: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

@Injectable()
export class UsersComponent implements OnInit {

  headers = ['id', 'Firstname', 'LastName', 'Email', 'Phone', 'Country', 'Update', 'Delete'];
  users: User[];

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http
      .get<User[]>('http://localhost:8080/users').subscribe(data => {
        this.users = data._embedded.users;
      });
  }
  deleteUser(id) {
    if (confirm('Are you sure')) {
      return this.http.delete('http://localhost:8080/users/' + id).subscribe(() => this.getUser());
    } else {
      return null;
    }
  }

  ngOnInit() {
    this.getUser();
  }

}
