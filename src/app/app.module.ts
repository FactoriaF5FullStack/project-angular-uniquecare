import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { BottomNavComponent } from './layout/bottom-nav/bottom-nav.component';
import { ServiceDetailComponent } from './pages/service/service-detail/service-detail.component';
import { ConfirmPasswordValidatorDirective } from './util/custom-validators/confirm-password-validator.directive';
import { CreateComponent } from './pages/service/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    AppLayoutComponent,
    NotificationComponent,
    ServiceItemComponent,
    BottomNavComponent,
    ServiceDetailComponent,
    ConfirmPasswordValidatorDirective,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
