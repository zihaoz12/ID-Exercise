import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SubMenuComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SubMenuComponent
  ]
})
export class CoreModule { }
