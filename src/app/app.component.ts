import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  total_amount: any;
  amount: any;
  title = 'events_form';

  constructor() {}

  eventsForm = new FormGroup({});

  totalTicketAmount() {
    this.total_amount = this.amount * 1500;
  }
}
