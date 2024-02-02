import { Module } from '@nestjs/common';
import { DatabaseModule, LoggerModule } from '@app/common';
import { EventsModule } from './events/events.module';
import { RequestModule } from './request/request.module';
import { ExchangeModule } from './exchange/exchange.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), 
  DatabaseModule, 
  EventsModule, 
  RequestModule, 
  ExchangeModule,
  LoggerModule
],
  controllers: [],
  providers: [],
})
export class ReservationsModule { }
