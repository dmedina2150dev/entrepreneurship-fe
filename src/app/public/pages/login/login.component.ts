import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/clients/client';
import { ClientService } from 'src/app/core/services/clients/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  hola: Client = { name: '', email: '', password: ''};

  loginForm = this.fb.group({
    email: ['dm@mail.com',[Validators.required, Validators.email]],
    password: ['12345', [Validators.required]]
  });

  constructor(
    private _client: ClientService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    console.log(this._client.client);
  }

}
