import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [FirebaseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular Project';

  constructor(private firebaseService: FirebaseService){}

  ngOnInit(): void {
    this.serviceTest()

    
  }
  serviceTest(){
    this.firebaseService.getAll().subscribe(p => {
      console.log(p);
      
    });
    
  }
}
