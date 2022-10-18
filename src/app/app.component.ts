import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  total_amount: number = 1500;
  title = 'events_form';
  total_tickets: number = 1;

  ngOnInit(): void {
    // this.totalTicketAmount();
  }
  constructor() {}

  eventsForm = new FormGroup({});

  changeTicketNo(e: any) {
    console.log(e.target.value);
    this.total_tickets = parseInt(e.target.value);
    this.total_amount = this.total_tickets * 1500;
  }

  // totalTicketAmount() {
  //   this.total_amount = this.total_tickets * 1500;
  //   debugger;
  //   console.log(this.total_amount);
  // }
}