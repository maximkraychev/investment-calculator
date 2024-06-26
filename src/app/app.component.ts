import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CalculationService } from './services/calculation.service.js';

import { HeaderComponent } from './header/header.component.js';
import { UserInputsComponent } from './user-inputs/user-inputs.component.js';
import { InvestmentResultsComponent } from './investment-results/investment-results.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputsComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';
  public calculationService = inject(CalculationService);
}
