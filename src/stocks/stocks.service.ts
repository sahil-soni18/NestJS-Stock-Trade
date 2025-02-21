import { Injectable } from '@nestjs/common';

@Injectable()
export class StocksService {
  private stocks = [
    { id: 1, name: 'Apple', price: 175.23 },
    { id: 2, name: 'Tesla', price: 680.12 },
    { id: 3, name: 'Google', price: 2850.67 },
  ];

  getStocks() {
    return this.stocks;
  }
}
