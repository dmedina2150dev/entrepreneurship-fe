import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [ HomeComponent ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        LoginModule,
        RegisterModule
    ],
    exports: [ HomeComponent ],
    providers: [],
})
export class HomeModule {}