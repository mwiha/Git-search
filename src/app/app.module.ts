import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersService } from './service/users.service';
import {HttpClientModule} from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { TrimStrTwo } from './date-count.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
    TrimStrTwo,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
