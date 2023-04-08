import {Component, OnInit} from '@angular/core';
import { UserService} from "../../core/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

users: any;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => this.users = data);

  }
  onRowClick() {
    this.router.navigate(['/details'])

  }

}
