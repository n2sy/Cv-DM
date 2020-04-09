import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeComponent } from './home/home.component';
import { ColorComponent } from './color/color.component';

const dmwmRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'cv', component:CvComponent},
    {path: 'msword', component: MsWordComponent},
    {path: 'color', component: ColorComponent}
]

export const DMWM_ROUTING = RouterModule.forRoot(dmwmRoutes);