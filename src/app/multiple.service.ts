import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultipleService {
  constructor() {}

  findMultiples(num: number) {
    const multiples = [];
    for (let i = 0; i <= num; i++) {
      let color = 'black';
      const divBy3 = i % 3 === 0;
      const divBy5 = i % 5 === 0;
      const divBy7 = i % 7 === 0;

      if (divBy3 || divBy5 || divBy7) {
        if (divBy3) color = 'green';
        if (divBy5) color = 'red';
        if (divBy7) color = 'blue';
      }

      multiples.push({ value: i, color: color });
    }
    return multiples;
  }
}
