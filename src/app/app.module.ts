import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { TestcvComponent } from './testcv/testcv.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { CustomDirDirective } from './custom-dir.directive';
import { NoImagePipe } from './no-image.pipe';
import { SecondChildComponent } from './second-child/second-child.component';
import { RecruterComponent } from './recruter/recruter.component';
import { HomeComponent } from './home/home.component';
import { DMWM_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http'
import { loginInterceptorProvider } from './login.interceptor';
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    TestcvComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    MsWordComponent,
    CustomDirDirective,
    NoImagePipe,
    SecondChildComponent,
    RecruterComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    AddComponent,
    NotFoundComponent,
    UpdateComponent,
    LoginComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DMWM_ROUTING,
    HttpClientModule
  ],
  providers: [loginInterceptorProvider, LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
