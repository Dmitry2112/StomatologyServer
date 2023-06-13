import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {AppointmentService} from "./appointment.service";
import {CreateAppointmentDto} from "./dto/create-appointment.dto";

@Controller('appointment')
export class AppointmentController {
    constructor(private  appointmentService:  AppointmentService) {
    }

    @Post()
    createTherapy(@Body() dto: CreateAppointmentDto) {
        return this.appointmentService.create(dto)
    }


}