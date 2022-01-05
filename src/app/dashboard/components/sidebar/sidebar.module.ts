import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [SidebarComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [SidebarComponent],
    providers: [],
})
export class SidebarModule {}