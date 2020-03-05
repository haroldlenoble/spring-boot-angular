import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})

export class UserViewComponent implements OnInit {
  id: number;
  user: User = new User();

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router) { }

  getUser(id) {
    return this.http
      .get<User>('/users/' + id).subscribe(data => {
        this.user.id = data.id;
        this.user.email = data.email;
        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.genre = data.genre;
        this.user.phone = data.phone;
        this.user.country = data.country;
      });
  }

  createUser(user) {
    return this.http
      .post<User>('/users', user).subscribe( () => this.route.navigate(['/']));
  }

  updateUser(user) {
    return this.http
      .put<User>('/users/' + user.id, user).subscribe( () => this.route.navigate(['/']));
  }


  ngOnInit(): void {
    this.id = +this.router.snapshot.paramMap.get('id');
    if(this.id > -1) {
      this.getUser(this.id);
    }
  }

}
