import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculationService } from '../services/calculation.service.js';

@Component({
  selector: 'app-user-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css'
})
export class UserInputsComponent {

  public initialInvestment = signal<string>('0');
  public annualInvestment = signal<string>('0');
  public expectedReturn = signal<string>('0');
  public duration = signal<string>('0');

  private calculationService = inject(CalculationService);

  onCalculate() {
    const initialInvestmentAsNumber = Number(this.initialInvestment());
    const annualInvestmentAsNumber = Number(this.annualInvestment());
    const expectedReturnAsNumber = Number(this.expectedReturn());
    const durationAsNumber = Number(this.duration());
    
    if (isNaN(initialInvestmentAsNumber) || isNaN(annualInvestmentAsNumber) || isNaN(expectedReturnAsNumber) || isNaN(durationAsNumber)) {
      alert('The inputs should contain only numbers');
      return;
    }

    this.calculationService.calculateInvestment({
      initialInvestment: initialInvestmentAsNumber,
      annualInvestment: annualInvestmentAsNumber,
      expectedReturn: expectedReturnAsNumber,
      duration: durationAsNumber,
    })
  }
}
