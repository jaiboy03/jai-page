import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { LoginUserDto } from "src/user/dto/login-user.dto";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService : AuthService){
        super({
            usernameField : 'userId'
        })
    }

    async validate(userId : string, password : string) : Promise<any> {
        let loginUserDto : LoginUserDto = {
            userId : userId,
            password: password
        }
        const user = await this.authService.validateUser(loginUserDto);

        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}