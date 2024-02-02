import { IsDateString } from '@app/common/utils/custom-date-validators';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsString, Matches, Max, MaxLength, MinLength } from 'class-validator';
import moment = require ('moment');


export class CreateEventDto {
    @ApiProperty()
    @IsDateString({ message: 'startDate must be a valid date string in YYYY-MM-DD format' })
    @IsNotEmpty()
    readonly startDate: string

    @IsString()
    @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/, {
        message: 'startTime must be a valid time string in HH:MM or HH:MM:SS format',
    })
    @IsNotEmpty()
    readonly startTime: string

    @ApiProperty()
    @IsDateString({ message: 'endDate must be a valid date string in YYYY-MM-DD format' })
    @IsNotEmpty()
    readonly endDate: string

    @IsString()
    @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/, {
        message: 'endTime must be a valid time string in HH:MM or HH:MM:SS format',
    })
    @IsNotEmpty()
    readonly endTime: string;

    @ApiProperty()
    @MaxLength(50)
    @MinLength(3)
    @IsString()
    readonly name: string

    @ApiProperty()
    @MaxLength(100)
    @IsString()
    readonly event_address: string

    @ApiProperty()
    @MaxLength(150)
    @IsString()
    readonly description?: string

    @MaxLength(255)
    @IsString()
    readonly image?: string;

    @Max(150)
    @IsNotEmpty()
    @IsNumber()
    readonly participant?: number

    @IsMongoId()
    association_id: string

    @IsMongoId({ each: true })
    groups?: string[]

    get formattedStartDate(): string {
        return moment(this.startDate).format('YYYY-MM-DD')
    }
    get formattedStartTime(): string {
        return moment(this.startTime).format('HH:mm:ss')
    }

    get formattedEndDate(): string {
        return moment(this.endDate).format('YYYY-MM-DD')
    }

    get formattedEndTime(): string {
        return moment(this.endTime).format('HH:mm:ss')
    }
}
