import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  numbersA: number[] = [];
  numbersB: number[] = [];

  constructor() { }

  addNumberA(num: number) {
    this.numbersA.push(num);
  }

  addNumberB(num: number) {
    this.numbersB.push(num);
  }

  findDifference(numArr: number[], numArr2: number[]): number {
    let diff: number = 0;
    for (const num in numArr) {
      if (numArr.hasOwnProperty(num)) {
        diff += numArr[num];
      }
    }
    for (const num in numArr2) {
      if (numArr2.hasOwnProperty(num)) {
        diff -= numArr2[num];
      }
    }
    return diff;
  }
}
