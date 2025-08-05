import { Injectable } from '@angular/core';
import { Database, ref, get} from '@angular/fire/database';
import {from} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: Database) {}

  getAll(){
    return from(get(ref(this.db, 'post')));
  }
}
