import { Component } from '@angular/core';
import { StockTickerService } from './stock-ticker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private ticker: StockTickerService) {
    ticker.tickEvents().subscribe(tickEvent => console.log(tickEvent))
  }
}
