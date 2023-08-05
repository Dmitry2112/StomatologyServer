import {Body, Controller, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Role} from "../auth/roles_auth.decorator";
import {RoleGuard} from "../auth/role.guard";
import {PatchAppointmentDto} from "../appointment/dto/patch-appointment.dto";
import {PatchUserDto} from "./dto/patch-user.dto";

@Controller('users')
export class UsersController {
    constructor(private userSrevice: UsersService) {
    }

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userSrevice.createUser(userDto);
    }

    @Get()
    getAll() {
        return this.userSrevice.getAllUsers();
    }

    //@UseGuards(JwtAuthGuard)
    //@Role('ADMIN')
    //@UseGuards(RoleGuard)
    @Get(':id')
    getById(@Param('id') id: number) {
        return this.userSrevice.getUserById(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() patchUserDto: PatchUserDto) {
        return this.userSrevice.updateUser(id, patchUserDto);
    }
}
