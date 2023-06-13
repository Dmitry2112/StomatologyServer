import {forwardRef, Module} from '@nestjs/common';
import { TherapyController } from './therapy.controller';
import { TherapyService } from './therapy.service';
import {UsersModule} from "../users/users.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Therapy} from "./therapy.model";

@Module({
  controllers: [TherapyController],
  providers: [TherapyService],
  imports: [SequelizeModule.forFeature([User, Therapy])],
  exports: [TherapyService]
})
export class TherapyModule {}
