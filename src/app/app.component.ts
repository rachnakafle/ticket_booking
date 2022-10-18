import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  total_amount: any;
  title = 'events_form';
  total_tickets: any;

  ngOnInit(): void {
    this.totalTicketAmount();
  }
  constructor() {}

  eventsForm = new FormGroup({});

  changeTicketNo(e:any){
    console.log(e.target.value);
    this.total_tickets = e.target.value;
  } 

  totalTicketAmount() {
    this.total_amount = (this.total_tickets * 1500);
    console.log(this.total_amount);
    
  }
 
}
