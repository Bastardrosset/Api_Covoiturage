import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { RequestDocument } from "./model/request.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class RequestRepository extends AbstractRepository<RequestDocument>{
    protected readonly logger = new Logger(RequestRepository.name);

    constructor(
        @InjectModel(RequestDocument.name) RequestModel: Model<RequestDocument>
    ) {
        super(RequestModel)
    }
}