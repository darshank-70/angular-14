import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  u = ''; p = '';
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {}
  submit() {
    this.auth.login(this.u, this.p);
    const redirect = this.route.snapshot.queryParamMap.get('redirect') || '/projects';
    this.router.navigateByUrl(redirect);

}
