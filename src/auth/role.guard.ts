import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Observable} from "rxjs";
import {Reflector} from "@nestjs/core";
import {ROLE_KEY} from "./roles_auth.decorator";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private jwtService: JwtService,
                private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRole = this.reflector.getAllAndOverride(ROLE_KEY, [
            context.getHandler(),
            context.getClass()
        ])
        if (!requiredRole) {
            return true;
        }
        const req = context.switchToHttp().getRequest()
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]

            if (bearer != 'Bearer' || !token) {
                throw new UnauthorizedException({message: 'Пользователь не авторизован'})
            }

            const user = this.jwtService.verify(token);
            req.user = user;
            return user.role == requiredRole

        } catch (e) {
            throw new UnauthorizedException({message: 'Пользователь не авторизован'})
        }
    }
}