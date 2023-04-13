import {Component, OnDestroy, OnInit} from '@angular/core';
import { UserService } from '../../core/user.service';
import { Router } from '@angular/router';
import { User } from '../../core/user';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  public users: User[] =[];
  public selectedUserId: number | null = null;
  public showContextMenu = false;
  public contextMenuX = 0;
  public contextMenuY = 0;

  constructor(private userService: UserService, private router: Router) {}

  public ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      document.addEventListener('click', this.onDocumentClick);
    });
  }
  public ngOnDestroy(): void {
    document.removeEventListener('click', this.onDocumentClick);
  }

  public onDocumentClick = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;
    const rowClicked = target.closest('[id^="row-"]');
    if (!rowClicked) {
      this.showContextMenu = false;
      this.selectedUserId = null;
    }
  }

  public onRowClick (id: number, event: MouseEvent): void {
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
