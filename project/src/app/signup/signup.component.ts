import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ajax: Http) { }

  //addedMsg = false;
  addedMsg:boolean = false;

  onSubmit = function(val){
    ajax.post('http://localhost:3000/posts',val).subscribe();
    this.addedMsg = false;
    setTimeout(() => {
      this.addedMsg = true;
    });
     
  }

  ngOnInit() {
  }

}
