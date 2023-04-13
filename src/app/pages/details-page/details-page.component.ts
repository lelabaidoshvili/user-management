import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../core/user.service';
import {User} from '../../core/user';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent  implements OnInit{
  public user!: User;
  constructor(private route: ActivatedRoute, private userService: UserService) {}
  public ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId !== null) {
      this.userService.getUserById(+userId)
        .subscribe(user => this.user = user);
    }
  }
}

