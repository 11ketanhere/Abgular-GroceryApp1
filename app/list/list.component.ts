import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  userForm: FormGroup;
  listData: any;
  
constructor(private fb: FormBuilder) {

  this.listData = [];

  this.userForm = this.fb.group({
    
    itemName: ['', Validators.required],
    quantity: ['', Validators.required],
    imageUrl: ['', Validators.required]

  })
}
  

public addItem() {
  this.listData.push(this.userForm.value);
  this.userForm.reset();
  // debugger;
  //console.log(this.listData);
}
deleteItem(element: any){
  this.listData.forEach((value: any, index:any) => {
    if (value == element)
    this.listData.splice(index,1)
  });
}

view(element:any): void{
  this.listData.forEach((value: any, index:any) => {
    if (value == element)
    console.log();
      this.listData.value = this.listData.data
    });
}

  ngOnInit() {
  }

}
