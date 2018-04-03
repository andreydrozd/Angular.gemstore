import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';

import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { GemComponent } from './gem/gem.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TabsComponent } from './tabs/tabs.component';

import { AvatarService } from './avatar.service';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    GemComponent,
    NavbarComponent,
    TabsComponent,
    ReviewsComponent,
    CartComponent,
    AccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AvatarService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
