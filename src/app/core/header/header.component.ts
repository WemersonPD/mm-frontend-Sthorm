import { Router } from '@angular/router';
import { TokenPayload } from './../user/token-payload';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{
  public user$: Observable<TokenPayload>;
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }
  logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
