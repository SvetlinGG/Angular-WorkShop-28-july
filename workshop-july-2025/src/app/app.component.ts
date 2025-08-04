import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ref, get} from '@angular/fire/database'; 
import { FirebaseApp } from '@angular/fire/app';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
    this.firebaseService.getAll().then(p => {
      console.log(p);
      
    });
    
  }
}
