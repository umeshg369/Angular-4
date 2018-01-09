import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {

  customerList = [];
  
  private headers = new Headers({'Content-Type':'application/json'})

  constructor(private ajax: Http) { }

  showCustomers = function() {
		//console.log(this.ajax);
    this.ajax.get('http://localhost:3000/posts').subscribe((res:Response) => {
      this.customerList = res.json();
    });
	}

  deleteCustomer = function(id) {
    //console.log(id);
    const url = `${'http://localhost:3000/posts'}/${id}`;
    console.log(url);
    this.ajax.delete(url).subscribe(
      ()=>{
        this.showCustomers();
    });
  }

  ngOnInit() {
  	this.showCustomers();
  }

}
