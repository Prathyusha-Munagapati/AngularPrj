import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-Updated.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { ServicesCompComponent } from './services-comp/services-comp.component';
import { AboutCompComponent } from './about-comp/about-comp.component';
import { SinupCompComponent } from './sinup-comp/signup-comp.component';
import { FormsModule } from '@angular/forms'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FakeService } from './fake.service';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCompComponent,
    ServicesCompComponent,
    AboutCompComponent,
    SinupCompComponent,
    SidenavComponent,
    LoginComponent,
    ProfileComponent,
    UserComponent,
    UserDetailsComponent
    
  ],
  imports: [                                 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
    

    
  ],
  providers: [FakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
