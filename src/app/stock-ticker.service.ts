import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Tick {
  symbol: string;
  start: number;
  change: number;
  end: number;
}

@Injectable({
  providedIn: 'root'
})
export class StockTickerService {
  private tick$ = new Subject<Tick>()

  constructor(@Inject('StockTicker') private ticker: any) {
    ticker.on((tick: Tick) => this.tick$.next(tick))
  }

  tickEvents(): Observable<Tick> {
    return this.tick$.asObservable()
  }
}
