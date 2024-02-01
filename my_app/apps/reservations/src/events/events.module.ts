import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { DatabaseModule } from '@app/common';
import { EventDocument, EventSchema } from './model/event.schema';
import { EventsRepository } from './events.repository'

@Module({
  imports: [
    DatabaseModule, 
    DatabaseModule.forFeature([
      {name: EventDocument.name, schema: EventSchema}
    ])
  ],
  controllers: [EventsController],
  providers: [EventsService, EventsRepository],
})
export class EventsModule {}
