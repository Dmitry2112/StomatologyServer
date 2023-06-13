import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Appointment} from "./appointment.model";
import {CreateAppointmentDto} from "./dto/create-appointment.dto";

@Injectable()
export class AppointmentService {
    constructor(@InjectModel(Appointment) private appointmentRepository: typeof Appointment) {
    }

    async create(dto: CreateAppointmentDto) {
        const appointment = await this.appointmentRepository.create(dto)
        return appointment;
    }

}