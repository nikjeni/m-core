import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConvertPipe } from './convert.pipe';
import { PrettyjsonPipe } from './prettyjson.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientInfoComponent,
    ConvertPipe,
    PrettyjsonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
