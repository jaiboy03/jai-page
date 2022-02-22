import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Role } from 'src/auth/roles.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto) : Promise<any> {
        return this.userService.create(createUserDto);
    }

    @Get()
    @Role("admin")
    @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    findAll() : Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : string) : Promise<User> {
        return this.userService.findOne(id);
    }

}
