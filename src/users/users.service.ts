import { Injectable } from '@nestjs/common';
import {User} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import * as bcrypt from 'bcryptjs';
import {PatchAppointmentDto} from "../appointment/dto/patch-appointment.dto";
import {PatchUserDto} from "./dto/patch-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    async createUser(dto: CreateUserDto) {
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await this.userRepository.create({...dto, password: hashPassword});
        return user;
    }


    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true, nested: true}});
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true, nested: true}})
        return user
    }

    async getUserById(id: number) {
        const user = await  this.userRepository.findByPk(id, {include: {all: true, nested:true}})
        return user
    }

    async updateUser(id: number, dto: PatchUserDto) {
        return await this.userRepository.update(dto, {where: {id: id}});
    }
}
