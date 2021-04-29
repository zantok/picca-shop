import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User;

  constructor() { }

  setUser(user: User){
    this.currentUser=user;
    console.log("This is a name set " + this.currentUser.name)
  }

  getUser(){
    return this.currentUser;
  }
  
  addUser(name:string){

  }

}
