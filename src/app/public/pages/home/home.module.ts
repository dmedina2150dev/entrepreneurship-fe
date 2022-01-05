import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [ HomeComponent ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    exports: [ HomeComponent ],
    providers: [],
})
export class HomeModule {}