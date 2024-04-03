import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent  implements OnInit{
  

  windowWidth : string | any ;
  showSplash:Boolean=true;

  constructor(private route : Router)
  {
   
    
  }

  

  ngOnInit(): void {
    
    setTimeout(()=>{
      this.route.navigateByUrl('/register')
    },2000)
    
    
  }
}
