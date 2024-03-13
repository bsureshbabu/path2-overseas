import { FooterComponent } from './footer/footer.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavHeaderComponent,
    LeftSideMenuComponent,
    FooterComponent,
    SettingsComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavHeaderComponent,
    LeftSideMenuComponent,
    FooterComponent
  ]
})
export class LayoutModule {
}
