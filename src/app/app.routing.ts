import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeComponent } from './home/home.component';
import { ColorComponent } from './color/color.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';
import { RhManagerComponent } from './rh-manager/rh-manager.component';

const dmwmRoutes : Routes = [
    {path: '', component: HomeComponent},
    //{path: 'cv', component:CvComponent, children:[
    {path: 'cv', children:[
        {path: '', component:CvComponent},
        {path: 'add', component:AddComponent, canActivate : [LoginGuard]},
        {path: ':id', component:InfosComponent},
        {path: 'edit/:id', component:UpdateComponent},
    ]},
    {path: 'msword', component: MsWordComponent},
    {path: 'color', component: ColorComponent},
    {path: 'login', component: LoginComponent, canActivate : [LogoutGuard]},
    {path: 'color/:cl', component: ColorComponent},
    {path: 'rhmanager', component: RhManagerComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not-found'}


]

export const DMWM_ROUTING = RouterModule.forRoot(dmwmRoutes);