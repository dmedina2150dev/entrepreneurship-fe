import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Business } from 'src/app/core/models/business/business';
import { Client } from 'src/app/core/models/clients/client';
import { BusinessService } from 'src/app/core/services/business/business.service';
import { ClientService } from 'src/app/core/services/clients/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  personalData = this.fb.group({
    fullName: ['Dajan Medina', [Validators.required]],
    email: ['dm@mail.com', [Validators.required, Validators.email]],
    password: ['12345', [Validators.required]],
  });
  businessData = this.fb.group({
    nameBusiness: ['Kaizen', [Validators.required]],
    address: ['Temuco', [Validators.required]],
    phone: ['123456', [Validators.required]]
  });
  dataPerson!: Client;
  dataBusiness!: Business;

  constructor(
    private fb: FormBuilder,
    private _client: ClientService,
    private _business: BusinessService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }

  save() {
    this.dataBusiness = this.businessData.value;
    this.dataPerson = this.personalData.value;
    this._client.save(this.dataPerson);
    this._business.save(this.dataBusiness);
    console.log("Data Personal: ", this.dataPerson);
    console.log("Data Empresa: ", this.dataBusiness);
    this._router.navigateByUrl("/dashboard")
  }
}
