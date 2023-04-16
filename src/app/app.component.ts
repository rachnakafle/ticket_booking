import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookTicketService } from './services/book-ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  total_amount: number = 1500;
  title = 'events_form';
  total_tickets: number = 1;
  ticket_list: any;

  ngOnInit(): void {
    // this.totalTicketAmount();
    this.getAllTickets();
  }
  constructor(private _bookTicket: BookTicketService) {}

  eventsForm = new FormGroup({});

  changeTicketNo(e: any) {
    console.log(e.target.value);
    this.total_tickets = parseInt(e.target.value);
    this.total_amount = this.total_tickets * 1500;
  }

  getAllTickets() {
    this._bookTicket.getAll().subscribe({
      next: (x: any) => {
        console.log(x);
        this.ticket_list = x.data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
