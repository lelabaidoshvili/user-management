import { Component, OnInit } from '@angular/core';
import { UserService } from "../../core/user.service";
import { Router } from "@angular/router";
import { User } from "../../core/user";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  users: User[] =[];
  selectedUserId: number | null = null;
  showContextMenu = false;
  contextMenuX = 0;
  contextMenuY = 0;

  constructor(private userService: UserService, private router: Router,
              ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  public onRowClick = (id: number, event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    this.selectedUserId = id;
    this.showContextMenu = true;
    if (event.pageX > window.innerWidth / 2) {
      this.contextMenuX = event.pageX - 150;
    } else {
      this.contextMenuX = event.pageX + 50;
    }
    this.contextMenuY = event.pageY - 50;

  }

  public onDeleteClick(): void {
    const index = this.users.findIndex((user: any) => user.id === this.selectedUserId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    this.selectedUserId = null;
    this.showContextMenu = false;
  }

  public onDetailsClick(): void {
    this.router.navigate([`/details/${this.selectedUserId}`]);
    this.selectedUserId = null;
    this.showContextMenu = false;
  }
  public onMenuItemClicked(item: string): void {
    switch (item) {
      case 'Delete':
        this.onDeleteClick();
        break;
      case 'Details':
        this.onDetailsClick();
        break;
    }
  }

}
