import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Types } from 'mongoose'
import { StatusRequestEnum } from '../../request/enum/request.enum'


@Schema({ collection: 'exchange', timestamps: true, versionKey: false })

export class ExchangeDocument {
    @Prop({ type: Types.ObjectId })
    _id: Types.ObjectId

    @Prop()
    @ApiProperty()
    user_id: string

    @Prop({
        type: [String],
        enum: StatusRequestEnum,
        required: true
    })
    @ApiProperty()
    status: StatusRequestEnum[]

}

export const ExchangeSchema = SchemaFactory.createForClass(ExchangeDocument)