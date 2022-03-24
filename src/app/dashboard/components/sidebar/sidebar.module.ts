import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [SidebarComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        MatIconModule,
        MatTooltipModule
    ],
    exports: [SidebarComponent],
    providers: [],
})
export class SidebarModule {}