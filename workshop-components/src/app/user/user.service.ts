import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  constructor() {
    try {
      
    } catch (error) {
      
    }
   }

  login(){
    this.user = {
      firstName: 'John',
      email: 'john.doe@abv.bg',
      phoneNumber: '123-123-123',
      password: '123123',
      id: 'asdasdasd',
    }
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout(){
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }

}
