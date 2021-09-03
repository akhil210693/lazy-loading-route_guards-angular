import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  constructor() { 
    
  }
  user = {
    fname: '',
    lname:'',
    email:'',
    phone:'',
    address:''
    
  };
  ngOnInit() {
  }
  onSubmit(register:NgForm){
    console.log(register);
    console.log(register.value.fname);
    register.reset();

  }
}
