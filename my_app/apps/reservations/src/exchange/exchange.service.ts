import { Injectable } from '@nestjs/common';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { UpdateExchangeDto } from './dto/update-exchange.dto';
import { ExchangeRepository } from './exchange.repository'
import { Types } from 'mongoose'

@Injectable()
export class ExchangeService {
  constructor(
    private readonly exchangeRepository: ExchangeRepository,
  ) {}

  create(createExchangeDto: CreateExchangeDto) {
    return this.exchangeRepository.create(createExchangeDto)
  }

  findAll() {
    return this.exchangeRepository.find({});
  }

  findOne(_id: string) {
    return this.exchangeRepository.findOne({ _id: new Types.ObjectId(_id) });
  }

  update(_id: string, updateExchangeDto: UpdateExchangeDto) {
    return this.exchangeRepository.findOneAndUpdate(
      { _id: new Types.ObjectId(_id) },
      { $set: updateExchangeDto }
    );
  }

  remove(_id: string) {
    return this.exchangeRepository.findOneAndDelete({ _id: new Types.ObjectId(_id) });
  }
}
