import { Component, OnInit, EventEmitter, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataStorageService } from "../shared/data-storage.service";
import { UserService } from "../shared/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public name: string;
  @ViewChild('f',{static:false}) logForm: NgForm;
  constructor(private dataStorageService: DataStorageService, private userService: UserService) {}

  loggedIn = false;
  ngOnInit() {}

  onSubmit(form:NgForm){
    const value = form.value;
    console.log(value.name);
    this.dataStorageService.addUser(value.name);
    this.name=value.name;
    this.loggedIn= true;
  }

  onLogOut(){
    this.userService.logout();
    this.name="";
    this.loggedIn=false;
  }
}
