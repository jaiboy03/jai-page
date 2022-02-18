import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}
    
    async create(createUserDto: CreateUserDto): Promise<any> {
        const isExist = await this.userRepository.findOne({userId: createUserDto.userId});
        if (isExist) {
          throw new ForbiddenException({
            statusCode: HttpStatus.FORBIDDEN,
            message: [`이미 등록된 사용자입니다.`],
            error: 'Forbidden'
          })
        }
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        const {password, ...result} = await this.userRepository.save(createUserDto);
        return result;
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find({
            select : ["id", "userId", "name", "role"],
        });
    }

    async findOne(id : string) : Promise<User> {
        return this.userRepository.findOne({userId : id},{
            select: ["id", "userId", "name", "role"]
        })
    }
}
