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
  @ViewChild('f',{static:false}) logForm: NgForm;
  constructor(private dataStorageService: DataStorageService) {}

  // onSaveData() {
  //   this.dataStorageService.storeProducts();
  // }

  // onFetchData() {
  //   this.dataStorageService.fetchProducts().subscribe();
  // }

  collapsed = true;
  ngOnInit() {}

  onSubmit(form:NgForm){
    const value = form.value;
    console.log(value.name);
    this.dataStorageService.addUser(value.name);

  }
}
