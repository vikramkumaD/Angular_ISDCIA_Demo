import { Component, OnInit } from '@angular/core';
import { SplashScreenComponent } from './pages/splash_screen/splash-screen/splash-screen.component';
import { DemoComponent } from './pages/demo/demo/demo.component';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,SplashScreenComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ISD_CIA_DEMO';

  constructor(private route : Router)
  {
    this.route.navigateByUrl('/splash')
  }

  ngOnInit(): void {
   
  }
  
}
