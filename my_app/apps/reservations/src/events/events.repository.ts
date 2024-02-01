import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { EventDocument } from "./model/event.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class EventsRepository extends AbstractRepository<EventDocument>{
    protected readonly logger = new Logger(EventsRepository.name);

    constructor(
        @InjectModel(EventDocument.name) EventModel: Model<EventDocument>,
    ) {
        super(EventModel)
    }

}