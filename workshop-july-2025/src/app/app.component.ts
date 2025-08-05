import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
