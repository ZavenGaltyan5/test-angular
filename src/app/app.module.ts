import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { SignUpTeacherComponent } from './sign-up/sign-up-teacher/sign-up-teacher.component';
import { SignUpDonorComponent } from './sign-up/sign-up-donor/sign-up-donor.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HeaderComponent,
    SignUpTeacherComponent,
    SignUpDonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
