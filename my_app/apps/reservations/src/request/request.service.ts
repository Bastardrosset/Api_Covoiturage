import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestRepository } from './request.repository';
import { Types } from 'mongoose';

@Injectable()
export class RequestService {
  constructor(
    private readonly requestRepository: RequestRepository,
  ) {}

  create(createRequestDto: CreateRequestDto) {
    return this.requestRepository.create(createRequestDto)
  }

  findAll() {
    return this.requestRepository.find({})
  }

  findOne(_id: string) {
    return this.requestRepository.findOne({ _id: new Types.ObjectId(_id) })
  }

  update(_id: string, updateRequestDto: UpdateRequestDto) {
    return this.requestRepository.findOneAndUpdate(
      { _id: new Types.ObjectId(_id) },
      { $set: updateRequestDto }
    )
  }

  remove(_id: string) {
    return this.requestRepository.findOneAndDelete({ _id: new Types.ObjectId(_id) })
  }
}
