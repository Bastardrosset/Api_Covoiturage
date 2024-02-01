import { AbstractRepository } from "@app/common"
import { Injectable, Logger } from "@nestjs/common"
import { ExchangeDocument } from "./model/exchange.schema"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

@Injectable()
export class ExchangeRepository extends AbstractRepository<ExchangeDocument>{
    protected readonly logger = new Logger(ExchangeRepository.name);

    constructor(
        @InjectModel(ExchangeDocument.name) ExchangeModel: Model<ExchangeDocument>
    ) {
        super(ExchangeModel)
    }
}