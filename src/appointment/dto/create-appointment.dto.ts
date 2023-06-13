export class CreateAppointmentDto {
    readonly name: string;
    readonly number: Number
    readonly recommendations: string
    readonly date: string
    readonly completed: boolean
    readonly therapyId : Number
}