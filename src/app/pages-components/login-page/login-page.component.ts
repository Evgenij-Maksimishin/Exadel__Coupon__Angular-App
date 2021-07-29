import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;

  public submitted = false;

  public error: string = '';

  private returnUrl: string = '';

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigateByUrl(this.returnUrl);
        },
        (error) => {
          console.log(error);
          this.error = this.translation.translate('login.error');
        },
      );
  }
}
