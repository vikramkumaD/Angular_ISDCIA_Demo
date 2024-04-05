import { Routes } from '@angular/router';
import { SplashScreenComponent } from './pages/splash_screen/splash-screen/splash-screen.component';
import { DemoComponent } from './pages/demo/demo/demo.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginPageComponent } from './pages/login_page/login-page/login-page.component';
import { MpinComponent } from './pages/mpin/mpin.component';

export const routes: Routes = [
    {
        path:'splash',
        title:'splash',
        component:SplashScreenComponent,
        pathMatch:'full'
    },
    {
        path:'demo',
        title:'Demo',
        component:DemoComponent
    },
    {
        path:'register',
        title:'Register',
        component:RegisterComponent
    },
    {
        path:'login',
        title:'Login',
        component:LoginPageComponent
    },
    {
        path:'mpin',
        title:'Login',
        component:MpinComponent
    }
];
