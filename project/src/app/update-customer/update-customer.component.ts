import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})

export class UpdateCustomerComponent implements OnInit {

  id : number;
  data : object = {};
  dataobj : object = {};
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(
  	private ajax: Http, 
  	private router: Router, 
  	private route: ActivatedRoute,
  ) { }

  updateCustomer = function(cust){
  	this.dataobj = {
  		"name":cust.name, "email":cust.email, "mobile":cust.mobile
  	}
  	console.log(this.dataobj);
  	const url = `${"http://localhost:3000/posts"}/${this.id}`;
  	//console.log(this.headers);

  	return this.ajax.put(url,JSON.stringify(this.dataobj),{headers:this.headers
  	}).toPromise().then(
  		()=>{
  			this.router.navigate(['/customer']);
  		}
  	);
  }

  ngOnInit() {
  	this.route.params.subscribe(
  		params => {
  			this.id = +params['id'];
  			console.log(this.id);
  		}
  	)
  	this.ajax.get('http://localhost:3000/posts/'+this.id).subscribe(
  		(res:Response) => {
		//console.log(res);
		this.data = res.json();
	});
  }

}
