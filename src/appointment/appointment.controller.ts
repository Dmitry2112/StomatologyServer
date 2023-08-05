import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {AppointmentService} from "./appointment.service";
import {CreateAppointmentDto} from "./dto/create-appointment.dto";
import {PatchAppointmentDto} from "./dto/patch-appointment.dto";

@Controller('appointment')
export class AppointmentController {
    constructor(private  appointmentService:  AppointmentService) {
    }

    @Post()
    createAppointment(@Body() dto: CreateAppointmentDto) {
        return this.appointmentService.create(dto)
    }

    @Delete(':id')
    deleteTherapy(@Param('id') id: number) {
        return this.appointmentService.deleteAppointment(id)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() patchAppointmentDto: PatchAppointmentDto) {
        return this.appointmentService.updateAppointment(id, patchAppointmentDto);
    }
}