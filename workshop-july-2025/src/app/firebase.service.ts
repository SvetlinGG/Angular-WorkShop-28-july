import { Injectable } from '@angular/core';
import { Database} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: Database) { }
}
