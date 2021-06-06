import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  amount = 0;
  have = 'USD';
  want = 'EUR';
  total = 0;
  currencies: string[] = ["USD", "EUR", "POUND", "COP"];


  constructor() { }

  ngOnInit(): void {
  }

  convert() {
    switch (this.have) {
      case 'USD':
        switch (this.want) {
          case 'USD':
            this.total = this.amount;
            break;
          case 'EUR':
            this.total = this.amount * 0.82;
            break;
          case 'POUND':
            this.total = this.amount * 0.71;
            break;
          case 'COP':
            this.total = this.amount * 3607.50;
            break;
        }
        break;
      case 'EUR':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.22;
            break;
          case 'EUR':
            this.total = this.amount;
            break;
          case 'POUND':
            this.total = this.amount * 0.86;
            break;
          case 'COP':
            this.total = this.amount * 4389.08;
            break;
        }
        break;
      case 'POUND':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 1.42;
            break;
          case 'EUR':
            this.total = this.amount * 1.16;
            break;
          case 'POUND':
            this.total = this.amount;
            break;
          case 'COP':
            this.total = this.amount * 5108.47;
            break;
        }
        break;
      case 'COP':
        switch (this.want) {
          case 'USD':
            this.total = this.amount * 0.00027;
            break;
          case 'EUR':
            this.total = this.amount * 0.00023;
            break;
          case 'POUND':
            this.total = this.amount * 0.00019;
            break;
          case 'COP':
            this.total = this.amount;
            break;
        }
        break;
    }
  }

}
