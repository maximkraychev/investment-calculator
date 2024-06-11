import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { CalculatedDate } from './investment-results.model.js';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  public data = input.required<CalculatedDate[]>()
}
