import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
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
    findAll() : Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : string) : Promise<User> {
        return this.userService.findOne(id);
    }
}
