import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {AuthModule} from "../auth/auth.module";
import {TherapyModule} from "../therapy/therapy.module";
import {Therapy} from "../therapy/therapy.model";
import {Appointment} from "../appointment/appointment.model";
import {Service} from "../services/services.model";


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Therapy, Appointment, Service]),
    forwardRef(() => AuthModule)],
  exports: [UsersService]
})
export class UsersModule {}
