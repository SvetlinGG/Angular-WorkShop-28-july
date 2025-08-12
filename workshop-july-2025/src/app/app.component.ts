import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainComponent } from './main/main.component';
import { PostsListComponent } from './posts-list/posts-list.component';
//import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d-Bx9ArA6K";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Project';

  constructor(private http: HttpClient){

  }
  ngOnInit(){
    
    // this.http.get('https://workshop-angular-july-2025-default-rtdb.firebaseio.com/product/.json').subscribe( (x)=> {
    //   console.log(x);
      
    // })
  }
  
}
