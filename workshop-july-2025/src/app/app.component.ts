import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ref, get} from '@angular/fire/database'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular Project';

  ngOnInit(): void {

    const x = get(ref('workshop-angular-july-2025' as any, 'post'));
    console.log(x);
    
    
  }
}
