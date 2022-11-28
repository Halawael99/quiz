import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { HeaderComponent } from './header/header.component';
import { ExamComponent } from './exam/exam.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HeaderComponent,
    ExamComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    RouterModule.forRoot([
    {path:'exam',component:ExamComponent},
    {path:'',component:UserFormComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
