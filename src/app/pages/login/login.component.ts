import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide = true;
  error = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ingresar() {
    const user = this.form.value.usuario;
    const password = this.form.value.password;

    if (user === 'admin' && password === 'madelin3') {
      this.loading = true;
      setTimeout(() => {
        this.router.navigate(['dashboard']);
      }, 1500);
    } else {
      this._snackBar.open('Usuario o contrasenia invalidos', '', {
        duration: 5000,
        horizontalPosition: 'center',
      });
      this.form.reset();
    }
  }
}
