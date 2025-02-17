import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksController } from './stocks/stocks.controller';
import { StocksService } from './stocks/stocks.service';

@Module({
  imports: [],
  controllers: [AppController, StocksController],
  providers: [AppService, StocksService],
})
export class AppModule {}
