import {Body, Injectable, UnauthorizedException} from '@nestjs/common';
import {LoginUserDto} from "./dto/login-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../users/user.model";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }
    async login(loginUserDto: LoginUserDto) {
        const user = await this.validateUser(loginUserDto)
        const token = await this.generateToken(user)
        return {
            accessToken: token,
            user: {
                email: user.email,
                id: user.id,
                role: user.role
            }
        }
    }

    async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, role: user.role}
        return {
            token: this.jwtService.sign(payload)
        }
    }


    private async validateUser(loginUserDto: LoginUserDto) {
        const user = await this.userService.getUserByEmail(loginUserDto.email)
        if (!user) {
            throw new UnauthorizedException({message: 'Некорректый email'})
        }
        const passwordEquals = await bcrypt.compare(loginUserDto.password, user.password);
        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'Некорректый пароль'})
    }
}
