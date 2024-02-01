import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { SchemaTypes, Types } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsMongoId, IsNumber, IsString, MaxLength, MinLength } from 'class-validator'
import { DirectionRequestEnum, TypeRequestEnum } from '../enum/request.enum'
import { EventDocument } from '../../events/model/event.schema'


@Schema({ collection: 'request', timestamps: true, versionKey: false })

export class RequestDocument {
    @Prop({ type: Types.ObjectId })
    _id: Types.ObjectId

    @ApiProperty()
    @Prop({
        type: SchemaTypes.ObjectId,
        ref: Event.name
    })
    event_id: string | Types.ObjectId | EventDocument

    @ApiProperty()
    @Prop({ required: true })
    @IsMongoId({ each: true })
    user_id: string

    @Prop({ required: true })
    @MaxLength(50)
    @MinLength(4)
    @IsString()
    @ApiProperty()
    firstname: string

    @Prop({ required: true })
    @MaxLength(20)
    @IsNumber()
    @ApiProperty()
    nb_seat: number

    @Prop({
        required: true,
        type: [String],
        enum: DirectionRequestEnum
    })
    @ApiProperty()
    direction: DirectionRequestEnum

    @Prop({ required: true })
    @IsDate()
    @ApiProperty()
    departure_time: string

    @Prop({ required: true })
    @IsString()
    @MaxLength(200)
    @ApiProperty()
    pickup_address: string

    @Prop({
        required: true,
        type: [String],
        enum: TypeRequestEnum
    })
    @ApiProperty()
    type: TypeRequestEnum
}
export const RequestSchema = SchemaFactory.createForClass(RequestDocument)
