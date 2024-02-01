import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsRepository } from './events.repository'
import { Types } from 'mongoose'

@Injectable()
export class EventsService {
  constructor(
    private readonly eventRepository: EventsRepository,
  ) {}

  create(createEventDto: CreateEventDto) {
    return this.eventRepository.create(createEventDto);
  }

  findAll() {
    return this.eventRepository.find({});
  }

  findOne(_id: string) {
    return this.eventRepository.findOne({ _id: new Types.ObjectId(_id) });
  }

  update(_id: string, updateEventDto: UpdateEventDto) {
    console.log(`Updating event with _id: ${_id}`, updateEventDto);

    return this.eventRepository.findOneAndUpdate(
      { _id: new Types.ObjectId(_id) },
      { $set: updateEventDto }
    );
  }

  remove(_id: string) {
    return this.eventRepository.findOneAndDelete({ _id: new Types.ObjectId(_id) });
  }
}
