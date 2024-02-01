import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { DatabaseModule } from '@app/common';
import { RequestDocument, RequestSchema } from './model/request.schema';
import { RequestRepository } from './request.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: RequestDocument.name, schema: RequestSchema }
    ])
  ],
  controllers: [RequestController],
  providers: [RequestService, RequestRepository],
})
export class RequestModule { }
