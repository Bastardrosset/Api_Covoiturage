import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator'

export function IsDateString(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'isDateString',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                validate(value: any, _args: ValidationArguments) {
                    return (typeof value === 'string' && !isNaN(Date.parse(value))) // Simple Date validation
                }
            }
        })
    }
};