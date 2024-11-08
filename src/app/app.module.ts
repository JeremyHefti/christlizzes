import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FloatLabelModule} from "primeng/floatlabel";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import { InputboxComponent } from './inputbox/inputbox.component';
import { TitleComponent } from './title/title.component';
import {Button} from "primeng/button";
import { ButtonComponent } from './button/button.component';
import {AngularFireModule} from "@angular/fire/compat";
import {enviroment} from "../enviroments/enviroments"
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { ToastModule } from 'primeng/toast';
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InputboxComponent,
    TitleComponent,
    ButtonComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FloatLabelModule,
    PasswordModule,
    InputTextModule,
    Button,
    NoopAnimationsModule,
    ToastModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireAuthModule,
    MenubarModule,
    BadgeModule,
    AvatarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
