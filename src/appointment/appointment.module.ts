import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Therapy} from "../therapy/therapy.model";
import {Appointment} from "./appointment.model";
import {Service} from "../services/services.model";

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentService],
  imports: [SequelizeModule.forFeature([User, Therapy, Appointment, Service])],
  exports: [AppointmentService]
})
export class AppointmentModule {}