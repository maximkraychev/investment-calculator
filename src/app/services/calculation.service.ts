import { Injectable, signal } from '@angular/core';

import { UserInput } from '../user-inputs/user-input.model.js';
import { CalculatedDate } from '../investment-results/investment-results.model.js';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  private _isResultCalculated = signal<boolean>(false);
  private _calculatedData = signal<CalculatedDate[]>([]);

  public get isResultCalculated() {
    return this._isResultCalculated();
  }

  public get calculatedData() {
    return this._calculatedData();
  }

  public calculateInvestment(inputValues: UserInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = inputValues;

    const annualData: CalculatedDate[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this._isResultCalculated.set(true);
    this._calculatedData.set(annualData);
  }
}
