import { IsEnum, IsMongoId, IsString } from "class-validator"
import { StatusRequestEnum } from "../../request/enum/request.enum"
import { Prop } from "@nestjs/mongoose"
import { Types } from "mongoose"


export class CreateExchangeDto {
    @Prop({ type: Types.ObjectId })
    _id: Types.ObjectId;
    
    @IsString()
    @IsMongoId()
    readonly user_id: string

    @IsEnum({
        StatusRequestEnum,
        default: StatusRequestEnum.pending
    })
    status: StatusRequestEnum[]
}