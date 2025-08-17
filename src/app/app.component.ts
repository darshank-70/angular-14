import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router){
    this.authService._isLoggedIn$.subscribe((res)=> {this.isLoggedIn = res; if(!res) this.router.navigate(['login'])});
    
  }
  
  logOut(){
    this.authService.logout();
  }
}
