import { IsDateString, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator'
import { Transform, Type } from 'class-transformer'
import { EventDocument } from '../../events/model/event.schema'
import { Types } from 'mongoose'
import { DirectionRequestEnum, StatusRequestEnum, TypeRequestEnum } from '../enum/request.enum'

import moment from 'moment'
import { Prop } from '@nestjs/mongoose'

export class CreateRequestDto {
    @Prop({ type: Types.ObjectId })
    _id: Types.ObjectId;

    @IsMongoId()
    @IsNotEmpty()
    readonly event_id: string | Types.ObjectId | EventDocument

    @IsMongoId()
    @IsNotEmpty()
    readonly user_id: string

    @MaxLength(50)
    @MinLength(4)
    @IsString()
    readonly firstname: string

    @MaxLength(20)
    @IsNumber()
    readonly nb_seat: number

    @IsNotEmpty()
    @IsEnum(DirectionRequestEnum)
    readonly direction: DirectionRequestEnum

    @Type(() => Date)
    @Transform(({ value }) => moment(value).format('YYYY-MM-DD [à] HH:mm:'))
    @IsDateString()
    readonly departure_time: string

    @IsString()
    @MaxLength(200)
    readonly pickup_address: string

    @IsNotEmpty()
    @IsEnum(TypeRequestEnum)
    readonly type: TypeRequestEnum

    @IsNotEmpty()
    @IsEnum(StatusRequestEnum)
    readonly status: StatusRequestEnum
}
