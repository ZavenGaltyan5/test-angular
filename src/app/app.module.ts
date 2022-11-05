import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { SignUpTeacherComponent } from './sign-up/sign-up-teacher/sign-up-teacher.component';
import { SignUpDonorComponent } from './sign-up/sign-up-donor/sign-up-donor.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { VerifyAccComponent } from './sign-up/verify-acc/verify-acc.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HeaderComponent,
    SignUpTeacherComponent,
    SignUpDonorComponent,
    VerifyAccComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
