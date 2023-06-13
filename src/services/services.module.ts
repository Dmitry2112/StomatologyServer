import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Therapy} from "../therapy/therapy.model";
import {Appointment} from "../appointment/appointment.model";
import {Service} from "./services.model";

@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
  imports: [SequelizeModule.forFeature([User, Therapy, Appointment, Service])],
  exports: [ServicesService]
})
export class ServicesModule {}
