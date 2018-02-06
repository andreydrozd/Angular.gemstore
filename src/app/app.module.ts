import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GemComponent } from './gem/gem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    GemComponent,
    NavbarComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
