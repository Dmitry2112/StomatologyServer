import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./users/user.model";
import { AuthModule } from './auth/auth.module';
import { TherapyModule } from './therapy/therapy.module';
import {Therapy} from "./therapy/therapy.model";
import { AppointmentModule } from './appointment/appointment.module';
import {Appointment} from "./appointment/appointment.model";
import { ServicesModule } from './services/services.module';
import {Service} from "./services/services.model";
import { FilesModule } from './files/files.module';
import { File} from "./files/files.model";
import * as path from "path";
import {ServeStaticModule} from "@nestjs/serve-static";

@Module({
  imports: [
      ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}.env`}),
      ServeStaticModule.forRoot({
        rootPath: path.resolve( __dirname, 'static'),
      }),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'stomatology',
        models: [User, Therapy, File, Appointment, Service],
        autoLoadModels: true
        // dialect: 'postgres',
        // host: process.env.POSTGRES_HOST,
        // port: Number(process.env.POSTGRES_PORT),
        // username: process.env.POSTGRES_USER,
        // password: process.env.POSTGRES_PASSWORD,
        // database: process.env.POSTGRES_DB,
        // models: [User, Therapy, Appointment, Service, File],
        // autoLoadModels: true
    }),
    UsersModule,
    AuthModule,
    TherapyModule,
    AppointmentModule,
    ServicesModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
