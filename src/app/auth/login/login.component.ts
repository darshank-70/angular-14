import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
  u = ''; p = '';
  loginForm: FormGroup | undefined;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      u: [''],
      p: [''],
    })
  }
  submit() {
    this.auth.login(this.u, this.p);
    const redirect = this.route.snapshot.queryParamMap.get('redirect') || '/home';
    this.router.navigateByUrl(redirect);
  }
}