import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common'
import { EventsModule } from './events/events.module';
import { RequestModule } from './request/request.module';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [DatabaseModule, EventsModule, RequestModule, ExchangeModule],
  controllers: [],
  providers: [],
})
export class ReservationsModule {}
