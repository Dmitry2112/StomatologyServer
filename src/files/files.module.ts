import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Therapy} from "../therapy/therapy.model";
import {Appointment} from "../appointment/appointment.model";
import {Service} from "../services/services.model";
import {File} from "./files.model";

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [SequelizeModule.forFeature([User, Therapy, Appointment, Service, File])],

})
export class FilesModule {}
