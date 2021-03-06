# stockticker-exercise-angular

Boilerplate project for StockTicker code exercise using Angular.

This project has a single `AppComponent` which subscribes to an `Observable` provided by the `StockTickerService`. This subscription receives a `Tick` object at random intervals with a stock symbol and price information. Currently, these objects are being logged to the console as they are received.

Your objective is to flesh out a simple Single Page App that displays these stock prices. A simple solution will show all events in an expanding list, while a more robust solution will keep a single entry for each stock and update it as events come in. Bonus points for adding visual effects to stocks as they change, such as colors to indicate if a stock increased or decreased, or moving relative positions to indicate what event happened most recently.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
