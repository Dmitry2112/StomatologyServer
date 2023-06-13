import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Role} from "../auth/roles_auth.decorator";
import {RoleGuard} from "../auth/role.guard";

@Controller('users')
export class UsersController {
    constructor(private userSrevice: UsersService) {
    }
    @UseGuards(JwtAuthGuard)
    @Role('ADMIN')
    @UseGuards(RoleGuard)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userSrevice.createUser(userDto);
    }

    @UseGuards(JwtAuthGuard)
    @Role('ADMIN')
    @UseGuards(RoleGuard)
    @Get()
    getAll() {
        return this.userSrevice.getAllUsers();
    }
}
