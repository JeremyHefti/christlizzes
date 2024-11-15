import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import {MenuModule} from "primeng/menu";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {HomeComponent} from "./home/home.component";
import { UsernamePopupComponent } from './username-popup/username-popup.component';
import {DialogModule} from "primeng/dialog";
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

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
    DropdownMenuComponent,
    UsernamePopupComponent,
    ForgetPasswordComponent,
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
        AngularFirestoreModule,
        MenubarModule,
        BadgeModule,
        AvatarModule,
        MenuModule,
        DialogModule
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
