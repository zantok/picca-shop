import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInSubj = new Subject<boolean>();
  currentUser: User;
  loggedIn: boolean = false ;

  constructor() { }

  setUser(user: User){
    this.currentUser=user;
    console.log("This is a name set " + this.currentUser.name);
    this.loggedIn=true;
    this.loggedInSubj.next(this.loggedIn);
  }

  logout(){
    this.currentUser = null;
    this.loggedIn=false;
    this.loggedInSubj.next(this.loggedIn);
  }

  getUser(){
    return this.currentUser;
  }
  
  addUser(name:string){

  }

}
