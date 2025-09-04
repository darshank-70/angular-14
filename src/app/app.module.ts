import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VirtualListComponent } from './virtual-list/virtual-list.component';
import { CustomVirtualScrollComponent } from './custom-virtual-scroll/custom-virtual-scroll.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    VirtualListComponent,
    CustomVirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
