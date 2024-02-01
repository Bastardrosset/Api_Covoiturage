import { Module } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { ExchangeController } from './exchange.controller';
import { DatabaseModule } from '@app/common';
import { ExchangeDocument, ExchangeSchema } from './model/exchange.schema';
import { ExchangeRepository } from './exchange.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ExchangeDocument.name, schema: ExchangeSchema}
    ])
  ],
  controllers: [ExchangeController],
  providers: [ExchangeService, ExchangeRepository],
})
export class ExchangeModule {}
